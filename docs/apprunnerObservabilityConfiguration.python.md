# `apprunnerObservabilityConfiguration` Submodule <a name="`apprunnerObservabilityConfiguration` Submodule" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApprunnerObservabilityConfiguration <a name="ApprunnerObservabilityConfiguration" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration aws_apprunner_observability_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apprunner_observability_configuration

apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  observability_configuration_name: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  trace_configuration: ApprunnerObservabilityConfigurationTraceConfiguration = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.observabilityConfigurationName">observability_configuration_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#observability_configuration_name ApprunnerObservabilityConfiguration#observability_configuration_name}. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#id ApprunnerObservabilityConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#tags ApprunnerObservabilityConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#tags_all ApprunnerObservabilityConfiguration#tags_all}. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.traceConfiguration">trace_configuration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration">ApprunnerObservabilityConfigurationTraceConfiguration</a></code> | trace_configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `observability_configuration_name`<sup>Required</sup> <a name="observability_configuration_name" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.observabilityConfigurationName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#observability_configuration_name ApprunnerObservabilityConfiguration#observability_configuration_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#id ApprunnerObservabilityConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#tags ApprunnerObservabilityConfiguration#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#tags_all ApprunnerObservabilityConfiguration#tags_all}.

---

##### `trace_configuration`<sup>Optional</sup> <a name="trace_configuration" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.traceConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration">ApprunnerObservabilityConfigurationTraceConfiguration</a>

trace_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#trace_configuration ApprunnerObservabilityConfiguration#trace_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.putTraceConfiguration">put_trace_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetTraceConfiguration">reset_trace_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_trace_configuration` <a name="put_trace_configuration" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.putTraceConfiguration"></a>

```python
def put_trace_configuration(
  vendor: str = None
) -> None
```

###### `vendor`<sup>Optional</sup> <a name="vendor" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.putTraceConfiguration.parameter.vendor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#vendor ApprunnerObservabilityConfiguration#vendor}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_trace_configuration` <a name="reset_trace_configuration" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetTraceConfiguration"></a>

```python
def reset_trace_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import apprunner_observability_configuration

apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import apprunner_observability_configuration

apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import apprunner_observability_configuration

apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.latest">latest</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.observabilityConfigurationRevision">observability_configuration_revision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.traceConfiguration">trace_configuration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference">ApprunnerObservabilityConfigurationTraceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.observabilityConfigurationNameInput">observability_configuration_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.traceConfigurationInput">trace_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration">ApprunnerObservabilityConfigurationTraceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.observabilityConfigurationName">observability_configuration_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `latest`<sup>Required</sup> <a name="latest" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.latest"></a>

```python
latest: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `observability_configuration_revision`<sup>Required</sup> <a name="observability_configuration_revision" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.observabilityConfigurationRevision"></a>

```python
observability_configuration_revision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `trace_configuration`<sup>Required</sup> <a name="trace_configuration" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.traceConfiguration"></a>

```python
trace_configuration: ApprunnerObservabilityConfigurationTraceConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference">ApprunnerObservabilityConfigurationTraceConfigurationOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `observability_configuration_name_input`<sup>Optional</sup> <a name="observability_configuration_name_input" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.observabilityConfigurationNameInput"></a>

```python
observability_configuration_name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `trace_configuration_input`<sup>Optional</sup> <a name="trace_configuration_input" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.traceConfigurationInput"></a>

```python
trace_configuration_input: ApprunnerObservabilityConfigurationTraceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration">ApprunnerObservabilityConfigurationTraceConfiguration</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `observability_configuration_name`<sup>Required</sup> <a name="observability_configuration_name" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.observabilityConfigurationName"></a>

```python
observability_configuration_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApprunnerObservabilityConfigurationConfig <a name="ApprunnerObservabilityConfigurationConfig" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apprunner_observability_configuration

apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  observability_configuration_name: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  trace_configuration: ApprunnerObservabilityConfigurationTraceConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.observabilityConfigurationName">observability_configuration_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#observability_configuration_name ApprunnerObservabilityConfiguration#observability_configuration_name}. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#id ApprunnerObservabilityConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#tags ApprunnerObservabilityConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#tags_all ApprunnerObservabilityConfiguration#tags_all}. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.traceConfiguration">trace_configuration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration">ApprunnerObservabilityConfigurationTraceConfiguration</a></code> | trace_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `observability_configuration_name`<sup>Required</sup> <a name="observability_configuration_name" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.observabilityConfigurationName"></a>

```python
observability_configuration_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#observability_configuration_name ApprunnerObservabilityConfiguration#observability_configuration_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#id ApprunnerObservabilityConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#tags ApprunnerObservabilityConfiguration#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#tags_all ApprunnerObservabilityConfiguration#tags_all}.

---

##### `trace_configuration`<sup>Optional</sup> <a name="trace_configuration" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.traceConfiguration"></a>

```python
trace_configuration: ApprunnerObservabilityConfigurationTraceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration">ApprunnerObservabilityConfigurationTraceConfiguration</a>

trace_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#trace_configuration ApprunnerObservabilityConfiguration#trace_configuration}

---

### ApprunnerObservabilityConfigurationTraceConfiguration <a name="ApprunnerObservabilityConfigurationTraceConfiguration" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apprunner_observability_configuration

apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration(
  vendor: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration.property.vendor">vendor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#vendor ApprunnerObservabilityConfiguration#vendor}. |

---

##### `vendor`<sup>Optional</sup> <a name="vendor" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration.property.vendor"></a>

```python
vendor: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#vendor ApprunnerObservabilityConfiguration#vendor}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApprunnerObservabilityConfigurationTraceConfigurationOutputReference <a name="ApprunnerObservabilityConfigurationTraceConfigurationOutputReference" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apprunner_observability_configuration

apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.resetVendor">reset_vendor</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_vendor` <a name="reset_vendor" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.resetVendor"></a>

```python
def reset_vendor() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.vendorInput">vendor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.vendor">vendor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration">ApprunnerObservabilityConfigurationTraceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vendor_input`<sup>Optional</sup> <a name="vendor_input" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.vendorInput"></a>

```python
vendor_input: str
```

- *Type:* str

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.vendor"></a>

```python
vendor: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: ApprunnerObservabilityConfigurationTraceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration">ApprunnerObservabilityConfigurationTraceConfiguration</a>

---



