# `appsyncFunction` Submodule <a name="`appsyncFunction` Submodule" id="@cdktf/provider-aws.appsyncFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncFunction <a name="AppsyncFunction" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_function aws_appsync_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_function

appsyncFunction.AppsyncFunction(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_id: str,
  data_source: str,
  name: str,
  code: str = None,
  description: str = None,
  function_version: str = None,
  id: str = None,
  max_batch_size: typing.Union[int, float] = None,
  request_mapping_template: str = None,
  response_mapping_template: str = None,
  runtime: AppsyncFunctionRuntime = None,
  sync_config: AppsyncFunctionSyncConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.apiId">api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#api_id AppsyncFunction#api_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.dataSource">data_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#data_source AppsyncFunction#data_source}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#name AppsyncFunction#name}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.code">code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#code AppsyncFunction#code}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#description AppsyncFunction#description}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.functionVersion">function_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#function_version AppsyncFunction#function_version}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#id AppsyncFunction#id}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.maxBatchSize">max_batch_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#max_batch_size AppsyncFunction#max_batch_size}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.requestMappingTemplate">request_mapping_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#request_mapping_template AppsyncFunction#request_mapping_template}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.responseMappingTemplate">response_mapping_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#response_mapping_template AppsyncFunction#response_mapping_template}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.runtime">runtime</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime">AppsyncFunctionRuntime</a></code> | runtime block. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.syncConfig">sync_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a></code> | sync_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.apiId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#api_id AppsyncFunction#api_id}.

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.dataSource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#data_source AppsyncFunction#data_source}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#name AppsyncFunction#name}.

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.code"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#code AppsyncFunction#code}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#description AppsyncFunction#description}.

---

##### `function_version`<sup>Optional</sup> <a name="function_version" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.functionVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#function_version AppsyncFunction#function_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#id AppsyncFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_batch_size`<sup>Optional</sup> <a name="max_batch_size" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.maxBatchSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#max_batch_size AppsyncFunction#max_batch_size}.

---

##### `request_mapping_template`<sup>Optional</sup> <a name="request_mapping_template" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.requestMappingTemplate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#request_mapping_template AppsyncFunction#request_mapping_template}.

---

##### `response_mapping_template`<sup>Optional</sup> <a name="response_mapping_template" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.responseMappingTemplate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#response_mapping_template AppsyncFunction#response_mapping_template}.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.runtime"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime">AppsyncFunctionRuntime</a>

runtime block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#runtime AppsyncFunction#runtime}

---

##### `sync_config`<sup>Optional</sup> <a name="sync_config" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.syncConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a>

sync_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#sync_config AppsyncFunction#sync_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.putRuntime">put_runtime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.putSyncConfig">put_sync_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetCode">reset_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetFunctionVersion">reset_function_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetMaxBatchSize">reset_max_batch_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetRequestMappingTemplate">reset_request_mapping_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetResponseMappingTemplate">reset_response_mapping_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetRuntime">reset_runtime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetSyncConfig">reset_sync_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_runtime` <a name="put_runtime" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.putRuntime"></a>

```python
def put_runtime(
  name: str,
  runtime_version: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.putRuntime.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#name AppsyncFunction#name}.

---

###### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.putRuntime.parameter.runtimeVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#runtime_version AppsyncFunction#runtime_version}.

---

##### `put_sync_config` <a name="put_sync_config" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.putSyncConfig"></a>

```python
def put_sync_config(
  conflict_detection: str = None,
  conflict_handler: str = None,
  lambda_conflict_handler_config: AppsyncFunctionSyncConfigLambdaConflictHandlerConfig = None
) -> None
```

###### `conflict_detection`<sup>Optional</sup> <a name="conflict_detection" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.putSyncConfig.parameter.conflictDetection"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#conflict_detection AppsyncFunction#conflict_detection}.

---

###### `conflict_handler`<sup>Optional</sup> <a name="conflict_handler" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.putSyncConfig.parameter.conflictHandler"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#conflict_handler AppsyncFunction#conflict_handler}.

---

###### `lambda_conflict_handler_config`<sup>Optional</sup> <a name="lambda_conflict_handler_config" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.putSyncConfig.parameter.lambdaConflictHandlerConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a>

lambda_conflict_handler_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#lambda_conflict_handler_config AppsyncFunction#lambda_conflict_handler_config}

---

##### `reset_code` <a name="reset_code" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetCode"></a>

```python
def reset_code() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_function_version` <a name="reset_function_version" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetFunctionVersion"></a>

```python
def reset_function_version() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_batch_size` <a name="reset_max_batch_size" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetMaxBatchSize"></a>

```python
def reset_max_batch_size() -> None
```

##### `reset_request_mapping_template` <a name="reset_request_mapping_template" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetRequestMappingTemplate"></a>

```python
def reset_request_mapping_template() -> None
```

##### `reset_response_mapping_template` <a name="reset_response_mapping_template" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetResponseMappingTemplate"></a>

```python
def reset_response_mapping_template() -> None
```

##### `reset_runtime` <a name="reset_runtime" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetRuntime"></a>

```python
def reset_runtime() -> None
```

##### `reset_sync_config` <a name="reset_sync_config" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetSyncConfig"></a>

```python
def reset_sync_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import appsync_function

appsyncFunction.AppsyncFunction.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import appsync_function

appsyncFunction.AppsyncFunction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import appsync_function

appsyncFunction.AppsyncFunction.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.functionId">function_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.runtime">runtime</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference">AppsyncFunctionRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.syncConfig">sync_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference">AppsyncFunctionSyncConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.apiIdInput">api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.codeInput">code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.dataSourceInput">data_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.functionVersionInput">function_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.maxBatchSizeInput">max_batch_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.requestMappingTemplateInput">request_mapping_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.responseMappingTemplateInput">response_mapping_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.runtimeInput">runtime_input</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime">AppsyncFunctionRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.syncConfigInput">sync_config_input</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.apiId">api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.dataSource">data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.functionVersion">function_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.maxBatchSize">max_batch_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.requestMappingTemplate">request_mapping_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.responseMappingTemplate">response_mapping_template</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `function_id`<sup>Required</sup> <a name="function_id" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.functionId"></a>

```python
function_id: str
```

- *Type:* str

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.runtime"></a>

```python
runtime: AppsyncFunctionRuntimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference">AppsyncFunctionRuntimeOutputReference</a>

---

##### `sync_config`<sup>Required</sup> <a name="sync_config" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.syncConfig"></a>

```python
sync_config: AppsyncFunctionSyncConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference">AppsyncFunctionSyncConfigOutputReference</a>

---

##### `api_id_input`<sup>Optional</sup> <a name="api_id_input" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.apiIdInput"></a>

```python
api_id_input: str
```

- *Type:* str

---

##### `code_input`<sup>Optional</sup> <a name="code_input" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.codeInput"></a>

```python
code_input: str
```

- *Type:* str

---

##### `data_source_input`<sup>Optional</sup> <a name="data_source_input" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.dataSourceInput"></a>

```python
data_source_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `function_version_input`<sup>Optional</sup> <a name="function_version_input" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.functionVersionInput"></a>

```python
function_version_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_batch_size_input`<sup>Optional</sup> <a name="max_batch_size_input" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.maxBatchSizeInput"></a>

```python
max_batch_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `request_mapping_template_input`<sup>Optional</sup> <a name="request_mapping_template_input" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.requestMappingTemplateInput"></a>

```python
request_mapping_template_input: str
```

- *Type:* str

---

##### `response_mapping_template_input`<sup>Optional</sup> <a name="response_mapping_template_input" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.responseMappingTemplateInput"></a>

```python
response_mapping_template_input: str
```

- *Type:* str

---

##### `runtime_input`<sup>Optional</sup> <a name="runtime_input" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.runtimeInput"></a>

```python
runtime_input: AppsyncFunctionRuntime
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime">AppsyncFunctionRuntime</a>

---

##### `sync_config_input`<sup>Optional</sup> <a name="sync_config_input" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.syncConfigInput"></a>

```python
sync_config_input: AppsyncFunctionSyncConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a>

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `function_version`<sup>Required</sup> <a name="function_version" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.functionVersion"></a>

```python
function_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_batch_size`<sup>Required</sup> <a name="max_batch_size" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.maxBatchSize"></a>

```python
max_batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `request_mapping_template`<sup>Required</sup> <a name="request_mapping_template" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.requestMappingTemplate"></a>

```python
request_mapping_template: str
```

- *Type:* str

---

##### `response_mapping_template`<sup>Required</sup> <a name="response_mapping_template" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.responseMappingTemplate"></a>

```python
response_mapping_template: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncFunctionConfig <a name="AppsyncFunctionConfig" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_function

appsyncFunction.AppsyncFunctionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_id: str,
  data_source: str,
  name: str,
  code: str = None,
  description: str = None,
  function_version: str = None,
  id: str = None,
  max_batch_size: typing.Union[int, float] = None,
  request_mapping_template: str = None,
  response_mapping_template: str = None,
  runtime: AppsyncFunctionRuntime = None,
  sync_config: AppsyncFunctionSyncConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.apiId">api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#api_id AppsyncFunction#api_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.dataSource">data_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#data_source AppsyncFunction#data_source}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#name AppsyncFunction#name}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.code">code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#code AppsyncFunction#code}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#description AppsyncFunction#description}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.functionVersion">function_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#function_version AppsyncFunction#function_version}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#id AppsyncFunction#id}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.maxBatchSize">max_batch_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#max_batch_size AppsyncFunction#max_batch_size}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.requestMappingTemplate">request_mapping_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#request_mapping_template AppsyncFunction#request_mapping_template}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.responseMappingTemplate">response_mapping_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#response_mapping_template AppsyncFunction#response_mapping_template}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.runtime">runtime</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime">AppsyncFunctionRuntime</a></code> | runtime block. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.syncConfig">sync_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a></code> | sync_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#api_id AppsyncFunction#api_id}.

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#data_source AppsyncFunction#data_source}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#name AppsyncFunction#name}.

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.code"></a>

```python
code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#code AppsyncFunction#code}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#description AppsyncFunction#description}.

---

##### `function_version`<sup>Optional</sup> <a name="function_version" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.functionVersion"></a>

```python
function_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#function_version AppsyncFunction#function_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#id AppsyncFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_batch_size`<sup>Optional</sup> <a name="max_batch_size" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.maxBatchSize"></a>

```python
max_batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#max_batch_size AppsyncFunction#max_batch_size}.

---

##### `request_mapping_template`<sup>Optional</sup> <a name="request_mapping_template" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.requestMappingTemplate"></a>

```python
request_mapping_template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#request_mapping_template AppsyncFunction#request_mapping_template}.

---

##### `response_mapping_template`<sup>Optional</sup> <a name="response_mapping_template" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.responseMappingTemplate"></a>

```python
response_mapping_template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#response_mapping_template AppsyncFunction#response_mapping_template}.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.runtime"></a>

```python
runtime: AppsyncFunctionRuntime
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime">AppsyncFunctionRuntime</a>

runtime block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#runtime AppsyncFunction#runtime}

---

##### `sync_config`<sup>Optional</sup> <a name="sync_config" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.syncConfig"></a>

```python
sync_config: AppsyncFunctionSyncConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a>

sync_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#sync_config AppsyncFunction#sync_config}

---

### AppsyncFunctionRuntime <a name="AppsyncFunctionRuntime" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_function

appsyncFunction.AppsyncFunctionRuntime(
  name: str,
  runtime_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#name AppsyncFunction#name}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#runtime_version AppsyncFunction#runtime_version}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#name AppsyncFunction#name}.

---

##### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#runtime_version AppsyncFunction#runtime_version}.

---

### AppsyncFunctionSyncConfig <a name="AppsyncFunctionSyncConfig" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_function

appsyncFunction.AppsyncFunctionSyncConfig(
  conflict_detection: str = None,
  conflict_handler: str = None,
  lambda_conflict_handler_config: AppsyncFunctionSyncConfigLambdaConflictHandlerConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig.property.conflictDetection">conflict_detection</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#conflict_detection AppsyncFunction#conflict_detection}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig.property.conflictHandler">conflict_handler</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#conflict_handler AppsyncFunction#conflict_handler}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig.property.lambdaConflictHandlerConfig">lambda_conflict_handler_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a></code> | lambda_conflict_handler_config block. |

---

##### `conflict_detection`<sup>Optional</sup> <a name="conflict_detection" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig.property.conflictDetection"></a>

```python
conflict_detection: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#conflict_detection AppsyncFunction#conflict_detection}.

---

##### `conflict_handler`<sup>Optional</sup> <a name="conflict_handler" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig.property.conflictHandler"></a>

```python
conflict_handler: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#conflict_handler AppsyncFunction#conflict_handler}.

---

##### `lambda_conflict_handler_config`<sup>Optional</sup> <a name="lambda_conflict_handler_config" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig.property.lambdaConflictHandlerConfig"></a>

```python
lambda_conflict_handler_config: AppsyncFunctionSyncConfigLambdaConflictHandlerConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a>

lambda_conflict_handler_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#lambda_conflict_handler_config AppsyncFunction#lambda_conflict_handler_config}

---

### AppsyncFunctionSyncConfigLambdaConflictHandlerConfig <a name="AppsyncFunctionSyncConfigLambdaConflictHandlerConfig" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_function

appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig(
  lambda_conflict_handler_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn">lambda_conflict_handler_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#lambda_conflict_handler_arn AppsyncFunction#lambda_conflict_handler_arn}. |

---

##### `lambda_conflict_handler_arn`<sup>Optional</sup> <a name="lambda_conflict_handler_arn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn"></a>

```python
lambda_conflict_handler_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#lambda_conflict_handler_arn AppsyncFunction#lambda_conflict_handler_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncFunctionRuntimeOutputReference <a name="AppsyncFunctionRuntimeOutputReference" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_function

appsyncFunction.AppsyncFunctionRuntimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.runtimeVersionInput">runtime_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime">AppsyncFunctionRuntime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `runtime_version_input`<sup>Optional</sup> <a name="runtime_version_input" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.runtimeVersionInput"></a>

```python
runtime_version_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.internalValue"></a>

```python
internal_value: AppsyncFunctionRuntime
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime">AppsyncFunctionRuntime</a>

---


### AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference <a name="AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_function

appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.resetLambdaConflictHandlerArn">reset_lambda_conflict_handler_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_lambda_conflict_handler_arn` <a name="reset_lambda_conflict_handler_arn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.resetLambdaConflictHandlerArn"></a>

```python
def reset_lambda_conflict_handler_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArnInput">lambda_conflict_handler_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn">lambda_conflict_handler_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_conflict_handler_arn_input`<sup>Optional</sup> <a name="lambda_conflict_handler_arn_input" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArnInput"></a>

```python
lambda_conflict_handler_arn_input: str
```

- *Type:* str

---

##### `lambda_conflict_handler_arn`<sup>Required</sup> <a name="lambda_conflict_handler_arn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn"></a>

```python
lambda_conflict_handler_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue"></a>

```python
internal_value: AppsyncFunctionSyncConfigLambdaConflictHandlerConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a>

---


### AppsyncFunctionSyncConfigOutputReference <a name="AppsyncFunctionSyncConfigOutputReference" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_function

appsyncFunction.AppsyncFunctionSyncConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.putLambdaConflictHandlerConfig">put_lambda_conflict_handler_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resetConflictDetection">reset_conflict_detection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resetConflictHandler">reset_conflict_handler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resetLambdaConflictHandlerConfig">reset_lambda_conflict_handler_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_lambda_conflict_handler_config` <a name="put_lambda_conflict_handler_config" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.putLambdaConflictHandlerConfig"></a>

```python
def put_lambda_conflict_handler_config(
  lambda_conflict_handler_arn: str = None
) -> None
```

###### `lambda_conflict_handler_arn`<sup>Optional</sup> <a name="lambda_conflict_handler_arn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.putLambdaConflictHandlerConfig.parameter.lambdaConflictHandlerArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#lambda_conflict_handler_arn AppsyncFunction#lambda_conflict_handler_arn}.

---

##### `reset_conflict_detection` <a name="reset_conflict_detection" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resetConflictDetection"></a>

```python
def reset_conflict_detection() -> None
```

##### `reset_conflict_handler` <a name="reset_conflict_handler" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resetConflictHandler"></a>

```python
def reset_conflict_handler() -> None
```

##### `reset_lambda_conflict_handler_config` <a name="reset_lambda_conflict_handler_config" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resetLambdaConflictHandlerConfig"></a>

```python
def reset_lambda_conflict_handler_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.lambdaConflictHandlerConfig">lambda_conflict_handler_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference">AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictDetectionInput">conflict_detection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictHandlerInput">conflict_handler_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.lambdaConflictHandlerConfigInput">lambda_conflict_handler_config_input</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictDetection">conflict_detection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictHandler">conflict_handler</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_conflict_handler_config`<sup>Required</sup> <a name="lambda_conflict_handler_config" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.lambdaConflictHandlerConfig"></a>

```python
lambda_conflict_handler_config: AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference">AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference</a>

---

##### `conflict_detection_input`<sup>Optional</sup> <a name="conflict_detection_input" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictDetectionInput"></a>

```python
conflict_detection_input: str
```

- *Type:* str

---

##### `conflict_handler_input`<sup>Optional</sup> <a name="conflict_handler_input" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictHandlerInput"></a>

```python
conflict_handler_input: str
```

- *Type:* str

---

##### `lambda_conflict_handler_config_input`<sup>Optional</sup> <a name="lambda_conflict_handler_config_input" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.lambdaConflictHandlerConfigInput"></a>

```python
lambda_conflict_handler_config_input: AppsyncFunctionSyncConfigLambdaConflictHandlerConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a>

---

##### `conflict_detection`<sup>Required</sup> <a name="conflict_detection" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictDetection"></a>

```python
conflict_detection: str
```

- *Type:* str

---

##### `conflict_handler`<sup>Required</sup> <a name="conflict_handler" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictHandler"></a>

```python
conflict_handler: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.internalValue"></a>

```python
internal_value: AppsyncFunctionSyncConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a>

---



