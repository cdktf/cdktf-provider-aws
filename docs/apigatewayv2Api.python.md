# `apigatewayv2Api` Submodule <a name="`apigatewayv2Api` Submodule" id="@cdktf/provider-aws.apigatewayv2Api"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2Api <a name="Apigatewayv2Api" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api aws_apigatewayv2_api}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_api

apigatewayv2Api.Apigatewayv2Api(
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
  protocol_type: str,
  api_key_selection_expression: str = None,
  body: str = None,
  cors_configuration: Apigatewayv2ApiCorsConfiguration = None,
  credentials_arn: str = None,
  description: str = None,
  disable_execute_api_endpoint: typing.Union[bool, IResolvable] = None,
  fail_on_warnings: typing.Union[bool, IResolvable] = None,
  id: str = None,
  route_key: str = None,
  route_selection_expression: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  target: str = None,
  version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#name Apigatewayv2Api#name}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.protocolType">protocol_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#protocol_type Apigatewayv2Api#protocol_type}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.apiKeySelectionExpression">api_key_selection_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#api_key_selection_expression Apigatewayv2Api#api_key_selection_expression}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.body">body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#body Apigatewayv2Api#body}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.corsConfiguration">cors_configuration</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a></code> | cors_configuration block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.credentialsArn">credentials_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#credentials_arn Apigatewayv2Api#credentials_arn}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#description Apigatewayv2Api#description}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.disableExecuteApiEndpoint">disable_execute_api_endpoint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#disable_execute_api_endpoint Apigatewayv2Api#disable_execute_api_endpoint}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.failOnWarnings">fail_on_warnings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#fail_on_warnings Apigatewayv2Api#fail_on_warnings}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#id Apigatewayv2Api#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.routeKey">route_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#route_key Apigatewayv2Api#route_key}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.routeSelectionExpression">route_selection_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#route_selection_expression Apigatewayv2Api#route_selection_expression}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#tags Apigatewayv2Api#tags}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#tags_all Apigatewayv2Api#tags_all}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#target Apigatewayv2Api#target}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#version Apigatewayv2Api#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#name Apigatewayv2Api#name}.

---

##### `protocol_type`<sup>Required</sup> <a name="protocol_type" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.protocolType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#protocol_type Apigatewayv2Api#protocol_type}.

---

##### `api_key_selection_expression`<sup>Optional</sup> <a name="api_key_selection_expression" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.apiKeySelectionExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#api_key_selection_expression Apigatewayv2Api#api_key_selection_expression}.

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.body"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#body Apigatewayv2Api#body}.

---

##### `cors_configuration`<sup>Optional</sup> <a name="cors_configuration" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.corsConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a>

cors_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#cors_configuration Apigatewayv2Api#cors_configuration}

---

##### `credentials_arn`<sup>Optional</sup> <a name="credentials_arn" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.credentialsArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#credentials_arn Apigatewayv2Api#credentials_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#description Apigatewayv2Api#description}.

---

##### `disable_execute_api_endpoint`<sup>Optional</sup> <a name="disable_execute_api_endpoint" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.disableExecuteApiEndpoint"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#disable_execute_api_endpoint Apigatewayv2Api#disable_execute_api_endpoint}.

---

##### `fail_on_warnings`<sup>Optional</sup> <a name="fail_on_warnings" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.failOnWarnings"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#fail_on_warnings Apigatewayv2Api#fail_on_warnings}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#id Apigatewayv2Api#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `route_key`<sup>Optional</sup> <a name="route_key" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.routeKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#route_key Apigatewayv2Api#route_key}.

---

##### `route_selection_expression`<sup>Optional</sup> <a name="route_selection_expression" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.routeSelectionExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#route_selection_expression Apigatewayv2Api#route_selection_expression}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#tags Apigatewayv2Api#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#tags_all Apigatewayv2Api#tags_all}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.target"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#target Apigatewayv2Api#target}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#version Apigatewayv2Api#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.putCorsConfiguration">put_cors_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetApiKeySelectionExpression">reset_api_key_selection_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetBody">reset_body</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetCorsConfiguration">reset_cors_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetCredentialsArn">reset_credentials_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetDisableExecuteApiEndpoint">reset_disable_execute_api_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetFailOnWarnings">reset_fail_on_warnings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetRouteKey">reset_route_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetRouteSelectionExpression">reset_route_selection_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetTarget">reset_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_cors_configuration` <a name="put_cors_configuration" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.putCorsConfiguration"></a>

```python
def put_cors_configuration(
  allow_credentials: typing.Union[bool, IResolvable] = None,
  allow_headers: typing.List[str] = None,
  allow_methods: typing.List[str] = None,
  allow_origins: typing.List[str] = None,
  expose_headers: typing.List[str] = None,
  max_age: typing.Union[int, float] = None
) -> None
```

###### `allow_credentials`<sup>Optional</sup> <a name="allow_credentials" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.putCorsConfiguration.parameter.allowCredentials"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#allow_credentials Apigatewayv2Api#allow_credentials}.

---

###### `allow_headers`<sup>Optional</sup> <a name="allow_headers" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.putCorsConfiguration.parameter.allowHeaders"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#allow_headers Apigatewayv2Api#allow_headers}.

---

###### `allow_methods`<sup>Optional</sup> <a name="allow_methods" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.putCorsConfiguration.parameter.allowMethods"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#allow_methods Apigatewayv2Api#allow_methods}.

---

###### `allow_origins`<sup>Optional</sup> <a name="allow_origins" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.putCorsConfiguration.parameter.allowOrigins"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#allow_origins Apigatewayv2Api#allow_origins}.

---

###### `expose_headers`<sup>Optional</sup> <a name="expose_headers" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.putCorsConfiguration.parameter.exposeHeaders"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#expose_headers Apigatewayv2Api#expose_headers}.

---

###### `max_age`<sup>Optional</sup> <a name="max_age" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.putCorsConfiguration.parameter.maxAge"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#max_age Apigatewayv2Api#max_age}.

---

##### `reset_api_key_selection_expression` <a name="reset_api_key_selection_expression" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetApiKeySelectionExpression"></a>

```python
def reset_api_key_selection_expression() -> None
```

##### `reset_body` <a name="reset_body" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetBody"></a>

```python
def reset_body() -> None
```

##### `reset_cors_configuration` <a name="reset_cors_configuration" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetCorsConfiguration"></a>

```python
def reset_cors_configuration() -> None
```

##### `reset_credentials_arn` <a name="reset_credentials_arn" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetCredentialsArn"></a>

```python
def reset_credentials_arn() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disable_execute_api_endpoint` <a name="reset_disable_execute_api_endpoint" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetDisableExecuteApiEndpoint"></a>

```python
def reset_disable_execute_api_endpoint() -> None
```

##### `reset_fail_on_warnings` <a name="reset_fail_on_warnings" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetFailOnWarnings"></a>

```python
def reset_fail_on_warnings() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_route_key` <a name="reset_route_key" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetRouteKey"></a>

```python
def reset_route_key() -> None
```

##### `reset_route_selection_expression` <a name="reset_route_selection_expression" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetRouteSelectionExpression"></a>

```python
def reset_route_selection_expression() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetTarget"></a>

```python
def reset_target() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_api

apigatewayv2Api.Apigatewayv2Api.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_api

apigatewayv2Api.Apigatewayv2Api.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_api

apigatewayv2Api.Apigatewayv2Api.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.apiEndpoint">api_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.corsConfiguration">cors_configuration</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference">Apigatewayv2ApiCorsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.executionArn">execution_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.apiKeySelectionExpressionInput">api_key_selection_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.bodyInput">body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.corsConfigurationInput">cors_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.credentialsArnInput">credentials_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.disableExecuteApiEndpointInput">disable_execute_api_endpoint_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.failOnWarningsInput">fail_on_warnings_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.protocolTypeInput">protocol_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.routeKeyInput">route_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.routeSelectionExpressionInput">route_selection_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.apiKeySelectionExpression">api_key_selection_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.credentialsArn">credentials_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.disableExecuteApiEndpoint">disable_execute_api_endpoint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.failOnWarnings">fail_on_warnings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.protocolType">protocol_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.routeKey">route_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.routeSelectionExpression">route_selection_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_endpoint`<sup>Required</sup> <a name="api_endpoint" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.apiEndpoint"></a>

```python
api_endpoint: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cors_configuration`<sup>Required</sup> <a name="cors_configuration" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.corsConfiguration"></a>

```python
cors_configuration: Apigatewayv2ApiCorsConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference">Apigatewayv2ApiCorsConfigurationOutputReference</a>

---

##### `execution_arn`<sup>Required</sup> <a name="execution_arn" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.executionArn"></a>

```python
execution_arn: str
```

- *Type:* str

---

##### `api_key_selection_expression_input`<sup>Optional</sup> <a name="api_key_selection_expression_input" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.apiKeySelectionExpressionInput"></a>

```python
api_key_selection_expression_input: str
```

- *Type:* str

---

##### `body_input`<sup>Optional</sup> <a name="body_input" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.bodyInput"></a>

```python
body_input: str
```

- *Type:* str

---

##### `cors_configuration_input`<sup>Optional</sup> <a name="cors_configuration_input" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.corsConfigurationInput"></a>

```python
cors_configuration_input: Apigatewayv2ApiCorsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a>

---

##### `credentials_arn_input`<sup>Optional</sup> <a name="credentials_arn_input" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.credentialsArnInput"></a>

```python
credentials_arn_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disable_execute_api_endpoint_input`<sup>Optional</sup> <a name="disable_execute_api_endpoint_input" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.disableExecuteApiEndpointInput"></a>

```python
disable_execute_api_endpoint_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fail_on_warnings_input`<sup>Optional</sup> <a name="fail_on_warnings_input" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.failOnWarningsInput"></a>

```python
fail_on_warnings_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `protocol_type_input`<sup>Optional</sup> <a name="protocol_type_input" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.protocolTypeInput"></a>

```python
protocol_type_input: str
```

- *Type:* str

---

##### `route_key_input`<sup>Optional</sup> <a name="route_key_input" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.routeKeyInput"></a>

```python
route_key_input: str
```

- *Type:* str

---

##### `route_selection_expression_input`<sup>Optional</sup> <a name="route_selection_expression_input" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.routeSelectionExpressionInput"></a>

```python
route_selection_expression_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `api_key_selection_expression`<sup>Required</sup> <a name="api_key_selection_expression" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.apiKeySelectionExpression"></a>

```python
api_key_selection_expression: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `credentials_arn`<sup>Required</sup> <a name="credentials_arn" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.credentialsArn"></a>

```python
credentials_arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_execute_api_endpoint`<sup>Required</sup> <a name="disable_execute_api_endpoint" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.disableExecuteApiEndpoint"></a>

```python
disable_execute_api_endpoint: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fail_on_warnings`<sup>Required</sup> <a name="fail_on_warnings" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.failOnWarnings"></a>

```python
fail_on_warnings: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protocol_type`<sup>Required</sup> <a name="protocol_type" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.protocolType"></a>

```python
protocol_type: str
```

- *Type:* str

---

##### `route_key`<sup>Required</sup> <a name="route_key" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.routeKey"></a>

```python
route_key: str
```

- *Type:* str

---

##### `route_selection_expression`<sup>Required</sup> <a name="route_selection_expression" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.routeSelectionExpression"></a>

```python
route_selection_expression: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2ApiConfig <a name="Apigatewayv2ApiConfig" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_api

apigatewayv2Api.Apigatewayv2ApiConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  protocol_type: str,
  api_key_selection_expression: str = None,
  body: str = None,
  cors_configuration: Apigatewayv2ApiCorsConfiguration = None,
  credentials_arn: str = None,
  description: str = None,
  disable_execute_api_endpoint: typing.Union[bool, IResolvable] = None,
  fail_on_warnings: typing.Union[bool, IResolvable] = None,
  id: str = None,
  route_key: str = None,
  route_selection_expression: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  target: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#name Apigatewayv2Api#name}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.protocolType">protocol_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#protocol_type Apigatewayv2Api#protocol_type}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.apiKeySelectionExpression">api_key_selection_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#api_key_selection_expression Apigatewayv2Api#api_key_selection_expression}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.body">body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#body Apigatewayv2Api#body}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.corsConfiguration">cors_configuration</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a></code> | cors_configuration block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.credentialsArn">credentials_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#credentials_arn Apigatewayv2Api#credentials_arn}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#description Apigatewayv2Api#description}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.disableExecuteApiEndpoint">disable_execute_api_endpoint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#disable_execute_api_endpoint Apigatewayv2Api#disable_execute_api_endpoint}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.failOnWarnings">fail_on_warnings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#fail_on_warnings Apigatewayv2Api#fail_on_warnings}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#id Apigatewayv2Api#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.routeKey">route_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#route_key Apigatewayv2Api#route_key}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.routeSelectionExpression">route_selection_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#route_selection_expression Apigatewayv2Api#route_selection_expression}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#tags Apigatewayv2Api#tags}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#tags_all Apigatewayv2Api#tags_all}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#target Apigatewayv2Api#target}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#version Apigatewayv2Api#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#name Apigatewayv2Api#name}.

---

##### `protocol_type`<sup>Required</sup> <a name="protocol_type" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.protocolType"></a>

```python
protocol_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#protocol_type Apigatewayv2Api#protocol_type}.

---

##### `api_key_selection_expression`<sup>Optional</sup> <a name="api_key_selection_expression" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.apiKeySelectionExpression"></a>

```python
api_key_selection_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#api_key_selection_expression Apigatewayv2Api#api_key_selection_expression}.

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.body"></a>

```python
body: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#body Apigatewayv2Api#body}.

---

##### `cors_configuration`<sup>Optional</sup> <a name="cors_configuration" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.corsConfiguration"></a>

```python
cors_configuration: Apigatewayv2ApiCorsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a>

cors_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#cors_configuration Apigatewayv2Api#cors_configuration}

---

##### `credentials_arn`<sup>Optional</sup> <a name="credentials_arn" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.credentialsArn"></a>

```python
credentials_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#credentials_arn Apigatewayv2Api#credentials_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#description Apigatewayv2Api#description}.

---

##### `disable_execute_api_endpoint`<sup>Optional</sup> <a name="disable_execute_api_endpoint" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.disableExecuteApiEndpoint"></a>

```python
disable_execute_api_endpoint: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#disable_execute_api_endpoint Apigatewayv2Api#disable_execute_api_endpoint}.

---

##### `fail_on_warnings`<sup>Optional</sup> <a name="fail_on_warnings" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.failOnWarnings"></a>

```python
fail_on_warnings: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#fail_on_warnings Apigatewayv2Api#fail_on_warnings}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#id Apigatewayv2Api#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `route_key`<sup>Optional</sup> <a name="route_key" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.routeKey"></a>

```python
route_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#route_key Apigatewayv2Api#route_key}.

---

##### `route_selection_expression`<sup>Optional</sup> <a name="route_selection_expression" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.routeSelectionExpression"></a>

```python
route_selection_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#route_selection_expression Apigatewayv2Api#route_selection_expression}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#tags Apigatewayv2Api#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#tags_all Apigatewayv2Api#tags_all}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.target"></a>

```python
target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#target Apigatewayv2Api#target}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#version Apigatewayv2Api#version}.

---

### Apigatewayv2ApiCorsConfiguration <a name="Apigatewayv2ApiCorsConfiguration" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_api

apigatewayv2Api.Apigatewayv2ApiCorsConfiguration(
  allow_credentials: typing.Union[bool, IResolvable] = None,
  allow_headers: typing.List[str] = None,
  allow_methods: typing.List[str] = None,
  allow_origins: typing.List[str] = None,
  expose_headers: typing.List[str] = None,
  max_age: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowCredentials">allow_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#allow_credentials Apigatewayv2Api#allow_credentials}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowHeaders">allow_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#allow_headers Apigatewayv2Api#allow_headers}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowMethods">allow_methods</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#allow_methods Apigatewayv2Api#allow_methods}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowOrigins">allow_origins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#allow_origins Apigatewayv2Api#allow_origins}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.exposeHeaders">expose_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#expose_headers Apigatewayv2Api#expose_headers}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.maxAge">max_age</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#max_age Apigatewayv2Api#max_age}. |

---

##### `allow_credentials`<sup>Optional</sup> <a name="allow_credentials" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowCredentials"></a>

```python
allow_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#allow_credentials Apigatewayv2Api#allow_credentials}.

---

##### `allow_headers`<sup>Optional</sup> <a name="allow_headers" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowHeaders"></a>

```python
allow_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#allow_headers Apigatewayv2Api#allow_headers}.

---

##### `allow_methods`<sup>Optional</sup> <a name="allow_methods" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowMethods"></a>

```python
allow_methods: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#allow_methods Apigatewayv2Api#allow_methods}.

---

##### `allow_origins`<sup>Optional</sup> <a name="allow_origins" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowOrigins"></a>

```python
allow_origins: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#allow_origins Apigatewayv2Api#allow_origins}.

---

##### `expose_headers`<sup>Optional</sup> <a name="expose_headers" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.exposeHeaders"></a>

```python
expose_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#expose_headers Apigatewayv2Api#expose_headers}.

---

##### `max_age`<sup>Optional</sup> <a name="max_age" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.maxAge"></a>

```python
max_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#max_age Apigatewayv2Api#max_age}.

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2ApiCorsConfigurationOutputReference <a name="Apigatewayv2ApiCorsConfigurationOutputReference" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_api

apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowCredentials">reset_allow_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowHeaders">reset_allow_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowMethods">reset_allow_methods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowOrigins">reset_allow_origins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetExposeHeaders">reset_expose_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetMaxAge">reset_max_age</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_credentials` <a name="reset_allow_credentials" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowCredentials"></a>

```python
def reset_allow_credentials() -> None
```

##### `reset_allow_headers` <a name="reset_allow_headers" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowHeaders"></a>

```python
def reset_allow_headers() -> None
```

##### `reset_allow_methods` <a name="reset_allow_methods" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowMethods"></a>

```python
def reset_allow_methods() -> None
```

##### `reset_allow_origins` <a name="reset_allow_origins" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowOrigins"></a>

```python
def reset_allow_origins() -> None
```

##### `reset_expose_headers` <a name="reset_expose_headers" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetExposeHeaders"></a>

```python
def reset_expose_headers() -> None
```

##### `reset_max_age` <a name="reset_max_age" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetMaxAge"></a>

```python
def reset_max_age() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowCredentialsInput">allow_credentials_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowHeadersInput">allow_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowMethodsInput">allow_methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowOriginsInput">allow_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.exposeHeadersInput">expose_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.maxAgeInput">max_age_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowCredentials">allow_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowHeaders">allow_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowMethods">allow_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowOrigins">allow_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.exposeHeaders">expose_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.maxAge">max_age</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_credentials_input`<sup>Optional</sup> <a name="allow_credentials_input" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowCredentialsInput"></a>

```python
allow_credentials_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_headers_input`<sup>Optional</sup> <a name="allow_headers_input" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowHeadersInput"></a>

```python
allow_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_methods_input`<sup>Optional</sup> <a name="allow_methods_input" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowMethodsInput"></a>

```python
allow_methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_origins_input`<sup>Optional</sup> <a name="allow_origins_input" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowOriginsInput"></a>

```python
allow_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `expose_headers_input`<sup>Optional</sup> <a name="expose_headers_input" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.exposeHeadersInput"></a>

```python
expose_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age_input`<sup>Optional</sup> <a name="max_age_input" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.maxAgeInput"></a>

```python
max_age_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allow_credentials`<sup>Required</sup> <a name="allow_credentials" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowCredentials"></a>

```python
allow_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_headers`<sup>Required</sup> <a name="allow_headers" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowHeaders"></a>

```python
allow_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_methods`<sup>Required</sup> <a name="allow_methods" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowMethods"></a>

```python
allow_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_origins`<sup>Required</sup> <a name="allow_origins" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowOrigins"></a>

```python
allow_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `expose_headers`<sup>Required</sup> <a name="expose_headers" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.exposeHeaders"></a>

```python
expose_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age`<sup>Required</sup> <a name="max_age" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.maxAge"></a>

```python
max_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: Apigatewayv2ApiCorsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a>

---



