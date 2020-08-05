// https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "client_id_list": {
        "type": [
          "list",
          "string"
        ],
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "thumbprint_list": {
        "type": [
          "list",
          "string"
        ],
        "required": true
      },
      "url": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IamOpenidConnectProviderConfig extends TerraformMetaArguments {
  readonly clientIdList: string[];
  readonly thumbprintList: string[];
  readonly url: string;
}

// Resource

export class IamOpenidConnectProvider extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IamOpenidConnectProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_openid_connect_provider',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clientIdList = config.clientIdList;
    this._thumbprintList = config.thumbprintList;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // client_id_list - computed: false, optional: false, required: true
  private _clientIdList: string[];
  public get clientIdList() {
    return this._clientIdList;
  }
  public set clientIdList(value: string[]) {
    this._clientIdList = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // thumbprint_list - computed: false, optional: false, required: true
  private _thumbprintList: string[];
  public get thumbprintList() {
    return this._thumbprintList;
  }
  public set thumbprintList(value: string[]) {
    this._thumbprintList = value;
  }

  // url - computed: false, optional: false, required: true
  private _url: string;
  public get url() {
    return this._url;
  }
  public set url(value: string) {
    this._url = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id_list: this._clientIdList,
      thumbprint_list: this._thumbprintList,
      url: this._url,
    };
  }
}
