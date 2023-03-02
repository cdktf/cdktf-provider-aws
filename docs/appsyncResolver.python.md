# `appsyncResolver` Submodule <a name="`appsyncResolver` Submodule" id="@cdktf/provider-aws.appsyncResolver"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncResolver <a name="AppsyncResolver" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver aws_appsync_resolver}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_resolver

appsyncResolver.AppsyncResolver(
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
  field: str,
  type: str,
  caching_config: AppsyncResolverCachingConfig = None,
  code: str = None,
  data_source: str = None,
  id: str = None,
  kind: str = None,
  max_batch_size: typing.Union[int, float] = None,
  pipeline_config: AppsyncResolverPipelineConfig = None,
  request_template: str = None,
  response_template: str = None,
  runtime: AppsyncResolverRuntime = None,
  sync_config: AppsyncResolverSyncConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.apiId">api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#api_id AppsyncResolver#api_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.field">field</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#field AppsyncResolver#field}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#type AppsyncResolver#type}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.cachingConfig">caching_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a></code> | caching_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.code">code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#code AppsyncResolver#code}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.dataSource">data_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#data_source AppsyncResolver#data_source}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#id AppsyncResolver#id}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.kind">kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#kind AppsyncResolver#kind}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.maxBatchSize">max_batch_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#max_batch_size AppsyncResolver#max_batch_size}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.pipelineConfig">pipeline_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a></code> | pipeline_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.requestTemplate">request_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#request_template AppsyncResolver#request_template}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.responseTemplate">response_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#response_template AppsyncResolver#response_template}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.runtime">runtime</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a></code> | runtime block. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.syncConfig">sync_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a></code> | sync_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.apiId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#api_id AppsyncResolver#api_id}.

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.field"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#field AppsyncResolver#field}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#type AppsyncResolver#type}.

---

##### `caching_config`<sup>Optional</sup> <a name="caching_config" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.cachingConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a>

caching_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#caching_config AppsyncResolver#caching_config}

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.code"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#code AppsyncResolver#code}.

---

##### `data_source`<sup>Optional</sup> <a name="data_source" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.dataSource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#data_source AppsyncResolver#data_source}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#id AppsyncResolver#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.kind"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#kind AppsyncResolver#kind}.

---

##### `max_batch_size`<sup>Optional</sup> <a name="max_batch_size" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.maxBatchSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#max_batch_size AppsyncResolver#max_batch_size}.

---

##### `pipeline_config`<sup>Optional</sup> <a name="pipeline_config" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.pipelineConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a>

pipeline_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#pipeline_config AppsyncResolver#pipeline_config}

---

##### `request_template`<sup>Optional</sup> <a name="request_template" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.requestTemplate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#request_template AppsyncResolver#request_template}.

---

##### `response_template`<sup>Optional</sup> <a name="response_template" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.responseTemplate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#response_template AppsyncResolver#response_template}.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.runtime"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a>

runtime block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#runtime AppsyncResolver#runtime}

---

##### `sync_config`<sup>Optional</sup> <a name="sync_config" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.syncConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a>

sync_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#sync_config AppsyncResolver#sync_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.putCachingConfig">put_caching_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.putPipelineConfig">put_pipeline_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.putRuntime">put_runtime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.putSyncConfig">put_sync_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetCachingConfig">reset_caching_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetCode">reset_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetDataSource">reset_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetKind">reset_kind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetMaxBatchSize">reset_max_batch_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetPipelineConfig">reset_pipeline_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetRequestTemplate">reset_request_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetResponseTemplate">reset_response_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetRuntime">reset_runtime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetSyncConfig">reset_sync_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_caching_config` <a name="put_caching_config" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.putCachingConfig"></a>

```python
def put_caching_config(
  caching_keys: typing.List[str] = None,
  ttl: typing.Union[int, float] = None
) -> None
```

###### `caching_keys`<sup>Optional</sup> <a name="caching_keys" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.putCachingConfig.parameter.cachingKeys"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#caching_keys AppsyncResolver#caching_keys}.

---

###### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.putCachingConfig.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#ttl AppsyncResolver#ttl}.

---

##### `put_pipeline_config` <a name="put_pipeline_config" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.putPipelineConfig"></a>

```python
def put_pipeline_config(
  functions: typing.List[str] = None
) -> None
```

###### `functions`<sup>Optional</sup> <a name="functions" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.putPipelineConfig.parameter.functions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#functions AppsyncResolver#functions}.

---

##### `put_runtime` <a name="put_runtime" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.putRuntime"></a>

```python
def put_runtime(
  name: str,
  runtime_version: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.putRuntime.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#name AppsyncResolver#name}.

---

###### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.putRuntime.parameter.runtimeVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#runtime_version AppsyncResolver#runtime_version}.

---

##### `put_sync_config` <a name="put_sync_config" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.putSyncConfig"></a>

```python
def put_sync_config(
  conflict_detection: str = None,
  conflict_handler: str = None,
  lambda_conflict_handler_config: AppsyncResolverSyncConfigLambdaConflictHandlerConfig = None
) -> None
```

###### `conflict_detection`<sup>Optional</sup> <a name="conflict_detection" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.putSyncConfig.parameter.conflictDetection"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#conflict_detection AppsyncResolver#conflict_detection}.

---

###### `conflict_handler`<sup>Optional</sup> <a name="conflict_handler" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.putSyncConfig.parameter.conflictHandler"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#conflict_handler AppsyncResolver#conflict_handler}.

---

###### `lambda_conflict_handler_config`<sup>Optional</sup> <a name="lambda_conflict_handler_config" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.putSyncConfig.parameter.lambdaConflictHandlerConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a>

lambda_conflict_handler_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#lambda_conflict_handler_config AppsyncResolver#lambda_conflict_handler_config}

---

##### `reset_caching_config` <a name="reset_caching_config" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetCachingConfig"></a>

```python
def reset_caching_config() -> None
```

##### `reset_code` <a name="reset_code" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetCode"></a>

```python
def reset_code() -> None
```

##### `reset_data_source` <a name="reset_data_source" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetDataSource"></a>

```python
def reset_data_source() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kind` <a name="reset_kind" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetKind"></a>

```python
def reset_kind() -> None
```

##### `reset_max_batch_size` <a name="reset_max_batch_size" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetMaxBatchSize"></a>

```python
def reset_max_batch_size() -> None
```

##### `reset_pipeline_config` <a name="reset_pipeline_config" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetPipelineConfig"></a>

```python
def reset_pipeline_config() -> None
```

##### `reset_request_template` <a name="reset_request_template" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetRequestTemplate"></a>

```python
def reset_request_template() -> None
```

##### `reset_response_template` <a name="reset_response_template" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetResponseTemplate"></a>

```python
def reset_response_template() -> None
```

##### `reset_runtime` <a name="reset_runtime" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetRuntime"></a>

```python
def reset_runtime() -> None
```

##### `reset_sync_config` <a name="reset_sync_config" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetSyncConfig"></a>

```python
def reset_sync_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import appsync_resolver

appsyncResolver.AppsyncResolver.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import appsync_resolver

appsyncResolver.AppsyncResolver.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import appsync_resolver

appsyncResolver.AppsyncResolver.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.cachingConfig">caching_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference">AppsyncResolverCachingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.pipelineConfig">pipeline_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference">AppsyncResolverPipelineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.runtime">runtime</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference">AppsyncResolverRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.syncConfig">sync_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference">AppsyncResolverSyncConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.apiIdInput">api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.cachingConfigInput">caching_config_input</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.codeInput">code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.dataSourceInput">data_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.maxBatchSizeInput">max_batch_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.pipelineConfigInput">pipeline_config_input</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.requestTemplateInput">request_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.responseTemplateInput">response_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.runtimeInput">runtime_input</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.syncConfigInput">sync_config_input</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.apiId">api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.dataSource">data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.maxBatchSize">max_batch_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.requestTemplate">request_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.responseTemplate">response_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `caching_config`<sup>Required</sup> <a name="caching_config" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.cachingConfig"></a>

```python
caching_config: AppsyncResolverCachingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference">AppsyncResolverCachingConfigOutputReference</a>

---

##### `pipeline_config`<sup>Required</sup> <a name="pipeline_config" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.pipelineConfig"></a>

```python
pipeline_config: AppsyncResolverPipelineConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference">AppsyncResolverPipelineConfigOutputReference</a>

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.runtime"></a>

```python
runtime: AppsyncResolverRuntimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference">AppsyncResolverRuntimeOutputReference</a>

---

##### `sync_config`<sup>Required</sup> <a name="sync_config" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.syncConfig"></a>

```python
sync_config: AppsyncResolverSyncConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference">AppsyncResolverSyncConfigOutputReference</a>

---

##### `api_id_input`<sup>Optional</sup> <a name="api_id_input" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.apiIdInput"></a>

```python
api_id_input: str
```

- *Type:* str

---

##### `caching_config_input`<sup>Optional</sup> <a name="caching_config_input" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.cachingConfigInput"></a>

```python
caching_config_input: AppsyncResolverCachingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a>

---

##### `code_input`<sup>Optional</sup> <a name="code_input" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.codeInput"></a>

```python
code_input: str
```

- *Type:* str

---

##### `data_source_input`<sup>Optional</sup> <a name="data_source_input" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.dataSourceInput"></a>

```python
data_source_input: str
```

- *Type:* str

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `max_batch_size_input`<sup>Optional</sup> <a name="max_batch_size_input" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.maxBatchSizeInput"></a>

```python
max_batch_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pipeline_config_input`<sup>Optional</sup> <a name="pipeline_config_input" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.pipelineConfigInput"></a>

```python
pipeline_config_input: AppsyncResolverPipelineConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a>

---

##### `request_template_input`<sup>Optional</sup> <a name="request_template_input" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.requestTemplateInput"></a>

```python
request_template_input: str
```

- *Type:* str

---

##### `response_template_input`<sup>Optional</sup> <a name="response_template_input" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.responseTemplateInput"></a>

```python
response_template_input: str
```

- *Type:* str

---

##### `runtime_input`<sup>Optional</sup> <a name="runtime_input" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.runtimeInput"></a>

```python
runtime_input: AppsyncResolverRuntime
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a>

---

##### `sync_config_input`<sup>Optional</sup> <a name="sync_config_input" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.syncConfigInput"></a>

```python
sync_config_input: AppsyncResolverSyncConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `max_batch_size`<sup>Required</sup> <a name="max_batch_size" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.maxBatchSize"></a>

```python
max_batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `request_template`<sup>Required</sup> <a name="request_template" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.requestTemplate"></a>

```python
request_template: str
```

- *Type:* str

---

##### `response_template`<sup>Required</sup> <a name="response_template" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.responseTemplate"></a>

```python
response_template: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncResolverCachingConfig <a name="AppsyncResolverCachingConfig" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_resolver

appsyncResolver.AppsyncResolverCachingConfig(
  caching_keys: typing.List[str] = None,
  ttl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfig.property.cachingKeys">caching_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#caching_keys AppsyncResolver#caching_keys}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfig.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#ttl AppsyncResolver#ttl}. |

---

##### `caching_keys`<sup>Optional</sup> <a name="caching_keys" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfig.property.cachingKeys"></a>

```python
caching_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#caching_keys AppsyncResolver#caching_keys}.

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfig.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#ttl AppsyncResolver#ttl}.

---

### AppsyncResolverConfig <a name="AppsyncResolverConfig" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_resolver

appsyncResolver.AppsyncResolverConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_id: str,
  field: str,
  type: str,
  caching_config: AppsyncResolverCachingConfig = None,
  code: str = None,
  data_source: str = None,
  id: str = None,
  kind: str = None,
  max_batch_size: typing.Union[int, float] = None,
  pipeline_config: AppsyncResolverPipelineConfig = None,
  request_template: str = None,
  response_template: str = None,
  runtime: AppsyncResolverRuntime = None,
  sync_config: AppsyncResolverSyncConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.apiId">api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#api_id AppsyncResolver#api_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.field">field</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#field AppsyncResolver#field}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#type AppsyncResolver#type}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.cachingConfig">caching_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a></code> | caching_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.code">code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#code AppsyncResolver#code}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.dataSource">data_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#data_source AppsyncResolver#data_source}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#id AppsyncResolver#id}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.kind">kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#kind AppsyncResolver#kind}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.maxBatchSize">max_batch_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#max_batch_size AppsyncResolver#max_batch_size}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.pipelineConfig">pipeline_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a></code> | pipeline_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.requestTemplate">request_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#request_template AppsyncResolver#request_template}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.responseTemplate">response_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#response_template AppsyncResolver#response_template}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.runtime">runtime</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a></code> | runtime block. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.syncConfig">sync_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a></code> | sync_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#api_id AppsyncResolver#api_id}.

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.field"></a>

```python
field: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#field AppsyncResolver#field}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#type AppsyncResolver#type}.

---

##### `caching_config`<sup>Optional</sup> <a name="caching_config" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.cachingConfig"></a>

```python
caching_config: AppsyncResolverCachingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a>

caching_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#caching_config AppsyncResolver#caching_config}

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.code"></a>

```python
code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#code AppsyncResolver#code}.

---

##### `data_source`<sup>Optional</sup> <a name="data_source" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#data_source AppsyncResolver#data_source}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#id AppsyncResolver#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.kind"></a>

```python
kind: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#kind AppsyncResolver#kind}.

---

##### `max_batch_size`<sup>Optional</sup> <a name="max_batch_size" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.maxBatchSize"></a>

```python
max_batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#max_batch_size AppsyncResolver#max_batch_size}.

---

##### `pipeline_config`<sup>Optional</sup> <a name="pipeline_config" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.pipelineConfig"></a>

```python
pipeline_config: AppsyncResolverPipelineConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a>

pipeline_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#pipeline_config AppsyncResolver#pipeline_config}

---

##### `request_template`<sup>Optional</sup> <a name="request_template" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.requestTemplate"></a>

```python
request_template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#request_template AppsyncResolver#request_template}.

---

##### `response_template`<sup>Optional</sup> <a name="response_template" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.responseTemplate"></a>

```python
response_template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#response_template AppsyncResolver#response_template}.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.runtime"></a>

```python
runtime: AppsyncResolverRuntime
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a>

runtime block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#runtime AppsyncResolver#runtime}

---

##### `sync_config`<sup>Optional</sup> <a name="sync_config" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.syncConfig"></a>

```python
sync_config: AppsyncResolverSyncConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a>

sync_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#sync_config AppsyncResolver#sync_config}

---

### AppsyncResolverPipelineConfig <a name="AppsyncResolverPipelineConfig" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_resolver

appsyncResolver.AppsyncResolverPipelineConfig(
  functions: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfig.property.functions">functions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#functions AppsyncResolver#functions}. |

---

##### `functions`<sup>Optional</sup> <a name="functions" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfig.property.functions"></a>

```python
functions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#functions AppsyncResolver#functions}.

---

### AppsyncResolverRuntime <a name="AppsyncResolverRuntime" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntime.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_resolver

appsyncResolver.AppsyncResolverRuntime(
  name: str,
  runtime_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntime.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#name AppsyncResolver#name}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntime.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#runtime_version AppsyncResolver#runtime_version}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntime.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#name AppsyncResolver#name}.

---

##### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntime.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#runtime_version AppsyncResolver#runtime_version}.

---

### AppsyncResolverSyncConfig <a name="AppsyncResolverSyncConfig" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_resolver

appsyncResolver.AppsyncResolverSyncConfig(
  conflict_detection: str = None,
  conflict_handler: str = None,
  lambda_conflict_handler_config: AppsyncResolverSyncConfigLambdaConflictHandlerConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfig.property.conflictDetection">conflict_detection</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#conflict_detection AppsyncResolver#conflict_detection}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfig.property.conflictHandler">conflict_handler</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#conflict_handler AppsyncResolver#conflict_handler}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfig.property.lambdaConflictHandlerConfig">lambda_conflict_handler_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a></code> | lambda_conflict_handler_config block. |

---

##### `conflict_detection`<sup>Optional</sup> <a name="conflict_detection" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfig.property.conflictDetection"></a>

```python
conflict_detection: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#conflict_detection AppsyncResolver#conflict_detection}.

---

##### `conflict_handler`<sup>Optional</sup> <a name="conflict_handler" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfig.property.conflictHandler"></a>

```python
conflict_handler: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#conflict_handler AppsyncResolver#conflict_handler}.

---

##### `lambda_conflict_handler_config`<sup>Optional</sup> <a name="lambda_conflict_handler_config" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfig.property.lambdaConflictHandlerConfig"></a>

```python
lambda_conflict_handler_config: AppsyncResolverSyncConfigLambdaConflictHandlerConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a>

lambda_conflict_handler_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#lambda_conflict_handler_config AppsyncResolver#lambda_conflict_handler_config}

---

### AppsyncResolverSyncConfigLambdaConflictHandlerConfig <a name="AppsyncResolverSyncConfigLambdaConflictHandlerConfig" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_resolver

appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig(
  lambda_conflict_handler_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn">lambda_conflict_handler_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#lambda_conflict_handler_arn AppsyncResolver#lambda_conflict_handler_arn}. |

---

##### `lambda_conflict_handler_arn`<sup>Optional</sup> <a name="lambda_conflict_handler_arn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn"></a>

```python
lambda_conflict_handler_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#lambda_conflict_handler_arn AppsyncResolver#lambda_conflict_handler_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncResolverCachingConfigOutputReference <a name="AppsyncResolverCachingConfigOutputReference" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_resolver

appsyncResolver.AppsyncResolverCachingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resetCachingKeys">reset_caching_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_caching_keys` <a name="reset_caching_keys" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resetCachingKeys"></a>

```python
def reset_caching_keys() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resetTtl"></a>

```python
def reset_ttl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.cachingKeysInput">caching_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.cachingKeys">caching_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `caching_keys_input`<sup>Optional</sup> <a name="caching_keys_input" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.cachingKeysInput"></a>

```python
caching_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `caching_keys`<sup>Required</sup> <a name="caching_keys" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.cachingKeys"></a>

```python
caching_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.internalValue"></a>

```python
internal_value: AppsyncResolverCachingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a>

---


### AppsyncResolverPipelineConfigOutputReference <a name="AppsyncResolverPipelineConfigOutputReference" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_resolver

appsyncResolver.AppsyncResolverPipelineConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.resetFunctions">reset_functions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_functions` <a name="reset_functions" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.resetFunctions"></a>

```python
def reset_functions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.functionsInput">functions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.functions">functions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `functions_input`<sup>Optional</sup> <a name="functions_input" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.functionsInput"></a>

```python
functions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `functions`<sup>Required</sup> <a name="functions" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.functions"></a>

```python
functions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.internalValue"></a>

```python
internal_value: AppsyncResolverPipelineConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a>

---


### AppsyncResolverRuntimeOutputReference <a name="AppsyncResolverRuntimeOutputReference" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_resolver

appsyncResolver.AppsyncResolverRuntimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.runtimeVersionInput">runtime_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `runtime_version_input`<sup>Optional</sup> <a name="runtime_version_input" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.runtimeVersionInput"></a>

```python
runtime_version_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.internalValue"></a>

```python
internal_value: AppsyncResolverRuntime
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a>

---


### AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference <a name="AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_resolver

appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.resetLambdaConflictHandlerArn">reset_lambda_conflict_handler_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_lambda_conflict_handler_arn` <a name="reset_lambda_conflict_handler_arn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.resetLambdaConflictHandlerArn"></a>

```python
def reset_lambda_conflict_handler_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArnInput">lambda_conflict_handler_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn">lambda_conflict_handler_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_conflict_handler_arn_input`<sup>Optional</sup> <a name="lambda_conflict_handler_arn_input" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArnInput"></a>

```python
lambda_conflict_handler_arn_input: str
```

- *Type:* str

---

##### `lambda_conflict_handler_arn`<sup>Required</sup> <a name="lambda_conflict_handler_arn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn"></a>

```python
lambda_conflict_handler_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue"></a>

```python
internal_value: AppsyncResolverSyncConfigLambdaConflictHandlerConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a>

---


### AppsyncResolverSyncConfigOutputReference <a name="AppsyncResolverSyncConfigOutputReference" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_resolver

appsyncResolver.AppsyncResolverSyncConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.putLambdaConflictHandlerConfig">put_lambda_conflict_handler_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetConflictDetection">reset_conflict_detection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetConflictHandler">reset_conflict_handler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetLambdaConflictHandlerConfig">reset_lambda_conflict_handler_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_lambda_conflict_handler_config` <a name="put_lambda_conflict_handler_config" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.putLambdaConflictHandlerConfig"></a>

```python
def put_lambda_conflict_handler_config(
  lambda_conflict_handler_arn: str = None
) -> None
```

###### `lambda_conflict_handler_arn`<sup>Optional</sup> <a name="lambda_conflict_handler_arn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.putLambdaConflictHandlerConfig.parameter.lambdaConflictHandlerArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#lambda_conflict_handler_arn AppsyncResolver#lambda_conflict_handler_arn}.

---

##### `reset_conflict_detection` <a name="reset_conflict_detection" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetConflictDetection"></a>

```python
def reset_conflict_detection() -> None
```

##### `reset_conflict_handler` <a name="reset_conflict_handler" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetConflictHandler"></a>

```python
def reset_conflict_handler() -> None
```

##### `reset_lambda_conflict_handler_config` <a name="reset_lambda_conflict_handler_config" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetLambdaConflictHandlerConfig"></a>

```python
def reset_lambda_conflict_handler_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.lambdaConflictHandlerConfig">lambda_conflict_handler_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference">AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictDetectionInput">conflict_detection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictHandlerInput">conflict_handler_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.lambdaConflictHandlerConfigInput">lambda_conflict_handler_config_input</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictDetection">conflict_detection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictHandler">conflict_handler</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_conflict_handler_config`<sup>Required</sup> <a name="lambda_conflict_handler_config" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.lambdaConflictHandlerConfig"></a>

```python
lambda_conflict_handler_config: AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference">AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference</a>

---

##### `conflict_detection_input`<sup>Optional</sup> <a name="conflict_detection_input" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictDetectionInput"></a>

```python
conflict_detection_input: str
```

- *Type:* str

---

##### `conflict_handler_input`<sup>Optional</sup> <a name="conflict_handler_input" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictHandlerInput"></a>

```python
conflict_handler_input: str
```

- *Type:* str

---

##### `lambda_conflict_handler_config_input`<sup>Optional</sup> <a name="lambda_conflict_handler_config_input" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.lambdaConflictHandlerConfigInput"></a>

```python
lambda_conflict_handler_config_input: AppsyncResolverSyncConfigLambdaConflictHandlerConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a>

---

##### `conflict_detection`<sup>Required</sup> <a name="conflict_detection" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictDetection"></a>

```python
conflict_detection: str
```

- *Type:* str

---

##### `conflict_handler`<sup>Required</sup> <a name="conflict_handler" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictHandler"></a>

```python
conflict_handler: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.internalValue"></a>

```python
internal_value: AppsyncResolverSyncConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a>

---



