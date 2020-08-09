// https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "branch_filter": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "payload_url": {
        "type": "string",
        "computed": true
      },
      "project_name": {
        "type": "string",
        "required": true
      },
      "secret": {
        "type": "string",
        "computed": true,
        "sensitive": true
      },
      "url": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "filter_group": {
        "nesting_mode": "set",
        "block": {
          "block_types": {
            "filter": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "exclude_matched_pattern": {
                    "type": "bool",
                    "optional": true
                  },
                  "pattern": {
                    "type": "string",
                    "required": true
                  },
                  "type": {
                    "type": "string",
                    "required": true
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CodebuildWebhookConfig extends TerraformMetaArguments {
  readonly branchFilter?: string;
  readonly projectName: string;
  /** filter_group block */
  readonly filterGroup?: CodebuildWebhookFilterGroup[];
}
export interface CodebuildWebhookFilterGroupFilter {
  readonly excludeMatchedPattern?: boolean;
  readonly pattern: string;
  readonly type: string;
}
export interface CodebuildWebhookFilterGroup {
  /** filter block */
  readonly filter?: CodebuildWebhookFilterGroupFilter[];
}

// Resource

export class CodebuildWebhook extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CodebuildWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codebuild_webhook',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._branchFilter = config.branchFilter;
    this._projectName = config.projectName;
    this._filterGroup = config.filterGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branch_filter - computed: false, optional: true, required: false
  private _branchFilter?: string;
  public get branchFilter() {
    return this._branchFilter;
  }
  public set branchFilter(value: string | undefined) {
    this._branchFilter = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // payload_url - computed: true, optional: false, required: true
  public get payloadUrl() {
    return this.getStringAttribute('payload_url');
  }

  // project_name - computed: false, optional: false, required: true
  private _projectName: string;
  public get projectName() {
    return this._projectName;
  }
  public set projectName(value: string) {
    this._projectName = value;
  }

  // secret - computed: true, optional: false, required: true
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // url - computed: true, optional: false, required: true
  public get url() {
    return this.getStringAttribute('url');
  }

  // filter_group - computed: false, optional: true, required: false
  private _filterGroup?: CodebuildWebhookFilterGroup[];
  public get filterGroup() {
    return this._filterGroup;
  }
  public set filterGroup(value: CodebuildWebhookFilterGroup[] | undefined) {
    this._filterGroup = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      branch_filter: this._branchFilter,
      project_name: this._projectName,
      filter_group: this._filterGroup,
    };
  }
}
