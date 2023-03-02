# `apiGatewayRestApi` Submodule <a name="`apiGatewayRestApi` Submodule" id="@cdktf/provider-aws.apiGatewayRestApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayRestApi <a name="ApiGatewayRestApi" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api aws_api_gateway_rest_api}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_rest_api

apiGatewayRestApi.ApiGatewayRestApi(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  api_key_source: str = None,
  binary_media_types: typing.List[str] = None,
  body: str = None,
  description: str = None,
  disable_execute_api_endpoint: typing.Union[bool, IResolvable] = None,
  endpoint_configuration: ApiGatewayRestApiEndpointConfiguration = None,
  id: str = None,
  minimum_compression_size: typing.Union[int, float] = None,
  parameters: typing.Mapping[str] = None,
  policy: str = None,
  put_rest_api_mode: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#name ApiGatewayRestApi#name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.apiKeySource">api_key_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#api_key_source ApiGatewayRestApi#api_key_source}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.binaryMediaTypes">binary_media_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#binary_media_types ApiGatewayRestApi#binary_media_types}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.body">body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#body ApiGatewayRestApi#body}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#description ApiGatewayRestApi#description}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.disableExecuteApiEndpoint">disable_execute_api_endpoint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#disable_execute_api_endpoint ApiGatewayRestApi#disable_execute_api_endpoint}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.endpointConfiguration">endpoint_configuration</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a></code> | endpoint_configuration block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#id ApiGatewayRestApi#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.minimumCompressionSize">minimum_compression_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#minimum_compression_size ApiGatewayRestApi#minimum_compression_size}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#parameters ApiGatewayRestApi#parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#policy ApiGatewayRestApi#policy}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.putRestApiMode">put_rest_api_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#put_rest_api_mode ApiGatewayRestApi#put_rest_api_mode}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#tags ApiGatewayRestApi#tags}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#tags_all ApiGatewayRestApi#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#name ApiGatewayRestApi#name}.

---

##### `api_key_source`<sup>Optional</sup> <a name="api_key_source" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.apiKeySource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#api_key_source ApiGatewayRestApi#api_key_source}.

---

##### `binary_media_types`<sup>Optional</sup> <a name="binary_media_types" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.binaryMediaTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#binary_media_types ApiGatewayRestApi#binary_media_types}.

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.body"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#body ApiGatewayRestApi#body}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#description ApiGatewayRestApi#description}.

---

##### `disable_execute_api_endpoint`<sup>Optional</sup> <a name="disable_execute_api_endpoint" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.disableExecuteApiEndpoint"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#disable_execute_api_endpoint ApiGatewayRestApi#disable_execute_api_endpoint}.

---

##### `endpoint_configuration`<sup>Optional</sup> <a name="endpoint_configuration" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.endpointConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a>

endpoint_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#endpoint_configuration ApiGatewayRestApi#endpoint_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#id ApiGatewayRestApi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minimum_compression_size`<sup>Optional</sup> <a name="minimum_compression_size" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.minimumCompressionSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#minimum_compression_size ApiGatewayRestApi#minimum_compression_size}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#parameters ApiGatewayRestApi#parameters}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.policy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#policy ApiGatewayRestApi#policy}.

---

##### `put_rest_api_mode`<sup>Optional</sup> <a name="put_rest_api_mode" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.putRestApiMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#put_rest_api_mode ApiGatewayRestApi#put_rest_api_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#tags ApiGatewayRestApi#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#tags_all ApiGatewayRestApi#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.putEndpointConfiguration">put_endpoint_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetApiKeySource">reset_api_key_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetBinaryMediaTypes">reset_binary_media_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetBody">reset_body</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetDisableExecuteApiEndpoint">reset_disable_execute_api_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetEndpointConfiguration">reset_endpoint_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetMinimumCompressionSize">reset_minimum_compression_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetPolicy">reset_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetPutRestApiMode">reset_put_rest_api_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_endpoint_configuration` <a name="put_endpoint_configuration" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.putEndpointConfiguration"></a>

```python
def put_endpoint_configuration(
  types: typing.List[str],
  vpc_endpoint_ids: typing.List[str] = None
) -> None
```

###### `types`<sup>Required</sup> <a name="types" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.putEndpointConfiguration.parameter.types"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#types ApiGatewayRestApi#types}.

---

###### `vpc_endpoint_ids`<sup>Optional</sup> <a name="vpc_endpoint_ids" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.putEndpointConfiguration.parameter.vpcEndpointIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#vpc_endpoint_ids ApiGatewayRestApi#vpc_endpoint_ids}.

---

##### `reset_api_key_source` <a name="reset_api_key_source" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetApiKeySource"></a>

```python
def reset_api_key_source() -> None
```

##### `reset_binary_media_types` <a name="reset_binary_media_types" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetBinaryMediaTypes"></a>

```python
def reset_binary_media_types() -> None
```

##### `reset_body` <a name="reset_body" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetBody"></a>

```python
def reset_body() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disable_execute_api_endpoint` <a name="reset_disable_execute_api_endpoint" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetDisableExecuteApiEndpoint"></a>

```python
def reset_disable_execute_api_endpoint() -> None
```

##### `reset_endpoint_configuration` <a name="reset_endpoint_configuration" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetEndpointConfiguration"></a>

```python
def reset_endpoint_configuration() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_minimum_compression_size` <a name="reset_minimum_compression_size" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetMinimumCompressionSize"></a>

```python
def reset_minimum_compression_size() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_policy` <a name="reset_policy" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetPolicy"></a>

```python
def reset_policy() -> None
```

##### `reset_put_rest_api_mode` <a name="reset_put_rest_api_mode" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetPutRestApiMode"></a>

```python
def reset_put_rest_api_mode() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_rest_api

apiGatewayRestApi.ApiGatewayRestApi.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_rest_api

apiGatewayRestApi.ApiGatewayRestApi.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_rest_api

apiGatewayRestApi.ApiGatewayRestApi.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.createdDate">created_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.endpointConfiguration">endpoint_configuration</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference">ApiGatewayRestApiEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.executionArn">execution_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.rootResourceId">root_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.apiKeySourceInput">api_key_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.binaryMediaTypesInput">binary_media_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.bodyInput">body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.disableExecuteApiEndpointInput">disable_execute_api_endpoint_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.endpointConfigurationInput">endpoint_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.minimumCompressionSizeInput">minimum_compression_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.putRestApiModeInput">put_rest_api_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.apiKeySource">api_key_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.binaryMediaTypes">binary_media_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.disableExecuteApiEndpoint">disable_execute_api_endpoint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.minimumCompressionSize">minimum_compression_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.putRestApiMode">put_rest_api_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_date`<sup>Required</sup> <a name="created_date" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.createdDate"></a>

```python
created_date: str
```

- *Type:* str

---

##### `endpoint_configuration`<sup>Required</sup> <a name="endpoint_configuration" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.endpointConfiguration"></a>

```python
endpoint_configuration: ApiGatewayRestApiEndpointConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference">ApiGatewayRestApiEndpointConfigurationOutputReference</a>

---

##### `execution_arn`<sup>Required</sup> <a name="execution_arn" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.executionArn"></a>

```python
execution_arn: str
```

- *Type:* str

---

##### `root_resource_id`<sup>Required</sup> <a name="root_resource_id" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.rootResourceId"></a>

```python
root_resource_id: str
```

- *Type:* str

---

##### `api_key_source_input`<sup>Optional</sup> <a name="api_key_source_input" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.apiKeySourceInput"></a>

```python
api_key_source_input: str
```

- *Type:* str

---

##### `binary_media_types_input`<sup>Optional</sup> <a name="binary_media_types_input" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.binaryMediaTypesInput"></a>

```python
binary_media_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `body_input`<sup>Optional</sup> <a name="body_input" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.bodyInput"></a>

```python
body_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disable_execute_api_endpoint_input`<sup>Optional</sup> <a name="disable_execute_api_endpoint_input" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.disableExecuteApiEndpointInput"></a>

```python
disable_execute_api_endpoint_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `endpoint_configuration_input`<sup>Optional</sup> <a name="endpoint_configuration_input" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.endpointConfigurationInput"></a>

```python
endpoint_configuration_input: ApiGatewayRestApiEndpointConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `minimum_compression_size_input`<sup>Optional</sup> <a name="minimum_compression_size_input" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.minimumCompressionSizeInput"></a>

```python
minimum_compression_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `put_rest_api_mode_input`<sup>Optional</sup> <a name="put_rest_api_mode_input" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.putRestApiModeInput"></a>

```python
put_rest_api_mode_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `api_key_source`<sup>Required</sup> <a name="api_key_source" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.apiKeySource"></a>

```python
api_key_source: str
```

- *Type:* str

---

##### `binary_media_types`<sup>Required</sup> <a name="binary_media_types" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.binaryMediaTypes"></a>

```python
binary_media_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_execute_api_endpoint`<sup>Required</sup> <a name="disable_execute_api_endpoint" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.disableExecuteApiEndpoint"></a>

```python
disable_execute_api_endpoint: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `minimum_compression_size`<sup>Required</sup> <a name="minimum_compression_size" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.minimumCompressionSize"></a>

```python
minimum_compression_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `put_rest_api_mode`<sup>Required</sup> <a name="put_rest_api_mode" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.putRestApiMode"></a>

```python
put_rest_api_mode: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayRestApiConfig <a name="ApiGatewayRestApiConfig" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_rest_api

apiGatewayRestApi.ApiGatewayRestApiConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  api_key_source: str = None,
  binary_media_types: typing.List[str] = None,
  body: str = None,
  description: str = None,
  disable_execute_api_endpoint: typing.Union[bool, IResolvable] = None,
  endpoint_configuration: ApiGatewayRestApiEndpointConfiguration = None,
  id: str = None,
  minimum_compression_size: typing.Union[int, float] = None,
  parameters: typing.Mapping[str] = None,
  policy: str = None,
  put_rest_api_mode: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#name ApiGatewayRestApi#name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.apiKeySource">api_key_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#api_key_source ApiGatewayRestApi#api_key_source}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.binaryMediaTypes">binary_media_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#binary_media_types ApiGatewayRestApi#binary_media_types}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.body">body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#body ApiGatewayRestApi#body}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#description ApiGatewayRestApi#description}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.disableExecuteApiEndpoint">disable_execute_api_endpoint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#disable_execute_api_endpoint ApiGatewayRestApi#disable_execute_api_endpoint}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.endpointConfiguration">endpoint_configuration</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a></code> | endpoint_configuration block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#id ApiGatewayRestApi#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.minimumCompressionSize">minimum_compression_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#minimum_compression_size ApiGatewayRestApi#minimum_compression_size}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#parameters ApiGatewayRestApi#parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#policy ApiGatewayRestApi#policy}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.putRestApiMode">put_rest_api_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#put_rest_api_mode ApiGatewayRestApi#put_rest_api_mode}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#tags ApiGatewayRestApi#tags}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#tags_all ApiGatewayRestApi#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#name ApiGatewayRestApi#name}.

---

##### `api_key_source`<sup>Optional</sup> <a name="api_key_source" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.apiKeySource"></a>

```python
api_key_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#api_key_source ApiGatewayRestApi#api_key_source}.

---

##### `binary_media_types`<sup>Optional</sup> <a name="binary_media_types" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.binaryMediaTypes"></a>

```python
binary_media_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#binary_media_types ApiGatewayRestApi#binary_media_types}.

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.body"></a>

```python
body: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#body ApiGatewayRestApi#body}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#description ApiGatewayRestApi#description}.

---

##### `disable_execute_api_endpoint`<sup>Optional</sup> <a name="disable_execute_api_endpoint" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.disableExecuteApiEndpoint"></a>

```python
disable_execute_api_endpoint: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#disable_execute_api_endpoint ApiGatewayRestApi#disable_execute_api_endpoint}.

---

##### `endpoint_configuration`<sup>Optional</sup> <a name="endpoint_configuration" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.endpointConfiguration"></a>

```python
endpoint_configuration: ApiGatewayRestApiEndpointConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a>

endpoint_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#endpoint_configuration ApiGatewayRestApi#endpoint_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#id ApiGatewayRestApi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minimum_compression_size`<sup>Optional</sup> <a name="minimum_compression_size" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.minimumCompressionSize"></a>

```python
minimum_compression_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#minimum_compression_size ApiGatewayRestApi#minimum_compression_size}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#parameters ApiGatewayRestApi#parameters}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.policy"></a>

```python
policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#policy ApiGatewayRestApi#policy}.

---

##### `put_rest_api_mode`<sup>Optional</sup> <a name="put_rest_api_mode" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.putRestApiMode"></a>

```python
put_rest_api_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#put_rest_api_mode ApiGatewayRestApi#put_rest_api_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#tags ApiGatewayRestApi#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#tags_all ApiGatewayRestApi#tags_all}.

---

### ApiGatewayRestApiEndpointConfiguration <a name="ApiGatewayRestApiEndpointConfiguration" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_rest_api

apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration(
  types: typing.List[str],
  vpc_endpoint_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration.property.types">types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#types ApiGatewayRestApi#types}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration.property.vpcEndpointIds">vpc_endpoint_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#vpc_endpoint_ids ApiGatewayRestApi#vpc_endpoint_ids}. |

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration.property.types"></a>

```python
types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#types ApiGatewayRestApi#types}.

---

##### `vpc_endpoint_ids`<sup>Optional</sup> <a name="vpc_endpoint_ids" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration.property.vpcEndpointIds"></a>

```python
vpc_endpoint_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#vpc_endpoint_ids ApiGatewayRestApi#vpc_endpoint_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayRestApiEndpointConfigurationOutputReference <a name="ApiGatewayRestApiEndpointConfigurationOutputReference" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_rest_api

apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.resetVpcEndpointIds">reset_vpc_endpoint_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_vpc_endpoint_ids` <a name="reset_vpc_endpoint_ids" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.resetVpcEndpointIds"></a>

```python
def reset_vpc_endpoint_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.typesInput">types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIdsInput">vpc_endpoint_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.types">types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIds">vpc_endpoint_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `types_input`<sup>Optional</sup> <a name="types_input" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.typesInput"></a>

```python
types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_endpoint_ids_input`<sup>Optional</sup> <a name="vpc_endpoint_ids_input" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIdsInput"></a>

```python
vpc_endpoint_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.types"></a>

```python
types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_endpoint_ids`<sup>Required</sup> <a name="vpc_endpoint_ids" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIds"></a>

```python
vpc_endpoint_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: ApiGatewayRestApiEndpointConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a>

---



