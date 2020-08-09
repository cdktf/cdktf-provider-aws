// https://www.terraform.io/docs/providers/aws/r/spot_datafeed_subscription.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "bucket": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "prefix": {
        "type": "string",
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SpotDatafeedSubscriptionConfig extends TerraformMetaArguments {
  readonly bucket: string;
  readonly prefix?: string;
}

// Resource

export class SpotDatafeedSubscription extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SpotDatafeedSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_spot_datafeed_subscription',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._prefix = config.prefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket: string;
  public get bucket() {
    return this._bucket;
  }
  public set bucket(value: string) {
    this._bucket = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string;
  public get prefix() {
    return this._prefix;
  }
  public set prefix(value: string | undefined) {
    this._prefix = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: this._bucket,
      prefix: this._prefix,
    };
  }
}
