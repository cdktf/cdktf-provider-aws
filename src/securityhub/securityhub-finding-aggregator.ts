// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Security Hub
*/
export interface SecurityhubFindingAggregatorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_finding_aggregator#linking_mode SecurityhubFindingAggregator#linking_mode}
  */
  readonly linkingMode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_finding_aggregator#specified_regions SecurityhubFindingAggregator#specified_regions}
  */
  readonly specifiedRegions?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/securityhub_finding_aggregator aws_securityhub_finding_aggregator}
*/
export class SecurityhubFindingAggregator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_securityhub_finding_aggregator";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/securityhub_finding_aggregator aws_securityhub_finding_aggregator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityhubFindingAggregatorConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityhubFindingAggregatorConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_securityhub_finding_aggregator',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._linkingMode = config.linkingMode;
    this._specifiedRegions = config.specifiedRegions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // linking_mode - computed: false, optional: false, required: true
  private _linkingMode?: string; 
  public get linkingMode() {
    return this.getStringAttribute('linking_mode');
  }
  public set linkingMode(value: string) {
    this._linkingMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkingModeInput() {
    return this._linkingMode;
  }

  // specified_regions - computed: false, optional: true, required: false
  private _specifiedRegions?: string[]; 
  public get specifiedRegions() {
    return cdktf.Fn.tolist(this.getListAttribute('specified_regions'));
  }
  public set specifiedRegions(value: string[]) {
    this._specifiedRegions = value;
  }
  public resetSpecifiedRegions() {
    this._specifiedRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specifiedRegionsInput() {
    return this._specifiedRegions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      linking_mode: cdktf.stringToTerraform(this._linkingMode),
      specified_regions: cdktf.listMapper(cdktf.stringToTerraform)(this._specifiedRegions),
    };
  }
}
