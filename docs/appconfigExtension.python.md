# `appconfigExtension` Submodule <a name="`appconfigExtension` Submodule" id="@cdktf/provider-aws.appconfigExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigExtension <a name="AppconfigExtension" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension aws_appconfig_extension}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_extension

appconfigExtension.AppconfigExtension(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action_point: typing.Union[IResolvable, typing.List[AppconfigExtensionActionPoint]],
  name: str,
  description: str = None,
  id: str = None,
  parameter: typing.Union[IResolvable, typing.List[AppconfigExtensionParameter]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.Initializer.parameter.actionPoint">action_point</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPoint">AppconfigExtensionActionPoint</a>]]</code> | action_point block. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#name AppconfigExtension#name}. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#description AppconfigExtension#description}. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#id AppconfigExtension#id}. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.Initializer.parameter.parameter">parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameter">AppconfigExtensionParameter</a>]]</code> | parameter block. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#tags AppconfigExtension#tags}. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#tags_all AppconfigExtension#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_point`<sup>Required</sup> <a name="action_point" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.Initializer.parameter.actionPoint"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPoint">AppconfigExtensionActionPoint</a>]]

action_point block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#action_point AppconfigExtension#action_point}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#name AppconfigExtension#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#description AppconfigExtension#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#id AppconfigExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.Initializer.parameter.parameter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameter">AppconfigExtensionParameter</a>]]

parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#parameter AppconfigExtension#parameter}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#tags AppconfigExtension#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#tags_all AppconfigExtension#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.putActionPoint">put_action_point</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.putParameter">put_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.resetParameter">reset_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_action_point` <a name="put_action_point" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.putActionPoint"></a>

```python
def put_action_point(
  value: typing.Union[IResolvable, typing.List[AppconfigExtensionActionPoint]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.putActionPoint.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPoint">AppconfigExtensionActionPoint</a>]]

---

##### `put_parameter` <a name="put_parameter" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.putParameter"></a>

```python
def put_parameter(
  value: typing.Union[IResolvable, typing.List[AppconfigExtensionParameter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.putParameter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameter">AppconfigExtensionParameter</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parameter` <a name="reset_parameter" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.resetParameter"></a>

```python
def reset_parameter() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_extension

appconfigExtension.AppconfigExtension.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_extension

appconfigExtension.AppconfigExtension.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_extension

appconfigExtension.AppconfigExtension.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.actionPoint">action_point</a></code> | <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointList">AppconfigExtensionActionPointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterList">AppconfigExtensionParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.actionPointInput">action_point_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPoint">AppconfigExtensionActionPoint</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.parameterInput">parameter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameter">AppconfigExtensionParameter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_point`<sup>Required</sup> <a name="action_point" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.actionPoint"></a>

```python
action_point: AppconfigExtensionActionPointList
```

- *Type:* <a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointList">AppconfigExtensionActionPointList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.parameter"></a>

```python
parameter: AppconfigExtensionParameterList
```

- *Type:* <a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterList">AppconfigExtensionParameterList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `action_point_input`<sup>Optional</sup> <a name="action_point_input" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.actionPointInput"></a>

```python
action_point_input: typing.Union[IResolvable, typing.List[AppconfigExtensionActionPoint]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPoint">AppconfigExtensionActionPoint</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameter_input`<sup>Optional</sup> <a name="parameter_input" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.parameterInput"></a>

```python
parameter_input: typing.Union[IResolvable, typing.List[AppconfigExtensionParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameter">AppconfigExtensionParameter</a>]]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtension.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigExtensionActionPoint <a name="AppconfigExtensionActionPoint" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPoint.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_extension

appconfigExtension.AppconfigExtensionActionPoint(
  action: typing.Union[IResolvable, typing.List[AppconfigExtensionActionPointAction]],
  point: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPoint.property.action">action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointAction">AppconfigExtensionActionPointAction</a>]]</code> | action block. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPoint.property.point">point</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#point AppconfigExtension#point}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPoint.property.action"></a>

```python
action: typing.Union[IResolvable, typing.List[AppconfigExtensionActionPointAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointAction">AppconfigExtensionActionPointAction</a>]]

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#action AppconfigExtension#action}

---

##### `point`<sup>Required</sup> <a name="point" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPoint.property.point"></a>

```python
point: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#point AppconfigExtension#point}.

---

### AppconfigExtensionActionPointAction <a name="AppconfigExtensionActionPointAction" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_extension

appconfigExtension.AppconfigExtensionActionPointAction(
  name: str,
  role_arn: str,
  uri: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointAction.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#name AppconfigExtension#name}. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointAction.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#role_arn AppconfigExtension#role_arn}. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointAction.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#uri AppconfigExtension#uri}. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointAction.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#description AppconfigExtension#description}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointAction.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#name AppconfigExtension#name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointAction.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#role_arn AppconfigExtension#role_arn}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointAction.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#uri AppconfigExtension#uri}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointAction.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#description AppconfigExtension#description}.

---

### AppconfigExtensionConfig <a name="AppconfigExtensionConfig" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_extension

appconfigExtension.AppconfigExtensionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action_point: typing.Union[IResolvable, typing.List[AppconfigExtensionActionPoint]],
  name: str,
  description: str = None,
  id: str = None,
  parameter: typing.Union[IResolvable, typing.List[AppconfigExtensionParameter]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionConfig.property.actionPoint">action_point</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPoint">AppconfigExtensionActionPoint</a>]]</code> | action_point block. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#name AppconfigExtension#name}. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#description AppconfigExtension#description}. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#id AppconfigExtension#id}. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionConfig.property.parameter">parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameter">AppconfigExtensionParameter</a>]]</code> | parameter block. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#tags AppconfigExtension#tags}. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#tags_all AppconfigExtension#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_point`<sup>Required</sup> <a name="action_point" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionConfig.property.actionPoint"></a>

```python
action_point: typing.Union[IResolvable, typing.List[AppconfigExtensionActionPoint]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPoint">AppconfigExtensionActionPoint</a>]]

action_point block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#action_point AppconfigExtension#action_point}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#name AppconfigExtension#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#description AppconfigExtension#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#id AppconfigExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionConfig.property.parameter"></a>

```python
parameter: typing.Union[IResolvable, typing.List[AppconfigExtensionParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameter">AppconfigExtensionParameter</a>]]

parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#parameter AppconfigExtension#parameter}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#tags AppconfigExtension#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#tags_all AppconfigExtension#tags_all}.

---

### AppconfigExtensionParameter <a name="AppconfigExtensionParameter" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_extension

appconfigExtension.AppconfigExtensionParameter(
  name: str,
  description: str = None,
  required: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#name AppconfigExtension#name}. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameter.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#description AppconfigExtension#description}. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameter.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#required AppconfigExtension#required}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#name AppconfigExtension#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameter.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#description AppconfigExtension#description}.

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameter.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_extension#required AppconfigExtension#required}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppconfigExtensionActionPointActionList <a name="AppconfigExtensionActionPointActionList" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_extension

appconfigExtension.AppconfigExtensionActionPointActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppconfigExtensionActionPointActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointAction">AppconfigExtensionActionPointAction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppconfigExtensionActionPointAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointAction">AppconfigExtensionActionPointAction</a>]]

---


### AppconfigExtensionActionPointActionOutputReference <a name="AppconfigExtensionActionPointActionOutputReference" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_extension

appconfigExtension.AppconfigExtensionActionPointActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointAction">AppconfigExtensionActionPointAction</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AppconfigExtensionActionPointAction, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointAction">AppconfigExtensionActionPointAction</a>, cdktf.IResolvable]

---


### AppconfigExtensionActionPointList <a name="AppconfigExtensionActionPointList" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_extension

appconfigExtension.AppconfigExtensionActionPointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppconfigExtensionActionPointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPoint">AppconfigExtensionActionPoint</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppconfigExtensionActionPoint]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPoint">AppconfigExtensionActionPoint</a>]]

---


### AppconfigExtensionActionPointOutputReference <a name="AppconfigExtensionActionPointOutputReference" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_extension

appconfigExtension.AppconfigExtensionActionPointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.putAction">put_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.putAction"></a>

```python
def put_action(
  value: typing.Union[IResolvable, typing.List[AppconfigExtensionActionPointAction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.putAction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointAction">AppconfigExtensionActionPointAction</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionList">AppconfigExtensionActionPointActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.property.actionInput">action_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointAction">AppconfigExtensionActionPointAction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.property.pointInput">point_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.property.point">point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPoint">AppconfigExtensionActionPoint</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.property.action"></a>

```python
action: AppconfigExtensionActionPointActionList
```

- *Type:* <a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointActionList">AppconfigExtensionActionPointActionList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.property.actionInput"></a>

```python
action_input: typing.Union[IResolvable, typing.List[AppconfigExtensionActionPointAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointAction">AppconfigExtensionActionPointAction</a>]]

---

##### `point_input`<sup>Optional</sup> <a name="point_input" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.property.pointInput"></a>

```python
point_input: str
```

- *Type:* str

---

##### `point`<sup>Required</sup> <a name="point" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.property.point"></a>

```python
point: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPointOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AppconfigExtensionActionPoint, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionActionPoint">AppconfigExtensionActionPoint</a>, cdktf.IResolvable]

---


### AppconfigExtensionParameterList <a name="AppconfigExtensionParameterList" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_extension

appconfigExtension.AppconfigExtensionParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppconfigExtensionParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameter">AppconfigExtensionParameter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppconfigExtensionParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameter">AppconfigExtensionParameter</a>]]

---


### AppconfigExtensionParameterOutputReference <a name="AppconfigExtensionParameterOutputReference" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_extension

appconfigExtension.AppconfigExtensionParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.resetRequired">reset_required</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.resetRequired"></a>

```python
def reset_required() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.property.requiredInput">required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameter">AppconfigExtensionParameter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.property.requiredInput"></a>

```python
required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AppconfigExtensionParameter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.appconfigExtension.AppconfigExtensionParameter">AppconfigExtensionParameter</a>, cdktf.IResolvable]

---



