# `athenaWorkgroup` Submodule <a name="`athenaWorkgroup` Submodule" id="@cdktf/provider-aws.athenaWorkgroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AthenaWorkgroup <a name="AthenaWorkgroup" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup aws_athena_workgroup}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroup(
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
  configuration: AthenaWorkgroupConfiguration = None,
  description: str = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  state: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#name AthenaWorkgroup#name}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#description AthenaWorkgroup#description}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#force_destroy AthenaWorkgroup#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#id AthenaWorkgroup#id}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#state AthenaWorkgroup#state}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#tags AthenaWorkgroup#tags}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#tags_all AthenaWorkgroup#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#name AthenaWorkgroup#name}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#configuration AthenaWorkgroup#configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#description AthenaWorkgroup#description}.

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.forceDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#force_destroy AthenaWorkgroup#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#id AthenaWorkgroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#state AthenaWorkgroup#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#tags AthenaWorkgroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#tags_all AthenaWorkgroup#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_configuration` <a name="put_configuration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.putConfiguration"></a>

```python
def put_configuration(
  bytes_scanned_cutoff_per_query: typing.Union[int, float] = None,
  enforce_workgroup_configuration: typing.Union[bool, IResolvable] = None,
  engine_version: AthenaWorkgroupConfigurationEngineVersion = None,
  execution_role: str = None,
  publish_cloudwatch_metrics_enabled: typing.Union[bool, IResolvable] = None,
  requester_pays_enabled: typing.Union[bool, IResolvable] = None,
  result_configuration: AthenaWorkgroupConfigurationResultConfiguration = None
) -> None
```

###### `bytes_scanned_cutoff_per_query`<sup>Optional</sup> <a name="bytes_scanned_cutoff_per_query" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.putConfiguration.parameter.bytesScannedCutoffPerQuery"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#bytes_scanned_cutoff_per_query AthenaWorkgroup#bytes_scanned_cutoff_per_query}.

---

###### `enforce_workgroup_configuration`<sup>Optional</sup> <a name="enforce_workgroup_configuration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.putConfiguration.parameter.enforceWorkgroupConfiguration"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#enforce_workgroup_configuration AthenaWorkgroup#enforce_workgroup_configuration}.

---

###### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.putConfiguration.parameter.engineVersion"></a>

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a>

engine_version block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#engine_version AthenaWorkgroup#engine_version}

---

###### `execution_role`<sup>Optional</sup> <a name="execution_role" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.putConfiguration.parameter.executionRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#execution_role AthenaWorkgroup#execution_role}.

---

###### `publish_cloudwatch_metrics_enabled`<sup>Optional</sup> <a name="publish_cloudwatch_metrics_enabled" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.putConfiguration.parameter.publishCloudwatchMetricsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#publish_cloudwatch_metrics_enabled AthenaWorkgroup#publish_cloudwatch_metrics_enabled}.

---

###### `requester_pays_enabled`<sup>Optional</sup> <a name="requester_pays_enabled" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.putConfiguration.parameter.requesterPaysEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#requester_pays_enabled AthenaWorkgroup#requester_pays_enabled}.

---

###### `result_configuration`<sup>Optional</sup> <a name="result_configuration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.putConfiguration.parameter.resultConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a>

result_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#result_configuration AthenaWorkgroup#result_configuration}

---

##### `reset_configuration` <a name="reset_configuration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference">AthenaWorkgroupConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.configurationInput">configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.forceDestroyInput">force_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.configuration"></a>

```python
configuration: AthenaWorkgroupConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference">AthenaWorkgroupConfigurationOutputReference</a>

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.configurationInput"></a>

```python
configuration_input: AthenaWorkgroupConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.forceDestroyInput"></a>

```python
force_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AthenaWorkgroupConfig <a name="AthenaWorkgroupConfig" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  configuration: AthenaWorkgroupConfiguration = None,
  description: str = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  state: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#name AthenaWorkgroup#name}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#description AthenaWorkgroup#description}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#force_destroy AthenaWorkgroup#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#id AthenaWorkgroup#id}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#state AthenaWorkgroup#state}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#tags AthenaWorkgroup#tags}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#tags_all AthenaWorkgroup#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#name AthenaWorkgroup#name}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.configuration"></a>

```python
configuration: AthenaWorkgroupConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#configuration AthenaWorkgroup#configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#description AthenaWorkgroup#description}.

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#force_destroy AthenaWorkgroup#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#id AthenaWorkgroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#state AthenaWorkgroup#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#tags AthenaWorkgroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#tags_all AthenaWorkgroup#tags_all}.

---

### AthenaWorkgroupConfiguration <a name="AthenaWorkgroupConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfiguration(
  bytes_scanned_cutoff_per_query: typing.Union[int, float] = None,
  enforce_workgroup_configuration: typing.Union[bool, IResolvable] = None,
  engine_version: AthenaWorkgroupConfigurationEngineVersion = None,
  execution_role: str = None,
  publish_cloudwatch_metrics_enabled: typing.Union[bool, IResolvable] = None,
  requester_pays_enabled: typing.Union[bool, IResolvable] = None,
  result_configuration: AthenaWorkgroupConfigurationResultConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.bytesScannedCutoffPerQuery">bytes_scanned_cutoff_per_query</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#bytes_scanned_cutoff_per_query AthenaWorkgroup#bytes_scanned_cutoff_per_query}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.enforceWorkgroupConfiguration">enforce_workgroup_configuration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#enforce_workgroup_configuration AthenaWorkgroup#enforce_workgroup_configuration}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.engineVersion">engine_version</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a></code> | engine_version block. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.executionRole">execution_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#execution_role AthenaWorkgroup#execution_role}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.publishCloudwatchMetricsEnabled">publish_cloudwatch_metrics_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#publish_cloudwatch_metrics_enabled AthenaWorkgroup#publish_cloudwatch_metrics_enabled}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.requesterPaysEnabled">requester_pays_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#requester_pays_enabled AthenaWorkgroup#requester_pays_enabled}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.resultConfiguration">result_configuration</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a></code> | result_configuration block. |

---

##### `bytes_scanned_cutoff_per_query`<sup>Optional</sup> <a name="bytes_scanned_cutoff_per_query" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.bytesScannedCutoffPerQuery"></a>

```python
bytes_scanned_cutoff_per_query: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#bytes_scanned_cutoff_per_query AthenaWorkgroup#bytes_scanned_cutoff_per_query}.

---

##### `enforce_workgroup_configuration`<sup>Optional</sup> <a name="enforce_workgroup_configuration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.enforceWorkgroupConfiguration"></a>

```python
enforce_workgroup_configuration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#enforce_workgroup_configuration AthenaWorkgroup#enforce_workgroup_configuration}.

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.engineVersion"></a>

```python
engine_version: AthenaWorkgroupConfigurationEngineVersion
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a>

engine_version block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#engine_version AthenaWorkgroup#engine_version}

---

##### `execution_role`<sup>Optional</sup> <a name="execution_role" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#execution_role AthenaWorkgroup#execution_role}.

---

##### `publish_cloudwatch_metrics_enabled`<sup>Optional</sup> <a name="publish_cloudwatch_metrics_enabled" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.publishCloudwatchMetricsEnabled"></a>

```python
publish_cloudwatch_metrics_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#publish_cloudwatch_metrics_enabled AthenaWorkgroup#publish_cloudwatch_metrics_enabled}.

---

##### `requester_pays_enabled`<sup>Optional</sup> <a name="requester_pays_enabled" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.requesterPaysEnabled"></a>

```python
requester_pays_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#requester_pays_enabled AthenaWorkgroup#requester_pays_enabled}.

---

##### `result_configuration`<sup>Optional</sup> <a name="result_configuration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.resultConfiguration"></a>

```python
result_configuration: AthenaWorkgroupConfigurationResultConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a>

result_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#result_configuration AthenaWorkgroup#result_configuration}

---

### AthenaWorkgroupConfigurationEngineVersion <a name="AthenaWorkgroupConfigurationEngineVersion" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion(
  selected_engine_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion.property.selectedEngineVersion">selected_engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#selected_engine_version AthenaWorkgroup#selected_engine_version}. |

---

##### `selected_engine_version`<sup>Optional</sup> <a name="selected_engine_version" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion.property.selectedEngineVersion"></a>

```python
selected_engine_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#selected_engine_version AthenaWorkgroup#selected_engine_version}.

---

### AthenaWorkgroupConfigurationResultConfiguration <a name="AthenaWorkgroupConfigurationResultConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration(
  acl_configuration: AthenaWorkgroupConfigurationResultConfigurationAclConfiguration = None,
  encryption_configuration: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration = None,
  expected_bucket_owner: str = None,
  output_location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.aclConfiguration">acl_configuration</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a></code> | acl_configuration block. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#expected_bucket_owner AthenaWorkgroup#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.outputLocation">output_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#output_location AthenaWorkgroup#output_location}. |

---

##### `acl_configuration`<sup>Optional</sup> <a name="acl_configuration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.aclConfiguration"></a>

```python
acl_configuration: AthenaWorkgroupConfigurationResultConfigurationAclConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a>

acl_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#acl_configuration AthenaWorkgroup#acl_configuration}

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.encryptionConfiguration"></a>

```python
encryption_configuration: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#encryption_configuration AthenaWorkgroup#encryption_configuration}

---

##### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#expected_bucket_owner AthenaWorkgroup#expected_bucket_owner}.

---

##### `output_location`<sup>Optional</sup> <a name="output_location" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.outputLocation"></a>

```python
output_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#output_location AthenaWorkgroup#output_location}.

---

### AthenaWorkgroupConfigurationResultConfigurationAclConfiguration <a name="AthenaWorkgroupConfigurationResultConfigurationAclConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration(
  s3_acl_option: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration.property.s3AclOption">s3_acl_option</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#s3_acl_option AthenaWorkgroup#s3_acl_option}. |

---

##### `s3_acl_option`<sup>Required</sup> <a name="s3_acl_option" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration.property.s3AclOption"></a>

```python
s3_acl_option: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#s3_acl_option AthenaWorkgroup#s3_acl_option}.

---

### AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration <a name="AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration(
  encryption_option: str = None,
  kms_key_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration.property.encryptionOption">encryption_option</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#encryption_option AthenaWorkgroup#encryption_option}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#kms_key_arn AthenaWorkgroup#kms_key_arn}. |

---

##### `encryption_option`<sup>Optional</sup> <a name="encryption_option" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration.property.encryptionOption"></a>

```python
encryption_option: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#encryption_option AthenaWorkgroup#encryption_option}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#kms_key_arn AthenaWorkgroup#kms_key_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### AthenaWorkgroupConfigurationEngineVersionOutputReference <a name="AthenaWorkgroupConfigurationEngineVersionOutputReference" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.resetSelectedEngineVersion">reset_selected_engine_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_selected_engine_version` <a name="reset_selected_engine_version" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.resetSelectedEngineVersion"></a>

```python
def reset_selected_engine_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.effectiveEngineVersion">effective_engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.selectedEngineVersionInput">selected_engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.selectedEngineVersion">selected_engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_engine_version`<sup>Required</sup> <a name="effective_engine_version" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.effectiveEngineVersion"></a>

```python
effective_engine_version: str
```

- *Type:* str

---

##### `selected_engine_version_input`<sup>Optional</sup> <a name="selected_engine_version_input" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.selectedEngineVersionInput"></a>

```python
selected_engine_version_input: str
```

- *Type:* str

---

##### `selected_engine_version`<sup>Required</sup> <a name="selected_engine_version" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.selectedEngineVersion"></a>

```python
selected_engine_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.internalValue"></a>

```python
internal_value: AthenaWorkgroupConfigurationEngineVersion
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a>

---


### AthenaWorkgroupConfigurationOutputReference <a name="AthenaWorkgroupConfigurationOutputReference" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putEngineVersion">put_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putResultConfiguration">put_result_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetBytesScannedCutoffPerQuery">reset_bytes_scanned_cutoff_per_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetEnforceWorkgroupConfiguration">reset_enforce_workgroup_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetEngineVersion">reset_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetExecutionRole">reset_execution_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetPublishCloudwatchMetricsEnabled">reset_publish_cloudwatch_metrics_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetRequesterPaysEnabled">reset_requester_pays_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetResultConfiguration">reset_result_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_engine_version` <a name="put_engine_version" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putEngineVersion"></a>

```python
def put_engine_version(
  selected_engine_version: str = None
) -> None
```

###### `selected_engine_version`<sup>Optional</sup> <a name="selected_engine_version" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putEngineVersion.parameter.selectedEngineVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#selected_engine_version AthenaWorkgroup#selected_engine_version}.

---

##### `put_result_configuration` <a name="put_result_configuration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putResultConfiguration"></a>

```python
def put_result_configuration(
  acl_configuration: AthenaWorkgroupConfigurationResultConfigurationAclConfiguration = None,
  encryption_configuration: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration = None,
  expected_bucket_owner: str = None,
  output_location: str = None
) -> None
```

###### `acl_configuration`<sup>Optional</sup> <a name="acl_configuration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putResultConfiguration.parameter.aclConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a>

acl_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#acl_configuration AthenaWorkgroup#acl_configuration}

---

###### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putResultConfiguration.parameter.encryptionConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#encryption_configuration AthenaWorkgroup#encryption_configuration}

---

###### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putResultConfiguration.parameter.expectedBucketOwner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#expected_bucket_owner AthenaWorkgroup#expected_bucket_owner}.

---

###### `output_location`<sup>Optional</sup> <a name="output_location" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putResultConfiguration.parameter.outputLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#output_location AthenaWorkgroup#output_location}.

---

##### `reset_bytes_scanned_cutoff_per_query` <a name="reset_bytes_scanned_cutoff_per_query" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetBytesScannedCutoffPerQuery"></a>

```python
def reset_bytes_scanned_cutoff_per_query() -> None
```

##### `reset_enforce_workgroup_configuration` <a name="reset_enforce_workgroup_configuration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetEnforceWorkgroupConfiguration"></a>

```python
def reset_enforce_workgroup_configuration() -> None
```

##### `reset_engine_version` <a name="reset_engine_version" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetEngineVersion"></a>

```python
def reset_engine_version() -> None
```

##### `reset_execution_role` <a name="reset_execution_role" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetExecutionRole"></a>

```python
def reset_execution_role() -> None
```

##### `reset_publish_cloudwatch_metrics_enabled` <a name="reset_publish_cloudwatch_metrics_enabled" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetPublishCloudwatchMetricsEnabled"></a>

```python
def reset_publish_cloudwatch_metrics_enabled() -> None
```

##### `reset_requester_pays_enabled` <a name="reset_requester_pays_enabled" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetRequesterPaysEnabled"></a>

```python
def reset_requester_pays_enabled() -> None
```

##### `reset_result_configuration` <a name="reset_result_configuration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetResultConfiguration"></a>

```python
def reset_result_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.engineVersion">engine_version</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference">AthenaWorkgroupConfigurationEngineVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.resultConfiguration">result_configuration</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference">AthenaWorkgroupConfigurationResultConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.bytesScannedCutoffPerQueryInput">bytes_scanned_cutoff_per_query_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.enforceWorkgroupConfigurationInput">enforce_workgroup_configuration_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.engineVersionInput">engine_version_input</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.executionRoleInput">execution_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabledInput">publish_cloudwatch_metrics_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.requesterPaysEnabledInput">requester_pays_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.resultConfigurationInput">result_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.bytesScannedCutoffPerQuery">bytes_scanned_cutoff_per_query</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.enforceWorkgroupConfiguration">enforce_workgroup_configuration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.executionRole">execution_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabled">publish_cloudwatch_metrics_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.requesterPaysEnabled">requester_pays_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.engineVersion"></a>

```python
engine_version: AthenaWorkgroupConfigurationEngineVersionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference">AthenaWorkgroupConfigurationEngineVersionOutputReference</a>

---

##### `result_configuration`<sup>Required</sup> <a name="result_configuration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.resultConfiguration"></a>

```python
result_configuration: AthenaWorkgroupConfigurationResultConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference">AthenaWorkgroupConfigurationResultConfigurationOutputReference</a>

---

##### `bytes_scanned_cutoff_per_query_input`<sup>Optional</sup> <a name="bytes_scanned_cutoff_per_query_input" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.bytesScannedCutoffPerQueryInput"></a>

```python
bytes_scanned_cutoff_per_query_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enforce_workgroup_configuration_input`<sup>Optional</sup> <a name="enforce_workgroup_configuration_input" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.enforceWorkgroupConfigurationInput"></a>

```python
enforce_workgroup_configuration_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `engine_version_input`<sup>Optional</sup> <a name="engine_version_input" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.engineVersionInput"></a>

```python
engine_version_input: AthenaWorkgroupConfigurationEngineVersion
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a>

---

##### `execution_role_input`<sup>Optional</sup> <a name="execution_role_input" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.executionRoleInput"></a>

```python
execution_role_input: str
```

- *Type:* str

---

##### `publish_cloudwatch_metrics_enabled_input`<sup>Optional</sup> <a name="publish_cloudwatch_metrics_enabled_input" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabledInput"></a>

```python
publish_cloudwatch_metrics_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `requester_pays_enabled_input`<sup>Optional</sup> <a name="requester_pays_enabled_input" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.requesterPaysEnabledInput"></a>

```python
requester_pays_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `result_configuration_input`<sup>Optional</sup> <a name="result_configuration_input" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.resultConfigurationInput"></a>

```python
result_configuration_input: AthenaWorkgroupConfigurationResultConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a>

---

##### `bytes_scanned_cutoff_per_query`<sup>Required</sup> <a name="bytes_scanned_cutoff_per_query" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.bytesScannedCutoffPerQuery"></a>

```python
bytes_scanned_cutoff_per_query: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enforce_workgroup_configuration`<sup>Required</sup> <a name="enforce_workgroup_configuration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.enforceWorkgroupConfiguration"></a>

```python
enforce_workgroup_configuration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `execution_role`<sup>Required</sup> <a name="execution_role" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

---

##### `publish_cloudwatch_metrics_enabled`<sup>Required</sup> <a name="publish_cloudwatch_metrics_enabled" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabled"></a>

```python
publish_cloudwatch_metrics_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `requester_pays_enabled`<sup>Required</sup> <a name="requester_pays_enabled" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.requesterPaysEnabled"></a>

```python
requester_pays_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: AthenaWorkgroupConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a>

---


### AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference <a name="AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOptionInput">s3_acl_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOption">s3_acl_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_acl_option_input`<sup>Optional</sup> <a name="s3_acl_option_input" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOptionInput"></a>

```python
s3_acl_option_input: str
```

- *Type:* str

---

##### `s3_acl_option`<sup>Required</sup> <a name="s3_acl_option" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOption"></a>

```python
s3_acl_option: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: AthenaWorkgroupConfigurationResultConfigurationAclConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a>

---


### AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference <a name="AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetEncryptionOption">reset_encryption_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encryption_option` <a name="reset_encryption_option" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetEncryptionOption"></a>

```python
def reset_encryption_option() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOptionInput">encryption_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOption">encryption_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_option_input`<sup>Optional</sup> <a name="encryption_option_input" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOptionInput"></a>

```python
encryption_option_input: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `encryption_option`<sup>Required</sup> <a name="encryption_option" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOption"></a>

```python
encryption_option: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a>

---


### AthenaWorkgroupConfigurationResultConfigurationOutputReference <a name="AthenaWorkgroupConfigurationResultConfigurationOutputReference" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.putAclConfiguration">put_acl_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.putEncryptionConfiguration">put_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetAclConfiguration">reset_acl_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetEncryptionConfiguration">reset_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetExpectedBucketOwner">reset_expected_bucket_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetOutputLocation">reset_output_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_acl_configuration` <a name="put_acl_configuration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.putAclConfiguration"></a>

```python
def put_acl_configuration(
  s3_acl_option: str
) -> None
```

###### `s3_acl_option`<sup>Required</sup> <a name="s3_acl_option" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.putAclConfiguration.parameter.s3AclOption"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#s3_acl_option AthenaWorkgroup#s3_acl_option}.

---

##### `put_encryption_configuration` <a name="put_encryption_configuration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.putEncryptionConfiguration"></a>

```python
def put_encryption_configuration(
  encryption_option: str = None,
  kms_key_arn: str = None
) -> None
```

###### `encryption_option`<sup>Optional</sup> <a name="encryption_option" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.putEncryptionConfiguration.parameter.encryptionOption"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#encryption_option AthenaWorkgroup#encryption_option}.

---

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.putEncryptionConfiguration.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#kms_key_arn AthenaWorkgroup#kms_key_arn}.

---

##### `reset_acl_configuration` <a name="reset_acl_configuration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetAclConfiguration"></a>

```python
def reset_acl_configuration() -> None
```

##### `reset_encryption_configuration` <a name="reset_encryption_configuration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetEncryptionConfiguration"></a>

```python
def reset_encryption_configuration() -> None
```

##### `reset_expected_bucket_owner` <a name="reset_expected_bucket_owner" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetExpectedBucketOwner"></a>

```python
def reset_expected_bucket_owner() -> None
```

##### `reset_output_location` <a name="reset_output_location" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetOutputLocation"></a>

```python
def reset_output_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.aclConfiguration">acl_configuration</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference">AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.aclConfigurationInput">acl_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.encryptionConfigurationInput">encryption_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwnerInput">expected_bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.outputLocationInput">output_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.outputLocation">output_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `acl_configuration`<sup>Required</sup> <a name="acl_configuration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.aclConfiguration"></a>

```python
acl_configuration: AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference">AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference</a>

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.encryptionConfiguration"></a>

```python
encryption_configuration: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference</a>

---

##### `acl_configuration_input`<sup>Optional</sup> <a name="acl_configuration_input" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.aclConfigurationInput"></a>

```python
acl_configuration_input: AthenaWorkgroupConfigurationResultConfigurationAclConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a>

---

##### `encryption_configuration_input`<sup>Optional</sup> <a name="encryption_configuration_input" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.encryptionConfigurationInput"></a>

```python
encryption_configuration_input: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a>

---

##### `expected_bucket_owner_input`<sup>Optional</sup> <a name="expected_bucket_owner_input" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwnerInput"></a>

```python
expected_bucket_owner_input: str
```

- *Type:* str

---

##### `output_location_input`<sup>Optional</sup> <a name="output_location_input" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.outputLocationInput"></a>

```python
output_location_input: str
```

- *Type:* str

---

##### `expected_bucket_owner`<sup>Required</sup> <a name="expected_bucket_owner" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

---

##### `output_location`<sup>Required</sup> <a name="output_location" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.outputLocation"></a>

```python
output_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: AthenaWorkgroupConfigurationResultConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a>

---



