# `dataAwsAppmeshVirtualRouter` Submodule <a name="`dataAwsAppmeshVirtualRouter` Submodule" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAppmeshVirtualRouter <a name="DataAwsAppmeshVirtualRouter" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/appmesh_virtual_router aws_appmesh_virtual_router}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_virtual_router

dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  mesh_name: str,
  name: str,
  id: str = None,
  mesh_owner: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.meshName">mesh_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/appmesh_virtual_router#mesh_name DataAwsAppmeshVirtualRouter#mesh_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/appmesh_virtual_router#name DataAwsAppmeshVirtualRouter#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/appmesh_virtual_router#id DataAwsAppmeshVirtualRouter#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.meshOwner">mesh_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/appmesh_virtual_router#mesh_owner DataAwsAppmeshVirtualRouter#mesh_owner}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/appmesh_virtual_router#tags DataAwsAppmeshVirtualRouter#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mesh_name`<sup>Required</sup> <a name="mesh_name" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.meshName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/appmesh_virtual_router#mesh_name DataAwsAppmeshVirtualRouter#mesh_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/appmesh_virtual_router#name DataAwsAppmeshVirtualRouter#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/appmesh_virtual_router#id DataAwsAppmeshVirtualRouter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mesh_owner`<sup>Optional</sup> <a name="mesh_owner" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.meshOwner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/appmesh_virtual_router#mesh_owner DataAwsAppmeshVirtualRouter#mesh_owner}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/appmesh_virtual_router#tags DataAwsAppmeshVirtualRouter#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.resetMeshOwner">reset_mesh_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mesh_owner` <a name="reset_mesh_owner" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.resetMeshOwner"></a>

```python
def reset_mesh_owner() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsAppmeshVirtualRouter resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_virtual_router

dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_virtual_router

dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_virtual_router

dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_virtual_router

dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsAppmeshVirtualRouter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsAppmeshVirtualRouter to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsAppmeshVirtualRouter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/appmesh_virtual_router#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsAppmeshVirtualRouter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.createdDate">created_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.lastUpdatedDate">last_updated_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.resourceOwner">resource_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList">DataAwsAppmeshVirtualRouterSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.meshNameInput">mesh_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.meshOwnerInput">mesh_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.meshName">mesh_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.meshOwner">mesh_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_date`<sup>Required</sup> <a name="created_date" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.createdDate"></a>

```python
created_date: str
```

- *Type:* str

---

##### `last_updated_date`<sup>Required</sup> <a name="last_updated_date" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.lastUpdatedDate"></a>

```python
last_updated_date: str
```

- *Type:* str

---

##### `resource_owner`<sup>Required</sup> <a name="resource_owner" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.resourceOwner"></a>

```python
resource_owner: str
```

- *Type:* str

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.spec"></a>

```python
spec: DataAwsAppmeshVirtualRouterSpecList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList">DataAwsAppmeshVirtualRouterSpecList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mesh_name_input`<sup>Optional</sup> <a name="mesh_name_input" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.meshNameInput"></a>

```python
mesh_name_input: str
```

- *Type:* str

---

##### `mesh_owner_input`<sup>Optional</sup> <a name="mesh_owner_input" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.meshOwnerInput"></a>

```python
mesh_owner_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mesh_name`<sup>Required</sup> <a name="mesh_name" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.meshName"></a>

```python
mesh_name: str
```

- *Type:* str

---

##### `mesh_owner`<sup>Required</sup> <a name="mesh_owner" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.meshOwner"></a>

```python
mesh_owner: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouter.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAppmeshVirtualRouterConfig <a name="DataAwsAppmeshVirtualRouterConfig" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_virtual_router

dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  mesh_name: str,
  name: str,
  id: str = None,
  mesh_owner: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.meshName">mesh_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/appmesh_virtual_router#mesh_name DataAwsAppmeshVirtualRouter#mesh_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/appmesh_virtual_router#name DataAwsAppmeshVirtualRouter#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/appmesh_virtual_router#id DataAwsAppmeshVirtualRouter#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.meshOwner">mesh_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/appmesh_virtual_router#mesh_owner DataAwsAppmeshVirtualRouter#mesh_owner}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/appmesh_virtual_router#tags DataAwsAppmeshVirtualRouter#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mesh_name`<sup>Required</sup> <a name="mesh_name" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.meshName"></a>

```python
mesh_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/appmesh_virtual_router#mesh_name DataAwsAppmeshVirtualRouter#mesh_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/appmesh_virtual_router#name DataAwsAppmeshVirtualRouter#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/appmesh_virtual_router#id DataAwsAppmeshVirtualRouter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mesh_owner`<sup>Optional</sup> <a name="mesh_owner" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.meshOwner"></a>

```python
mesh_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/appmesh_virtual_router#mesh_owner DataAwsAppmeshVirtualRouter#mesh_owner}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/appmesh_virtual_router#tags DataAwsAppmeshVirtualRouter#tags}.

---

### DataAwsAppmeshVirtualRouterSpec <a name="DataAwsAppmeshVirtualRouterSpec" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_virtual_router

dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpec()
```


### DataAwsAppmeshVirtualRouterSpecListener <a name="DataAwsAppmeshVirtualRouterSpecListener" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListener"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListener.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_virtual_router

dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListener()
```


### DataAwsAppmeshVirtualRouterSpecListenerPortMapping <a name="DataAwsAppmeshVirtualRouterSpecListenerPortMapping" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMapping.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_virtual_router

dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMapping()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsAppmeshVirtualRouterSpecList <a name="DataAwsAppmeshVirtualRouterSpecList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_virtual_router

dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshVirtualRouterSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshVirtualRouterSpecListenerList <a name="DataAwsAppmeshVirtualRouterSpecListenerList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_virtual_router

dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshVirtualRouterSpecListenerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshVirtualRouterSpecListenerOutputReference <a name="DataAwsAppmeshVirtualRouterSpecListenerOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_virtual_router

dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.property.portMapping">port_mapping</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList">DataAwsAppmeshVirtualRouterSpecListenerPortMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListener">DataAwsAppmeshVirtualRouterSpecListener</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_mapping`<sup>Required</sup> <a name="port_mapping" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.property.portMapping"></a>

```python
port_mapping: DataAwsAppmeshVirtualRouterSpecListenerPortMappingList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList">DataAwsAppmeshVirtualRouterSpecListenerPortMappingList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshVirtualRouterSpecListener
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListener">DataAwsAppmeshVirtualRouterSpecListener</a>

---


### DataAwsAppmeshVirtualRouterSpecListenerPortMappingList <a name="DataAwsAppmeshVirtualRouterSpecListenerPortMappingList" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_virtual_router

dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference <a name="DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_virtual_router

dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMapping">DataAwsAppmeshVirtualRouterSpecListenerPortMapping</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshVirtualRouterSpecListenerPortMapping
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerPortMapping">DataAwsAppmeshVirtualRouterSpecListenerPortMapping</a>

---


### DataAwsAppmeshVirtualRouterSpecOutputReference <a name="DataAwsAppmeshVirtualRouterSpecOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_virtual_router

dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.property.listener">listener</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList">DataAwsAppmeshVirtualRouterSpecListenerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpec">DataAwsAppmeshVirtualRouterSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `listener`<sup>Required</sup> <a name="listener" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.property.listener"></a>

```python
listener: DataAwsAppmeshVirtualRouterSpecListenerList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecListenerList">DataAwsAppmeshVirtualRouterSpecListenerList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpecOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshVirtualRouterSpec
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshVirtualRouter.DataAwsAppmeshVirtualRouterSpec">DataAwsAppmeshVirtualRouterSpec</a>

---



