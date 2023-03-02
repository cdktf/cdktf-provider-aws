# `appconfigEnvironment` Submodule <a name="`appconfigEnvironment` Submodule" id="@cdktf/provider-aws.appconfigEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigEnvironment <a name="AppconfigEnvironment" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment aws_appconfig_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_environment

appconfigEnvironment.AppconfigEnvironment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_id: str,
  name: str,
  description: str = None,
  id: str = None,
  monitor: typing.Union[IResolvable, typing.List[AppconfigEnvironmentMonitor]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#application_id AppconfigEnvironment#application_id}. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#name AppconfigEnvironment#name}. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#description AppconfigEnvironment#description}. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#id AppconfigEnvironment#id}. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.monitor">monitor</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor">AppconfigEnvironmentMonitor</a>]]</code> | monitor block. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#tags AppconfigEnvironment#tags}. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#tags_all AppconfigEnvironment#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.applicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#application_id AppconfigEnvironment#application_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#name AppconfigEnvironment#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#description AppconfigEnvironment#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#id AppconfigEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.monitor"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor">AppconfigEnvironmentMonitor</a>]]

monitor block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#monitor AppconfigEnvironment#monitor}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#tags AppconfigEnvironment#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#tags_all AppconfigEnvironment#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.putMonitor">put_monitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetMonitor">reset_monitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_monitor` <a name="put_monitor" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.putMonitor"></a>

```python
def put_monitor(
  value: typing.Union[IResolvable, typing.List[AppconfigEnvironmentMonitor]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.putMonitor.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor">AppconfigEnvironmentMonitor</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_monitor` <a name="reset_monitor" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetMonitor"></a>

```python
def reset_monitor() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_environment

appconfigEnvironment.AppconfigEnvironment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_environment

appconfigEnvironment.AppconfigEnvironment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_environment

appconfigEnvironment.AppconfigEnvironment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.environmentId">environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList">AppconfigEnvironmentMonitorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.monitorInput">monitor_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor">AppconfigEnvironmentMonitor</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

---

##### `monitor`<sup>Required</sup> <a name="monitor" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.monitor"></a>

```python
monitor: AppconfigEnvironmentMonitorList
```

- *Type:* <a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList">AppconfigEnvironmentMonitorList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `monitor_input`<sup>Optional</sup> <a name="monitor_input" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.monitorInput"></a>

```python
monitor_input: typing.Union[IResolvable, typing.List[AppconfigEnvironmentMonitor]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor">AppconfigEnvironmentMonitor</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigEnvironmentConfig <a name="AppconfigEnvironmentConfig" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_environment

appconfigEnvironment.AppconfigEnvironmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_id: str,
  name: str,
  description: str = None,
  id: str = None,
  monitor: typing.Union[IResolvable, typing.List[AppconfigEnvironmentMonitor]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#application_id AppconfigEnvironment#application_id}. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#name AppconfigEnvironment#name}. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#description AppconfigEnvironment#description}. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#id AppconfigEnvironment#id}. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.monitor">monitor</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor">AppconfigEnvironmentMonitor</a>]]</code> | monitor block. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#tags AppconfigEnvironment#tags}. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#tags_all AppconfigEnvironment#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#application_id AppconfigEnvironment#application_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#name AppconfigEnvironment#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#description AppconfigEnvironment#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#id AppconfigEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.monitor"></a>

```python
monitor: typing.Union[IResolvable, typing.List[AppconfigEnvironmentMonitor]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor">AppconfigEnvironmentMonitor</a>]]

monitor block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#monitor AppconfigEnvironment#monitor}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#tags AppconfigEnvironment#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#tags_all AppconfigEnvironment#tags_all}.

---

### AppconfigEnvironmentMonitor <a name="AppconfigEnvironmentMonitor" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_environment

appconfigEnvironment.AppconfigEnvironmentMonitor(
  alarm_arn: str,
  alarm_role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor.property.alarmArn">alarm_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#alarm_arn AppconfigEnvironment#alarm_arn}. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor.property.alarmRoleArn">alarm_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#alarm_role_arn AppconfigEnvironment#alarm_role_arn}. |

---

##### `alarm_arn`<sup>Required</sup> <a name="alarm_arn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor.property.alarmArn"></a>

```python
alarm_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#alarm_arn AppconfigEnvironment#alarm_arn}.

---

##### `alarm_role_arn`<sup>Optional</sup> <a name="alarm_role_arn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor.property.alarmRoleArn"></a>

```python
alarm_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#alarm_role_arn AppconfigEnvironment#alarm_role_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppconfigEnvironmentMonitorList <a name="AppconfigEnvironmentMonitorList" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_environment

appconfigEnvironment.AppconfigEnvironmentMonitorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppconfigEnvironmentMonitorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor">AppconfigEnvironmentMonitor</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppconfigEnvironmentMonitor]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor">AppconfigEnvironmentMonitor</a>]]

---


### AppconfigEnvironmentMonitorOutputReference <a name="AppconfigEnvironmentMonitorOutputReference" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_environment

appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.resetAlarmRoleArn">reset_alarm_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alarm_role_arn` <a name="reset_alarm_role_arn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.resetAlarmRoleArn"></a>

```python
def reset_alarm_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.alarmArnInput">alarm_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.alarmRoleArnInput">alarm_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.alarmArn">alarm_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.alarmRoleArn">alarm_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor">AppconfigEnvironmentMonitor</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarm_arn_input`<sup>Optional</sup> <a name="alarm_arn_input" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.alarmArnInput"></a>

```python
alarm_arn_input: str
```

- *Type:* str

---

##### `alarm_role_arn_input`<sup>Optional</sup> <a name="alarm_role_arn_input" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.alarmRoleArnInput"></a>

```python
alarm_role_arn_input: str
```

- *Type:* str

---

##### `alarm_arn`<sup>Required</sup> <a name="alarm_arn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.alarmArn"></a>

```python
alarm_arn: str
```

- *Type:* str

---

##### `alarm_role_arn`<sup>Required</sup> <a name="alarm_role_arn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.alarmRoleArn"></a>

```python
alarm_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AppconfigEnvironmentMonitor, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor">AppconfigEnvironmentMonitor</a>, cdktf.IResolvable]

---



