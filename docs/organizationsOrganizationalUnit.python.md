# `organizationsOrganizationalUnit` Submodule <a name="`organizationsOrganizationalUnit` Submodule" id="@cdktf/provider-aws.organizationsOrganizationalUnit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationsOrganizationalUnit <a name="OrganizationsOrganizationalUnit" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit aws_organizations_organizational_unit}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import organizations_organizational_unit

organizationsOrganizationalUnit.OrganizationsOrganizationalUnit(
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
  parent_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#name OrganizationsOrganizationalUnit#name}. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.parentId">parent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#parent_id OrganizationsOrganizationalUnit#parent_id}. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#id OrganizationsOrganizationalUnit#id}. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#tags OrganizationsOrganizationalUnit#tags}. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#tags_all OrganizationsOrganizationalUnit#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#name OrganizationsOrganizationalUnit#name}.

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.parentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#parent_id OrganizationsOrganizationalUnit#parent_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#id OrganizationsOrganizationalUnit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#tags OrganizationsOrganizationalUnit#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#tags_all OrganizationsOrganizationalUnit#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import organizations_organizational_unit

organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import organizations_organizational_unit

organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import organizations_organizational_unit

organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.accounts">accounts</a></code> | <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList">OrganizationsOrganizationalUnitAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.parentIdInput">parent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.parentId">parent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.accounts"></a>

```python
accounts: OrganizationsOrganizationalUnitAccountsList
```

- *Type:* <a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList">OrganizationsOrganizationalUnitAccountsList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_id_input`<sup>Optional</sup> <a name="parent_id_input" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.parentIdInput"></a>

```python
parent_id_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationsOrganizationalUnitAccounts <a name="OrganizationsOrganizationalUnitAccounts" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccounts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import organizations_organizational_unit

organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccounts()
```


### OrganizationsOrganizationalUnitConfig <a name="OrganizationsOrganizationalUnitConfig" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import organizations_organizational_unit

organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  parent_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#name OrganizationsOrganizationalUnit#name}. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.parentId">parent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#parent_id OrganizationsOrganizationalUnit#parent_id}. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#id OrganizationsOrganizationalUnit#id}. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#tags OrganizationsOrganizationalUnit#tags}. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#tags_all OrganizationsOrganizationalUnit#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#name OrganizationsOrganizationalUnit#name}.

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#parent_id OrganizationsOrganizationalUnit#parent_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#id OrganizationsOrganizationalUnit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#tags OrganizationsOrganizationalUnit#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit#tags_all OrganizationsOrganizationalUnit#tags_all}.

---

## Classes <a name="Classes" id="Classes"></a>

### OrganizationsOrganizationalUnitAccountsList <a name="OrganizationsOrganizationalUnitAccountsList" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import organizations_organizational_unit

organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OrganizationsOrganizationalUnitAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OrganizationsOrganizationalUnitAccountsOutputReference <a name="OrganizationsOrganizationalUnitAccountsOutputReference" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import organizations_organizational_unit

organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccounts">OrganizationsOrganizationalUnitAccounts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccountsOutputReference.property.internalValue"></a>

```python
internal_value: OrganizationsOrganizationalUnitAccounts
```

- *Type:* <a href="#@cdktf/provider-aws.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitAccounts">OrganizationsOrganizationalUnitAccounts</a>

---



