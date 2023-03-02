# `resourceexplorer2View` Submodule <a name="`resourceexplorer2View` Submodule" id="@cdktf/provider-aws.resourceexplorer2View"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Resourceexplorer2View <a name="Resourceexplorer2View" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view aws_resourceexplorer2_view}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import resourceexplorer2_view

resourceexplorer2View.Resourceexplorer2View(
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
  default_view: typing.Union[bool, IResolvable] = None,
  filters: typing.Union[IResolvable, typing.List[Resourceexplorer2ViewFilters]] = None,
  included_property: typing.Union[IResolvable, typing.List[Resourceexplorer2ViewIncludedProperty]] = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#name Resourceexplorer2View#name}. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.defaultView">default_view</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#default_view Resourceexplorer2View#default_view}. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.filters">filters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters">Resourceexplorer2ViewFilters</a>]]</code> | filters block. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.includedProperty">included_property</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty">Resourceexplorer2ViewIncludedProperty</a>]]</code> | included_property block. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#tags Resourceexplorer2View#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#name Resourceexplorer2View#name}.

---

##### `default_view`<sup>Optional</sup> <a name="default_view" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.defaultView"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#default_view Resourceexplorer2View#default_view}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.filters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters">Resourceexplorer2ViewFilters</a>]]

filters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#filters Resourceexplorer2View#filters}

---

##### `included_property`<sup>Optional</sup> <a name="included_property" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.includedProperty"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty">Resourceexplorer2ViewIncludedProperty</a>]]

included_property block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#included_property Resourceexplorer2View#included_property}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#tags Resourceexplorer2View#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.putFilters">put_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.putIncludedProperty">put_included_property</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetDefaultView">reset_default_view</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetFilters">reset_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetIncludedProperty">reset_included_property</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filters` <a name="put_filters" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.putFilters"></a>

```python
def put_filters(
  value: typing.Union[IResolvable, typing.List[Resourceexplorer2ViewFilters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.putFilters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters">Resourceexplorer2ViewFilters</a>]]

---

##### `put_included_property` <a name="put_included_property" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.putIncludedProperty"></a>

```python
def put_included_property(
  value: typing.Union[IResolvable, typing.List[Resourceexplorer2ViewIncludedProperty]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.putIncludedProperty.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty">Resourceexplorer2ViewIncludedProperty</a>]]

---

##### `reset_default_view` <a name="reset_default_view" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetDefaultView"></a>

```python
def reset_default_view() -> None
```

##### `reset_filters` <a name="reset_filters" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetFilters"></a>

```python
def reset_filters() -> None
```

##### `reset_included_property` <a name="reset_included_property" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetIncludedProperty"></a>

```python
def reset_included_property() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import resourceexplorer2_view

resourceexplorer2View.Resourceexplorer2View.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import resourceexplorer2_view

resourceexplorer2View.Resourceexplorer2View.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import resourceexplorer2_view

resourceexplorer2View.Resourceexplorer2View.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList">Resourceexplorer2ViewFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.includedProperty">included_property</a></code> | <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList">Resourceexplorer2ViewIncludedPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.defaultViewInput">default_view_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.filtersInput">filters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters">Resourceexplorer2ViewFilters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.includedPropertyInput">included_property_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty">Resourceexplorer2ViewIncludedProperty</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.defaultView">default_view</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.filters"></a>

```python
filters: Resourceexplorer2ViewFiltersList
```

- *Type:* <a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList">Resourceexplorer2ViewFiltersList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `included_property`<sup>Required</sup> <a name="included_property" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.includedProperty"></a>

```python
included_property: Resourceexplorer2ViewIncludedPropertyList
```

- *Type:* <a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList">Resourceexplorer2ViewIncludedPropertyList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `default_view_input`<sup>Optional</sup> <a name="default_view_input" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.defaultViewInput"></a>

```python
default_view_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.filtersInput"></a>

```python
filters_input: typing.Union[IResolvable, typing.List[Resourceexplorer2ViewFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters">Resourceexplorer2ViewFilters</a>]]

---

##### `included_property_input`<sup>Optional</sup> <a name="included_property_input" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.includedPropertyInput"></a>

```python
included_property_input: typing.Union[IResolvable, typing.List[Resourceexplorer2ViewIncludedProperty]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty">Resourceexplorer2ViewIncludedProperty</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `default_view`<sup>Required</sup> <a name="default_view" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.defaultView"></a>

```python
default_view: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Resourceexplorer2ViewConfig <a name="Resourceexplorer2ViewConfig" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import resourceexplorer2_view

resourceexplorer2View.Resourceexplorer2ViewConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  default_view: typing.Union[bool, IResolvable] = None,
  filters: typing.Union[IResolvable, typing.List[Resourceexplorer2ViewFilters]] = None,
  included_property: typing.Union[IResolvable, typing.List[Resourceexplorer2ViewIncludedProperty]] = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#name Resourceexplorer2View#name}. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.defaultView">default_view</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#default_view Resourceexplorer2View#default_view}. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.filters">filters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters">Resourceexplorer2ViewFilters</a>]]</code> | filters block. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.includedProperty">included_property</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty">Resourceexplorer2ViewIncludedProperty</a>]]</code> | included_property block. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#tags Resourceexplorer2View#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#name Resourceexplorer2View#name}.

---

##### `default_view`<sup>Optional</sup> <a name="default_view" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.defaultView"></a>

```python
default_view: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#default_view Resourceexplorer2View#default_view}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.filters"></a>

```python
filters: typing.Union[IResolvable, typing.List[Resourceexplorer2ViewFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters">Resourceexplorer2ViewFilters</a>]]

filters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#filters Resourceexplorer2View#filters}

---

##### `included_property`<sup>Optional</sup> <a name="included_property" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.includedProperty"></a>

```python
included_property: typing.Union[IResolvable, typing.List[Resourceexplorer2ViewIncludedProperty]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty">Resourceexplorer2ViewIncludedProperty</a>]]

included_property block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#included_property Resourceexplorer2View#included_property}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#tags Resourceexplorer2View#tags}.

---

### Resourceexplorer2ViewFilters <a name="Resourceexplorer2ViewFilters" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import resourceexplorer2_view

resourceexplorer2View.Resourceexplorer2ViewFilters(
  filter_string: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters.property.filterString">filter_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#filter_string Resourceexplorer2View#filter_string}. |

---

##### `filter_string`<sup>Required</sup> <a name="filter_string" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters.property.filterString"></a>

```python
filter_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#filter_string Resourceexplorer2View#filter_string}.

---

### Resourceexplorer2ViewIncludedProperty <a name="Resourceexplorer2ViewIncludedProperty" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import resourceexplorer2_view

resourceexplorer2View.Resourceexplorer2ViewIncludedProperty(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#name Resourceexplorer2View#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#name Resourceexplorer2View#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### Resourceexplorer2ViewFiltersList <a name="Resourceexplorer2ViewFiltersList" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import resourceexplorer2_view

resourceexplorer2View.Resourceexplorer2ViewFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Resourceexplorer2ViewFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters">Resourceexplorer2ViewFilters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Resourceexplorer2ViewFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters">Resourceexplorer2ViewFilters</a>]]

---


### Resourceexplorer2ViewFiltersOutputReference <a name="Resourceexplorer2ViewFiltersOutputReference" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import resourceexplorer2_view

resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.filterStringInput">filter_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.filterString">filter_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters">Resourceexplorer2ViewFilters</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_string_input`<sup>Optional</sup> <a name="filter_string_input" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.filterStringInput"></a>

```python
filter_string_input: str
```

- *Type:* str

---

##### `filter_string`<sup>Required</sup> <a name="filter_string" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.filterString"></a>

```python
filter_string: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[Resourceexplorer2ViewFilters, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters">Resourceexplorer2ViewFilters</a>, cdktf.IResolvable]

---


### Resourceexplorer2ViewIncludedPropertyList <a name="Resourceexplorer2ViewIncludedPropertyList" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import resourceexplorer2_view

resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Resourceexplorer2ViewIncludedPropertyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty">Resourceexplorer2ViewIncludedProperty</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Resourceexplorer2ViewIncludedProperty]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty">Resourceexplorer2ViewIncludedProperty</a>]]

---


### Resourceexplorer2ViewIncludedPropertyOutputReference <a name="Resourceexplorer2ViewIncludedPropertyOutputReference" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import resourceexplorer2_view

resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty">Resourceexplorer2ViewIncludedProperty</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[Resourceexplorer2ViewIncludedProperty, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty">Resourceexplorer2ViewIncludedProperty</a>, cdktf.IResolvable]

---



