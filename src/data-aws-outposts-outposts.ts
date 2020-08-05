// https://www.terraform.io/docs/providers/aws/r/data_aws_outposts_outposts.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arns": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "availability_zone": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "availability_zone_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ids": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "site_id": {
        "type": "string",
        "optional": true,
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsOutpostsOutpostsConfig extends TerraformMetaArguments {
  readonly availabilityZone?: string;
  readonly availabilityZoneId?: string;
  readonly siteId?: string;
}

// Resource

export class DataAwsOutpostsOutposts extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsOutpostsOutpostsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_outposts_outposts',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityZone = config.availabilityZone;
    this._availabilityZoneId = config.availabilityZoneId;
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arns - computed: true, optional: false, required: true
  public get arns() {
    return this.getListAttribute('arns');
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string;
  public get availabilityZone() {
    return this._availabilityZone ?? this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string | undefined) {
    this._availabilityZone = value;
  }

  // availability_zone_id - computed: true, optional: true, required: false
  private _availabilityZoneId?: string;
  public get availabilityZoneId() {
    return this._availabilityZoneId ?? this.getStringAttribute('availability_zone_id');
  }
  public set availabilityZoneId(value: string | undefined) {
    this._availabilityZoneId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ids - computed: true, optional: false, required: true
  public get ids() {
    return this.getListAttribute('ids');
  }

  // site_id - computed: true, optional: true, required: false
  private _siteId?: string;
  public get siteId() {
    return this._siteId ?? this.getStringAttribute('site_id');
  }
  public set siteId(value: string | undefined) {
    this._siteId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: this._availabilityZone,
      availability_zone_id: this._availabilityZoneId,
      site_id: this._siteId,
    };
  }
}
