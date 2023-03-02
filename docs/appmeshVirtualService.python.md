# `appmeshVirtualService` Submodule <a name="`appmeshVirtualService` Submodule" id="@cdktf/provider-aws.appmeshVirtualService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppmeshVirtualService <a name="AppmeshVirtualService" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service aws_appmesh_virtual_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_service

appmeshVirtualService.AppmeshVirtualService(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  mesh_name: str,
  name: str,
  spec: AppmeshVirtualServiceSpec,
  id: str = None,
  mesh_owner: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.meshName">mesh_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#mesh_name AppmeshVirtualService#mesh_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#name AppmeshVirtualService#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec">AppmeshVirtualServiceSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#id AppmeshVirtualService#id}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.meshOwner">mesh_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#mesh_owner AppmeshVirtualService#mesh_owner}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#tags AppmeshVirtualService#tags}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#tags_all AppmeshVirtualService#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mesh_name`<sup>Required</sup> <a name="mesh_name" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.meshName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#mesh_name AppmeshVirtualService#mesh_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#name AppmeshVirtualService#name}.

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec">AppmeshVirtualServiceSpec</a>

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#spec AppmeshVirtualService#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#id AppmeshVirtualService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mesh_owner`<sup>Optional</sup> <a name="mesh_owner" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.meshOwner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#mesh_owner AppmeshVirtualService#mesh_owner}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#tags AppmeshVirtualService#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#tags_all AppmeshVirtualService#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.resetMeshOwner">reset_mesh_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_spec` <a name="put_spec" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.putSpec"></a>

```python
def put_spec(
  provider: AppmeshVirtualServiceSpecProvider = None
) -> None
```

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.putSpec.parameter.provider"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider">AppmeshVirtualServiceSpecProvider</a>

provider block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#provider AppmeshVirtualService#provider}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mesh_owner` <a name="reset_mesh_owner" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.resetMeshOwner"></a>

```python
def reset_mesh_owner() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_service

appmeshVirtualService.AppmeshVirtualService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_service

appmeshVirtualService.AppmeshVirtualService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_service

appmeshVirtualService.AppmeshVirtualService.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.createdDate">created_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.lastUpdatedDate">last_updated_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.resourceOwner">resource_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference">AppmeshVirtualServiceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.meshNameInput">mesh_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.meshOwnerInput">mesh_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.specInput">spec_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec">AppmeshVirtualServiceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.meshName">mesh_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.meshOwner">mesh_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_date`<sup>Required</sup> <a name="created_date" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.createdDate"></a>

```python
created_date: str
```

- *Type:* str

---

##### `last_updated_date`<sup>Required</sup> <a name="last_updated_date" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.lastUpdatedDate"></a>

```python
last_updated_date: str
```

- *Type:* str

---

##### `resource_owner`<sup>Required</sup> <a name="resource_owner" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.resourceOwner"></a>

```python
resource_owner: str
```

- *Type:* str

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.spec"></a>

```python
spec: AppmeshVirtualServiceSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference">AppmeshVirtualServiceSpecOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mesh_name_input`<sup>Optional</sup> <a name="mesh_name_input" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.meshNameInput"></a>

```python
mesh_name_input: str
```

- *Type:* str

---

##### `mesh_owner_input`<sup>Optional</sup> <a name="mesh_owner_input" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.meshOwnerInput"></a>

```python
mesh_owner_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.specInput"></a>

```python
spec_input: AppmeshVirtualServiceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec">AppmeshVirtualServiceSpec</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mesh_name`<sup>Required</sup> <a name="mesh_name" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.meshName"></a>

```python
mesh_name: str
```

- *Type:* str

---

##### `mesh_owner`<sup>Required</sup> <a name="mesh_owner" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.meshOwner"></a>

```python
mesh_owner: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppmeshVirtualServiceConfig <a name="AppmeshVirtualServiceConfig" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_service

appmeshVirtualService.AppmeshVirtualServiceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  mesh_name: str,
  name: str,
  spec: AppmeshVirtualServiceSpec,
  id: str = None,
  mesh_owner: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.meshName">mesh_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#mesh_name AppmeshVirtualService#mesh_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#name AppmeshVirtualService#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec">AppmeshVirtualServiceSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#id AppmeshVirtualService#id}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.meshOwner">mesh_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#mesh_owner AppmeshVirtualService#mesh_owner}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#tags AppmeshVirtualService#tags}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#tags_all AppmeshVirtualService#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mesh_name`<sup>Required</sup> <a name="mesh_name" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.meshName"></a>

```python
mesh_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#mesh_name AppmeshVirtualService#mesh_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#name AppmeshVirtualService#name}.

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.spec"></a>

```python
spec: AppmeshVirtualServiceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec">AppmeshVirtualServiceSpec</a>

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#spec AppmeshVirtualService#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#id AppmeshVirtualService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mesh_owner`<sup>Optional</sup> <a name="mesh_owner" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.meshOwner"></a>

```python
mesh_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#mesh_owner AppmeshVirtualService#mesh_owner}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#tags AppmeshVirtualService#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#tags_all AppmeshVirtualService#tags_all}.

---

### AppmeshVirtualServiceSpec <a name="AppmeshVirtualServiceSpec" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_service

appmeshVirtualService.AppmeshVirtualServiceSpec(
  provider: AppmeshVirtualServiceSpecProvider = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec.property.provider">provider</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider">AppmeshVirtualServiceSpecProvider</a></code> | provider block. |

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec.property.provider"></a>

```python
provider: AppmeshVirtualServiceSpecProvider
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider">AppmeshVirtualServiceSpecProvider</a>

provider block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#provider AppmeshVirtualService#provider}

---

### AppmeshVirtualServiceSpecProvider <a name="AppmeshVirtualServiceSpecProvider" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_service

appmeshVirtualService.AppmeshVirtualServiceSpecProvider(
  virtual_node: AppmeshVirtualServiceSpecProviderVirtualNode = None,
  virtual_router: AppmeshVirtualServiceSpecProviderVirtualRouter = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider.property.virtualNode">virtual_node</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode">AppmeshVirtualServiceSpecProviderVirtualNode</a></code> | virtual_node block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider.property.virtualRouter">virtual_router</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter">AppmeshVirtualServiceSpecProviderVirtualRouter</a></code> | virtual_router block. |

---

##### `virtual_node`<sup>Optional</sup> <a name="virtual_node" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider.property.virtualNode"></a>

```python
virtual_node: AppmeshVirtualServiceSpecProviderVirtualNode
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode">AppmeshVirtualServiceSpecProviderVirtualNode</a>

virtual_node block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#virtual_node AppmeshVirtualService#virtual_node}

---

##### `virtual_router`<sup>Optional</sup> <a name="virtual_router" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider.property.virtualRouter"></a>

```python
virtual_router: AppmeshVirtualServiceSpecProviderVirtualRouter
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter">AppmeshVirtualServiceSpecProviderVirtualRouter</a>

virtual_router block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#virtual_router AppmeshVirtualService#virtual_router}

---

### AppmeshVirtualServiceSpecProviderVirtualNode <a name="AppmeshVirtualServiceSpecProviderVirtualNode" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_service

appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode(
  virtual_node_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode.property.virtualNodeName">virtual_node_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#virtual_node_name AppmeshVirtualService#virtual_node_name}. |

---

##### `virtual_node_name`<sup>Required</sup> <a name="virtual_node_name" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode.property.virtualNodeName"></a>

```python
virtual_node_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#virtual_node_name AppmeshVirtualService#virtual_node_name}.

---

### AppmeshVirtualServiceSpecProviderVirtualRouter <a name="AppmeshVirtualServiceSpecProviderVirtualRouter" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_service

appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter(
  virtual_router_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter.property.virtualRouterName">virtual_router_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#virtual_router_name AppmeshVirtualService#virtual_router_name}. |

---

##### `virtual_router_name`<sup>Required</sup> <a name="virtual_router_name" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter.property.virtualRouterName"></a>

```python
virtual_router_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#virtual_router_name AppmeshVirtualService#virtual_router_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppmeshVirtualServiceSpecOutputReference <a name="AppmeshVirtualServiceSpecOutputReference" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_service

appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.putProvider">put_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.resetProvider">reset_provider</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provider` <a name="put_provider" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.putProvider"></a>

```python
def put_provider(
  virtual_node: AppmeshVirtualServiceSpecProviderVirtualNode = None,
  virtual_router: AppmeshVirtualServiceSpecProviderVirtualRouter = None
) -> None
```

###### `virtual_node`<sup>Optional</sup> <a name="virtual_node" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.putProvider.parameter.virtualNode"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode">AppmeshVirtualServiceSpecProviderVirtualNode</a>

virtual_node block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#virtual_node AppmeshVirtualService#virtual_node}

---

###### `virtual_router`<sup>Optional</sup> <a name="virtual_router" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.putProvider.parameter.virtualRouter"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter">AppmeshVirtualServiceSpecProviderVirtualRouter</a>

virtual_router block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#virtual_router AppmeshVirtualService#virtual_router}

---

##### `reset_provider` <a name="reset_provider" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.resetProvider"></a>

```python
def reset_provider() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.property.provider">provider</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference">AppmeshVirtualServiceSpecProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.property.providerInput">provider_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider">AppmeshVirtualServiceSpecProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec">AppmeshVirtualServiceSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.property.provider"></a>

```python
provider: AppmeshVirtualServiceSpecProviderOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference">AppmeshVirtualServiceSpecProviderOutputReference</a>

---

##### `provider_input`<sup>Optional</sup> <a name="provider_input" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.property.providerInput"></a>

```python
provider_input: AppmeshVirtualServiceSpecProvider
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider">AppmeshVirtualServiceSpecProvider</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualServiceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpec">AppmeshVirtualServiceSpec</a>

---


### AppmeshVirtualServiceSpecProviderOutputReference <a name="AppmeshVirtualServiceSpecProviderOutputReference" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_service

appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.putVirtualNode">put_virtual_node</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.putVirtualRouter">put_virtual_router</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.resetVirtualNode">reset_virtual_node</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.resetVirtualRouter">reset_virtual_router</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_virtual_node` <a name="put_virtual_node" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.putVirtualNode"></a>

```python
def put_virtual_node(
  virtual_node_name: str
) -> None
```

###### `virtual_node_name`<sup>Required</sup> <a name="virtual_node_name" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.putVirtualNode.parameter.virtualNodeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#virtual_node_name AppmeshVirtualService#virtual_node_name}.

---

##### `put_virtual_router` <a name="put_virtual_router" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.putVirtualRouter"></a>

```python
def put_virtual_router(
  virtual_router_name: str
) -> None
```

###### `virtual_router_name`<sup>Required</sup> <a name="virtual_router_name" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.putVirtualRouter.parameter.virtualRouterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service#virtual_router_name AppmeshVirtualService#virtual_router_name}.

---

##### `reset_virtual_node` <a name="reset_virtual_node" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.resetVirtualNode"></a>

```python
def reset_virtual_node() -> None
```

##### `reset_virtual_router` <a name="reset_virtual_router" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.resetVirtualRouter"></a>

```python
def reset_virtual_router() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.virtualNode">virtual_node</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference">AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.virtualRouter">virtual_router</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference">AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.virtualNodeInput">virtual_node_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode">AppmeshVirtualServiceSpecProviderVirtualNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.virtualRouterInput">virtual_router_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter">AppmeshVirtualServiceSpecProviderVirtualRouter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider">AppmeshVirtualServiceSpecProvider</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `virtual_node`<sup>Required</sup> <a name="virtual_node" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.virtualNode"></a>

```python
virtual_node: AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference">AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference</a>

---

##### `virtual_router`<sup>Required</sup> <a name="virtual_router" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.virtualRouter"></a>

```python
virtual_router: AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference">AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference</a>

---

##### `virtual_node_input`<sup>Optional</sup> <a name="virtual_node_input" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.virtualNodeInput"></a>

```python
virtual_node_input: AppmeshVirtualServiceSpecProviderVirtualNode
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode">AppmeshVirtualServiceSpecProviderVirtualNode</a>

---

##### `virtual_router_input`<sup>Optional</sup> <a name="virtual_router_input" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.virtualRouterInput"></a>

```python
virtual_router_input: AppmeshVirtualServiceSpecProviderVirtualRouter
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter">AppmeshVirtualServiceSpecProviderVirtualRouter</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualServiceSpecProvider
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProvider">AppmeshVirtualServiceSpecProvider</a>

---


### AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference <a name="AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_service

appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.virtualNodeNameInput">virtual_node_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.virtualNodeName">virtual_node_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode">AppmeshVirtualServiceSpecProviderVirtualNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `virtual_node_name_input`<sup>Optional</sup> <a name="virtual_node_name_input" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.virtualNodeNameInput"></a>

```python
virtual_node_name_input: str
```

- *Type:* str

---

##### `virtual_node_name`<sup>Required</sup> <a name="virtual_node_name" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.virtualNodeName"></a>

```python
virtual_node_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualServiceSpecProviderVirtualNode
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualNode">AppmeshVirtualServiceSpecProviderVirtualNode</a>

---


### AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference <a name="AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_service

appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.virtualRouterNameInput">virtual_router_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.virtualRouterName">virtual_router_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter">AppmeshVirtualServiceSpecProviderVirtualRouter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `virtual_router_name_input`<sup>Optional</sup> <a name="virtual_router_name_input" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.virtualRouterNameInput"></a>

```python
virtual_router_name_input: str
```

- *Type:* str

---

##### `virtual_router_name`<sup>Required</sup> <a name="virtual_router_name" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.virtualRouterName"></a>

```python
virtual_router_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualServiceSpecProviderVirtualRouter
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualService.AppmeshVirtualServiceSpecProviderVirtualRouter">AppmeshVirtualServiceSpecProviderVirtualRouter</a>

---



