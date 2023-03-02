# `appmeshVirtualGateway` Submodule <a name="`appmeshVirtualGateway` Submodule" id="@cdktf/provider-aws.appmeshVirtualGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppmeshVirtualGateway <a name="AppmeshVirtualGateway" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway aws_appmesh_virtual_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGateway(
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
  spec: AppmeshVirtualGatewaySpec,
  id: str = None,
  mesh_owner: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.meshName">mesh_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#mesh_name AppmeshVirtualGateway#mesh_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#name AppmeshVirtualGateway#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec">AppmeshVirtualGatewaySpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#id AppmeshVirtualGateway#id}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.meshOwner">mesh_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#mesh_owner AppmeshVirtualGateway#mesh_owner}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#tags AppmeshVirtualGateway#tags}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#tags_all AppmeshVirtualGateway#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mesh_name`<sup>Required</sup> <a name="mesh_name" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.meshName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#mesh_name AppmeshVirtualGateway#mesh_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#name AppmeshVirtualGateway#name}.

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec">AppmeshVirtualGatewaySpec</a>

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#spec AppmeshVirtualGateway#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#id AppmeshVirtualGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mesh_owner`<sup>Optional</sup> <a name="mesh_owner" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.meshOwner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#mesh_owner AppmeshVirtualGateway#mesh_owner}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#tags AppmeshVirtualGateway#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#tags_all AppmeshVirtualGateway#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.resetMeshOwner">reset_mesh_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_spec` <a name="put_spec" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.putSpec"></a>

```python
def put_spec(
  listener: typing.Union[IResolvable, typing.List[AppmeshVirtualGatewaySpecListener]],
  backend_defaults: AppmeshVirtualGatewaySpecBackendDefaults = None,
  logging: AppmeshVirtualGatewaySpecLogging = None
) -> None
```

###### `listener`<sup>Required</sup> <a name="listener" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.putSpec.parameter.listener"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener">AppmeshVirtualGatewaySpecListener</a>]]

listener block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#listener AppmeshVirtualGateway#listener}

---

###### `backend_defaults`<sup>Optional</sup> <a name="backend_defaults" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.putSpec.parameter.backendDefaults"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults">AppmeshVirtualGatewaySpecBackendDefaults</a>

backend_defaults block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#backend_defaults AppmeshVirtualGateway#backend_defaults}

---

###### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.putSpec.parameter.logging"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging">AppmeshVirtualGatewaySpecLogging</a>

logging block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#logging AppmeshVirtualGateway#logging}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mesh_owner` <a name="reset_mesh_owner" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.resetMeshOwner"></a>

```python
def reset_mesh_owner() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.createdDate">created_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.lastUpdatedDate">last_updated_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.resourceOwner">resource_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference">AppmeshVirtualGatewaySpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.meshNameInput">mesh_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.meshOwnerInput">mesh_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.specInput">spec_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec">AppmeshVirtualGatewaySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.meshName">mesh_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.meshOwner">mesh_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_date`<sup>Required</sup> <a name="created_date" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.createdDate"></a>

```python
created_date: str
```

- *Type:* str

---

##### `last_updated_date`<sup>Required</sup> <a name="last_updated_date" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.lastUpdatedDate"></a>

```python
last_updated_date: str
```

- *Type:* str

---

##### `resource_owner`<sup>Required</sup> <a name="resource_owner" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.resourceOwner"></a>

```python
resource_owner: str
```

- *Type:* str

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.spec"></a>

```python
spec: AppmeshVirtualGatewaySpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference">AppmeshVirtualGatewaySpecOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mesh_name_input`<sup>Optional</sup> <a name="mesh_name_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.meshNameInput"></a>

```python
mesh_name_input: str
```

- *Type:* str

---

##### `mesh_owner_input`<sup>Optional</sup> <a name="mesh_owner_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.meshOwnerInput"></a>

```python
mesh_owner_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.specInput"></a>

```python
spec_input: AppmeshVirtualGatewaySpec
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec">AppmeshVirtualGatewaySpec</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mesh_name`<sup>Required</sup> <a name="mesh_name" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.meshName"></a>

```python
mesh_name: str
```

- *Type:* str

---

##### `mesh_owner`<sup>Required</sup> <a name="mesh_owner" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.meshOwner"></a>

```python
mesh_owner: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppmeshVirtualGatewayConfig <a name="AppmeshVirtualGatewayConfig" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewayConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  mesh_name: str,
  name: str,
  spec: AppmeshVirtualGatewaySpec,
  id: str = None,
  mesh_owner: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.meshName">mesh_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#mesh_name AppmeshVirtualGateway#mesh_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#name AppmeshVirtualGateway#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec">AppmeshVirtualGatewaySpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#id AppmeshVirtualGateway#id}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.meshOwner">mesh_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#mesh_owner AppmeshVirtualGateway#mesh_owner}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#tags AppmeshVirtualGateway#tags}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#tags_all AppmeshVirtualGateway#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mesh_name`<sup>Required</sup> <a name="mesh_name" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.meshName"></a>

```python
mesh_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#mesh_name AppmeshVirtualGateway#mesh_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#name AppmeshVirtualGateway#name}.

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.spec"></a>

```python
spec: AppmeshVirtualGatewaySpec
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec">AppmeshVirtualGatewaySpec</a>

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#spec AppmeshVirtualGateway#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#id AppmeshVirtualGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mesh_owner`<sup>Optional</sup> <a name="mesh_owner" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.meshOwner"></a>

```python
mesh_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#mesh_owner AppmeshVirtualGateway#mesh_owner}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#tags AppmeshVirtualGateway#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#tags_all AppmeshVirtualGateway#tags_all}.

---

### AppmeshVirtualGatewaySpec <a name="AppmeshVirtualGatewaySpec" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpec(
  listener: typing.Union[IResolvable, typing.List[AppmeshVirtualGatewaySpecListener]],
  backend_defaults: AppmeshVirtualGatewaySpecBackendDefaults = None,
  logging: AppmeshVirtualGatewaySpecLogging = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec.property.listener">listener</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener">AppmeshVirtualGatewaySpecListener</a>]]</code> | listener block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec.property.backendDefaults">backend_defaults</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults">AppmeshVirtualGatewaySpecBackendDefaults</a></code> | backend_defaults block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging">AppmeshVirtualGatewaySpecLogging</a></code> | logging block. |

---

##### `listener`<sup>Required</sup> <a name="listener" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec.property.listener"></a>

```python
listener: typing.Union[IResolvable, typing.List[AppmeshVirtualGatewaySpecListener]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener">AppmeshVirtualGatewaySpecListener</a>]]

listener block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#listener AppmeshVirtualGateway#listener}

---

##### `backend_defaults`<sup>Optional</sup> <a name="backend_defaults" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec.property.backendDefaults"></a>

```python
backend_defaults: AppmeshVirtualGatewaySpecBackendDefaults
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults">AppmeshVirtualGatewaySpecBackendDefaults</a>

backend_defaults block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#backend_defaults AppmeshVirtualGateway#backend_defaults}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec.property.logging"></a>

```python
logging: AppmeshVirtualGatewaySpecLogging
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging">AppmeshVirtualGatewaySpecLogging</a>

logging block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#logging AppmeshVirtualGateway#logging}

---

### AppmeshVirtualGatewaySpecBackendDefaults <a name="AppmeshVirtualGatewaySpecBackendDefaults" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults(
  client_policy: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults.property.clientPolicy">client_policy</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy</a></code> | client_policy block. |

---

##### `client_policy`<sup>Optional</sup> <a name="client_policy" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults.property.clientPolicy"></a>

```python
client_policy: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy</a>

client_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#client_policy AppmeshVirtualGateway#client_policy}

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy(
  tls: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy.property.tls">tls</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls</a></code> | tls block. |

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy.property.tls"></a>

```python
tls: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls</a>

tls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#tls AppmeshVirtualGateway#tls}

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls(
  validation: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation,
  certificate: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate = None,
  enforce: typing.Union[bool, IResolvable] = None,
  ports: typing.List[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.validation">validation</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation</a></code> | validation block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate</a></code> | certificate block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.enforce">enforce</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#enforce AppmeshVirtualGateway#enforce}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#ports AppmeshVirtualGateway#ports}. |

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.validation"></a>

```python
validation: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation</a>

validation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#validation AppmeshVirtualGateway#validation}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.certificate"></a>

```python
certificate: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate</a>

certificate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate AppmeshVirtualGateway#certificate}

---

##### `enforce`<sup>Optional</sup> <a name="enforce" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.enforce"></a>

```python
enforce: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#enforce AppmeshVirtualGateway#enforce}.

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#ports AppmeshVirtualGateway#ports}.

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate(
  file: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile = None,
  sds: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate.property.file">file</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile</a></code> | file block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate.property.sds">sds</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds</a></code> | sds block. |

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate.property.file"></a>

```python
file: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile</a>

file block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#file AppmeshVirtualGateway#file}

---

##### `sds`<sup>Optional</sup> <a name="sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate.property.sds"></a>

```python
sds: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds</a>

sds block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#sds AppmeshVirtualGateway#sds}

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile(
  certificate_chain: str,
  private_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile.property.certificateChain">certificate_chain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_chain AppmeshVirtualGateway#certificate_chain}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile.property.privateKey">private_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#private_key AppmeshVirtualGateway#private_key}. |

---

##### `certificate_chain`<sup>Required</sup> <a name="certificate_chain" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile.property.certificateChain"></a>

```python
certificate_chain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_chain AppmeshVirtualGateway#certificate_chain}.

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#private_key AppmeshVirtualGateway#private_key}.

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds(
  secret_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds.property.secretName">secret_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#secret_name AppmeshVirtualGateway#secret_name}. |

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#secret_name AppmeshVirtualGateway#secret_name}.

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation(
  trust: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust,
  subject_alternative_names: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.property.trust">trust</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust</a></code> | trust block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.property.subjectAlternativeNames">subject_alternative_names</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames</a></code> | subject_alternative_names block. |

---

##### `trust`<sup>Required</sup> <a name="trust" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.property.trust"></a>

```python
trust: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust</a>

trust block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#trust AppmeshVirtualGateway#trust}

---

##### `subject_alternative_names`<sup>Optional</sup> <a name="subject_alternative_names" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.property.subjectAlternativeNames"></a>

```python
subject_alternative_names: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames</a>

subject_alternative_names block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#subject_alternative_names AppmeshVirtualGateway#subject_alternative_names}

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames(
  match: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch</a></code> | match block. |

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames.property.match"></a>

```python
match: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#match AppmeshVirtualGateway#match}

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch(
  exact: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch.property.exact">exact</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#exact AppmeshVirtualGateway#exact}. |

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch.property.exact"></a>

```python
exact: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#exact AppmeshVirtualGateway#exact}.

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust(
  acm: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm = None,
  file: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile = None,
  sds: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.property.acm">acm</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm</a></code> | acm block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.property.file">file</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile</a></code> | file block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.property.sds">sds</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds</a></code> | sds block. |

---

##### `acm`<sup>Optional</sup> <a name="acm" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.property.acm"></a>

```python
acm: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm</a>

acm block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#acm AppmeshVirtualGateway#acm}

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.property.file"></a>

```python
file: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile</a>

file block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#file AppmeshVirtualGateway#file}

---

##### `sds`<sup>Optional</sup> <a name="sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.property.sds"></a>

```python
sds: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds</a>

sds block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#sds AppmeshVirtualGateway#sds}

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm(
  certificate_authority_arns: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm.property.certificateAuthorityArns">certificate_authority_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_authority_arns AppmeshVirtualGateway#certificate_authority_arns}. |

---

##### `certificate_authority_arns`<sup>Required</sup> <a name="certificate_authority_arns" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm.property.certificateAuthorityArns"></a>

```python
certificate_authority_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_authority_arns AppmeshVirtualGateway#certificate_authority_arns}.

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile(
  certificate_chain: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile.property.certificateChain">certificate_chain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_chain AppmeshVirtualGateway#certificate_chain}. |

---

##### `certificate_chain`<sup>Required</sup> <a name="certificate_chain" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile.property.certificateChain"></a>

```python
certificate_chain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_chain AppmeshVirtualGateway#certificate_chain}.

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds(
  secret_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds.property.secretName">secret_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#secret_name AppmeshVirtualGateway#secret_name}. |

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#secret_name AppmeshVirtualGateway#secret_name}.

---

### AppmeshVirtualGatewaySpecListener <a name="AppmeshVirtualGatewaySpecListener" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener(
  port_mapping: AppmeshVirtualGatewaySpecListenerPortMapping,
  connection_pool: AppmeshVirtualGatewaySpecListenerConnectionPool = None,
  health_check: AppmeshVirtualGatewaySpecListenerHealthCheck = None,
  tls: AppmeshVirtualGatewaySpecListenerTls = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener.property.portMapping">port_mapping</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping">AppmeshVirtualGatewaySpecListenerPortMapping</a></code> | port_mapping block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener.property.connectionPool">connection_pool</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool">AppmeshVirtualGatewaySpecListenerConnectionPool</a></code> | connection_pool block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener.property.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck">AppmeshVirtualGatewaySpecListenerHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener.property.tls">tls</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls">AppmeshVirtualGatewaySpecListenerTls</a></code> | tls block. |

---

##### `port_mapping`<sup>Required</sup> <a name="port_mapping" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener.property.portMapping"></a>

```python
port_mapping: AppmeshVirtualGatewaySpecListenerPortMapping
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping">AppmeshVirtualGatewaySpecListenerPortMapping</a>

port_mapping block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#port_mapping AppmeshVirtualGateway#port_mapping}

---

##### `connection_pool`<sup>Optional</sup> <a name="connection_pool" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener.property.connectionPool"></a>

```python
connection_pool: AppmeshVirtualGatewaySpecListenerConnectionPool
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool">AppmeshVirtualGatewaySpecListenerConnectionPool</a>

connection_pool block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#connection_pool AppmeshVirtualGateway#connection_pool}

---

##### `health_check`<sup>Optional</sup> <a name="health_check" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener.property.healthCheck"></a>

```python
health_check: AppmeshVirtualGatewaySpecListenerHealthCheck
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck">AppmeshVirtualGatewaySpecListenerHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#health_check AppmeshVirtualGateway#health_check}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener.property.tls"></a>

```python
tls: AppmeshVirtualGatewaySpecListenerTls
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls">AppmeshVirtualGatewaySpecListenerTls</a>

tls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#tls AppmeshVirtualGateway#tls}

---

### AppmeshVirtualGatewaySpecListenerConnectionPool <a name="AppmeshVirtualGatewaySpecListenerConnectionPool" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool(
  grpc: AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc = None,
  http: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp = None,
  http2: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool.property.grpc">grpc</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc">AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc</a></code> | grpc block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool.property.http">http</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp</a></code> | http block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool.property.http2">http2</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2</a></code> | http2 block. |

---

##### `grpc`<sup>Optional</sup> <a name="grpc" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool.property.grpc"></a>

```python
grpc: AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc">AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#grpc AppmeshVirtualGateway#grpc}

---

##### `http`<sup>Optional</sup> <a name="http" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool.property.http"></a>

```python
http: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp</a>

http block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#http AppmeshVirtualGateway#http}

---

##### `http2`<sup>Optional</sup> <a name="http2" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool.property.http2"></a>

```python
http2: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2</a>

http2 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#http2 AppmeshVirtualGateway#http2}

---

### AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc <a name="AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc(
  max_requests: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc.property.maxRequests">max_requests</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#max_requests AppmeshVirtualGateway#max_requests}. |

---

##### `max_requests`<sup>Required</sup> <a name="max_requests" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc.property.maxRequests"></a>

```python
max_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#max_requests AppmeshVirtualGateway#max_requests}.

---

### AppmeshVirtualGatewaySpecListenerConnectionPoolHttp <a name="AppmeshVirtualGatewaySpecListenerConnectionPoolHttp" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp(
  max_connections: typing.Union[int, float],
  max_pending_requests: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp.property.maxConnections">max_connections</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#max_connections AppmeshVirtualGateway#max_connections}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp.property.maxPendingRequests">max_pending_requests</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#max_pending_requests AppmeshVirtualGateway#max_pending_requests}. |

---

##### `max_connections`<sup>Required</sup> <a name="max_connections" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp.property.maxConnections"></a>

```python
max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#max_connections AppmeshVirtualGateway#max_connections}.

---

##### `max_pending_requests`<sup>Optional</sup> <a name="max_pending_requests" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp.property.maxPendingRequests"></a>

```python
max_pending_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#max_pending_requests AppmeshVirtualGateway#max_pending_requests}.

---

### AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 <a name="AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2(
  max_requests: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2.property.maxRequests">max_requests</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#max_requests AppmeshVirtualGateway#max_requests}. |

---

##### `max_requests`<sup>Required</sup> <a name="max_requests" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2.property.maxRequests"></a>

```python
max_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#max_requests AppmeshVirtualGateway#max_requests}.

---

### AppmeshVirtualGatewaySpecListenerHealthCheck <a name="AppmeshVirtualGatewaySpecListenerHealthCheck" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck(
  healthy_threshold: typing.Union[int, float],
  interval_millis: typing.Union[int, float],
  protocol: str,
  timeout_millis: typing.Union[int, float],
  unhealthy_threshold: typing.Union[int, float],
  path: str = None,
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.healthyThreshold">healthy_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#healthy_threshold AppmeshVirtualGateway#healthy_threshold}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.intervalMillis">interval_millis</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#interval_millis AppmeshVirtualGateway#interval_millis}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#protocol AppmeshVirtualGateway#protocol}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.timeoutMillis">timeout_millis</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#timeout_millis AppmeshVirtualGateway#timeout_millis}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.unhealthyThreshold">unhealthy_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#unhealthy_threshold AppmeshVirtualGateway#unhealthy_threshold}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#path AppmeshVirtualGateway#path}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#port AppmeshVirtualGateway#port}. |

---

##### `healthy_threshold`<sup>Required</sup> <a name="healthy_threshold" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.healthyThreshold"></a>

```python
healthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#healthy_threshold AppmeshVirtualGateway#healthy_threshold}.

---

##### `interval_millis`<sup>Required</sup> <a name="interval_millis" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.intervalMillis"></a>

```python
interval_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#interval_millis AppmeshVirtualGateway#interval_millis}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#protocol AppmeshVirtualGateway#protocol}.

---

##### `timeout_millis`<sup>Required</sup> <a name="timeout_millis" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.timeoutMillis"></a>

```python
timeout_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#timeout_millis AppmeshVirtualGateway#timeout_millis}.

---

##### `unhealthy_threshold`<sup>Required</sup> <a name="unhealthy_threshold" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.unhealthyThreshold"></a>

```python
unhealthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#unhealthy_threshold AppmeshVirtualGateway#unhealthy_threshold}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#path AppmeshVirtualGateway#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#port AppmeshVirtualGateway#port}.

---

### AppmeshVirtualGatewaySpecListenerPortMapping <a name="AppmeshVirtualGatewaySpecListenerPortMapping" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping(
  port: typing.Union[int, float],
  protocol: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#port AppmeshVirtualGateway#port}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#protocol AppmeshVirtualGateway#protocol}. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#port AppmeshVirtualGateway#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#protocol AppmeshVirtualGateway#protocol}.

---

### AppmeshVirtualGatewaySpecListenerTls <a name="AppmeshVirtualGatewaySpecListenerTls" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls(
  certificate: AppmeshVirtualGatewaySpecListenerTlsCertificate,
  mode: str,
  validation: AppmeshVirtualGatewaySpecListenerTlsValidation = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate">AppmeshVirtualGatewaySpecListenerTlsCertificate</a></code> | certificate block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#mode AppmeshVirtualGateway#mode}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls.property.validation">validation</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation">AppmeshVirtualGatewaySpecListenerTlsValidation</a></code> | validation block. |

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls.property.certificate"></a>

```python
certificate: AppmeshVirtualGatewaySpecListenerTlsCertificate
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate">AppmeshVirtualGatewaySpecListenerTlsCertificate</a>

certificate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate AppmeshVirtualGateway#certificate}

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#mode AppmeshVirtualGateway#mode}.

---

##### `validation`<sup>Optional</sup> <a name="validation" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls.property.validation"></a>

```python
validation: AppmeshVirtualGatewaySpecListenerTlsValidation
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation">AppmeshVirtualGatewaySpecListenerTlsValidation</a>

validation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#validation AppmeshVirtualGateway#validation}

---

### AppmeshVirtualGatewaySpecListenerTlsCertificate <a name="AppmeshVirtualGatewaySpecListenerTlsCertificate" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate(
  acm: AppmeshVirtualGatewaySpecListenerTlsCertificateAcm = None,
  file: AppmeshVirtualGatewaySpecListenerTlsCertificateFile = None,
  sds: AppmeshVirtualGatewaySpecListenerTlsCertificateSds = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate.property.acm">acm</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm">AppmeshVirtualGatewaySpecListenerTlsCertificateAcm</a></code> | acm block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate.property.file">file</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile">AppmeshVirtualGatewaySpecListenerTlsCertificateFile</a></code> | file block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate.property.sds">sds</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds">AppmeshVirtualGatewaySpecListenerTlsCertificateSds</a></code> | sds block. |

---

##### `acm`<sup>Optional</sup> <a name="acm" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate.property.acm"></a>

```python
acm: AppmeshVirtualGatewaySpecListenerTlsCertificateAcm
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm">AppmeshVirtualGatewaySpecListenerTlsCertificateAcm</a>

acm block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#acm AppmeshVirtualGateway#acm}

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate.property.file"></a>

```python
file: AppmeshVirtualGatewaySpecListenerTlsCertificateFile
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile">AppmeshVirtualGatewaySpecListenerTlsCertificateFile</a>

file block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#file AppmeshVirtualGateway#file}

---

##### `sds`<sup>Optional</sup> <a name="sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate.property.sds"></a>

```python
sds: AppmeshVirtualGatewaySpecListenerTlsCertificateSds
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds">AppmeshVirtualGatewaySpecListenerTlsCertificateSds</a>

sds block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#sds AppmeshVirtualGateway#sds}

---

### AppmeshVirtualGatewaySpecListenerTlsCertificateAcm <a name="AppmeshVirtualGatewaySpecListenerTlsCertificateAcm" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm(
  certificate_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm.property.certificateArn">certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_arn AppmeshVirtualGateway#certificate_arn}. |

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_arn AppmeshVirtualGateway#certificate_arn}.

---

### AppmeshVirtualGatewaySpecListenerTlsCertificateFile <a name="AppmeshVirtualGatewaySpecListenerTlsCertificateFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile(
  certificate_chain: str,
  private_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile.property.certificateChain">certificate_chain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_chain AppmeshVirtualGateway#certificate_chain}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile.property.privateKey">private_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#private_key AppmeshVirtualGateway#private_key}. |

---

##### `certificate_chain`<sup>Required</sup> <a name="certificate_chain" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile.property.certificateChain"></a>

```python
certificate_chain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_chain AppmeshVirtualGateway#certificate_chain}.

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#private_key AppmeshVirtualGateway#private_key}.

---

### AppmeshVirtualGatewaySpecListenerTlsCertificateSds <a name="AppmeshVirtualGatewaySpecListenerTlsCertificateSds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds(
  secret_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds.property.secretName">secret_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#secret_name AppmeshVirtualGateway#secret_name}. |

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#secret_name AppmeshVirtualGateway#secret_name}.

---

### AppmeshVirtualGatewaySpecListenerTlsValidation <a name="AppmeshVirtualGatewaySpecListenerTlsValidation" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation(
  trust: AppmeshVirtualGatewaySpecListenerTlsValidationTrust,
  subject_alternative_names: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation.property.trust">trust</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust">AppmeshVirtualGatewaySpecListenerTlsValidationTrust</a></code> | trust block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation.property.subjectAlternativeNames">subject_alternative_names</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames</a></code> | subject_alternative_names block. |

---

##### `trust`<sup>Required</sup> <a name="trust" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation.property.trust"></a>

```python
trust: AppmeshVirtualGatewaySpecListenerTlsValidationTrust
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust">AppmeshVirtualGatewaySpecListenerTlsValidationTrust</a>

trust block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#trust AppmeshVirtualGateway#trust}

---

##### `subject_alternative_names`<sup>Optional</sup> <a name="subject_alternative_names" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation.property.subjectAlternativeNames"></a>

```python
subject_alternative_names: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames</a>

subject_alternative_names block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#subject_alternative_names AppmeshVirtualGateway#subject_alternative_names}

---

### AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames <a name="AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames(
  match: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch</a></code> | match block. |

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames.property.match"></a>

```python
match: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#match AppmeshVirtualGateway#match}

---

### AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch <a name="AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch(
  exact: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch.property.exact">exact</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#exact AppmeshVirtualGateway#exact}. |

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch.property.exact"></a>

```python
exact: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#exact AppmeshVirtualGateway#exact}.

---

### AppmeshVirtualGatewaySpecListenerTlsValidationTrust <a name="AppmeshVirtualGatewaySpecListenerTlsValidationTrust" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust(
  file: AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile = None,
  sds: AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust.property.file">file</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile">AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile</a></code> | file block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust.property.sds">sds</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds">AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds</a></code> | sds block. |

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust.property.file"></a>

```python
file: AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile">AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile</a>

file block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#file AppmeshVirtualGateway#file}

---

##### `sds`<sup>Optional</sup> <a name="sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust.property.sds"></a>

```python
sds: AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds">AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds</a>

sds block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#sds AppmeshVirtualGateway#sds}

---

### AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile <a name="AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile(
  certificate_chain: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile.property.certificateChain">certificate_chain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_chain AppmeshVirtualGateway#certificate_chain}. |

---

##### `certificate_chain`<sup>Required</sup> <a name="certificate_chain" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile.property.certificateChain"></a>

```python
certificate_chain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_chain AppmeshVirtualGateway#certificate_chain}.

---

### AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds <a name="AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds(
  secret_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds.property.secretName">secret_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#secret_name AppmeshVirtualGateway#secret_name}. |

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#secret_name AppmeshVirtualGateway#secret_name}.

---

### AppmeshVirtualGatewaySpecLogging <a name="AppmeshVirtualGatewaySpecLogging" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging(
  access_log: AppmeshVirtualGatewaySpecLoggingAccessLog = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging.property.accessLog">access_log</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog">AppmeshVirtualGatewaySpecLoggingAccessLog</a></code> | access_log block. |

---

##### `access_log`<sup>Optional</sup> <a name="access_log" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging.property.accessLog"></a>

```python
access_log: AppmeshVirtualGatewaySpecLoggingAccessLog
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog">AppmeshVirtualGatewaySpecLoggingAccessLog</a>

access_log block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#access_log AppmeshVirtualGateway#access_log}

---

### AppmeshVirtualGatewaySpecLoggingAccessLog <a name="AppmeshVirtualGatewaySpecLoggingAccessLog" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog(
  file: AppmeshVirtualGatewaySpecLoggingAccessLogFile = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog.property.file">file</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile">AppmeshVirtualGatewaySpecLoggingAccessLogFile</a></code> | file block. |

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog.property.file"></a>

```python
file: AppmeshVirtualGatewaySpecLoggingAccessLogFile
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile">AppmeshVirtualGatewaySpecLoggingAccessLogFile</a>

file block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#file AppmeshVirtualGateway#file}

---

### AppmeshVirtualGatewaySpecLoggingAccessLogFile <a name="AppmeshVirtualGatewaySpecLoggingAccessLogFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile(
  path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#path AppmeshVirtualGateway#path}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#path AppmeshVirtualGateway#path}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.putTls">put_tls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.resetTls">reset_tls</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tls` <a name="put_tls" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.putTls"></a>

```python
def put_tls(
  validation: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation,
  certificate: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate = None,
  enforce: typing.Union[bool, IResolvable] = None,
  ports: typing.List[typing.Union[int, float]] = None
) -> None
```

###### `validation`<sup>Required</sup> <a name="validation" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.putTls.parameter.validation"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation</a>

validation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#validation AppmeshVirtualGateway#validation}

---

###### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.putTls.parameter.certificate"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate</a>

certificate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate AppmeshVirtualGateway#certificate}

---

###### `enforce`<sup>Optional</sup> <a name="enforce" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.putTls.parameter.enforce"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#enforce AppmeshVirtualGateway#enforce}.

---

###### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.putTls.parameter.ports"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#ports AppmeshVirtualGateway#ports}.

---

##### `reset_tls` <a name="reset_tls" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.resetTls"></a>

```python
def reset_tls() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.tls">tls</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.tlsInput">tls_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.tls"></a>

```python
tls: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference</a>

---

##### `tls_input`<sup>Optional</sup> <a name="tls_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.tlsInput"></a>

```python
tls_input: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.certificateChainInput">certificate_chain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.certificateChain">certificate_chain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_chain_input`<sup>Optional</sup> <a name="certificate_chain_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.certificateChainInput"></a>

```python
certificate_chain_input: str
```

- *Type:* str

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `certificate_chain`<sup>Required</sup> <a name="certificate_chain" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.certificateChain"></a>

```python
certificate_chain: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.putFile">put_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.putSds">put_sds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.resetFile">reset_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.resetSds">reset_sds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_file` <a name="put_file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.putFile"></a>

```python
def put_file(
  certificate_chain: str,
  private_key: str
) -> None
```

###### `certificate_chain`<sup>Required</sup> <a name="certificate_chain" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.putFile.parameter.certificateChain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_chain AppmeshVirtualGateway#certificate_chain}.

---

###### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.putFile.parameter.privateKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#private_key AppmeshVirtualGateway#private_key}.

---

##### `put_sds` <a name="put_sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.putSds"></a>

```python
def put_sds(
  secret_name: str
) -> None
```

###### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.putSds.parameter.secretName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#secret_name AppmeshVirtualGateway#secret_name}.

---

##### `reset_file` <a name="reset_file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.resetFile"></a>

```python
def reset_file() -> None
```

##### `reset_sds` <a name="reset_sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.resetSds"></a>

```python
def reset_sds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.file">file</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.sds">sds</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.fileInput">file_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.sdsInput">sds_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.file"></a>

```python
file: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference</a>

---

##### `sds`<sup>Required</sup> <a name="sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.sds"></a>

```python
sds: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference</a>

---

##### `file_input`<sup>Optional</sup> <a name="file_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.fileInput"></a>

```python
file_input: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile</a>

---

##### `sds_input`<sup>Optional</sup> <a name="sds_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.sdsInput"></a>

```python
sds_input: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.putCertificate">put_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.putValidation">put_validation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.resetEnforce">reset_enforce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.resetPorts">reset_ports</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_certificate` <a name="put_certificate" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.putCertificate"></a>

```python
def put_certificate(
  file: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile = None,
  sds: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds = None
) -> None
```

###### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.putCertificate.parameter.file"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile</a>

file block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#file AppmeshVirtualGateway#file}

---

###### `sds`<sup>Optional</sup> <a name="sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.putCertificate.parameter.sds"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds</a>

sds block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#sds AppmeshVirtualGateway#sds}

---

##### `put_validation` <a name="put_validation" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.putValidation"></a>

```python
def put_validation(
  trust: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust,
  subject_alternative_names: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames = None
) -> None
```

###### `trust`<sup>Required</sup> <a name="trust" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.putValidation.parameter.trust"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust</a>

trust block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#trust AppmeshVirtualGateway#trust}

---

###### `subject_alternative_names`<sup>Optional</sup> <a name="subject_alternative_names" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.putValidation.parameter.subjectAlternativeNames"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames</a>

subject_alternative_names block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#subject_alternative_names AppmeshVirtualGateway#subject_alternative_names}

---

##### `reset_certificate` <a name="reset_certificate" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_enforce` <a name="reset_enforce" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.resetEnforce"></a>

```python
def reset_enforce() -> None
```

##### `reset_ports` <a name="reset_ports" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.resetPorts"></a>

```python
def reset_ports() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.validation">validation</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.certificateInput">certificate_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.enforceInput">enforce_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.portsInput">ports_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.validationInput">validation_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.enforce">enforce</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.certificate"></a>

```python
certificate: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference</a>

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.validation"></a>

```python
validation: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference</a>

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.certificateInput"></a>

```python
certificate_input: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate</a>

---

##### `enforce_input`<sup>Optional</sup> <a name="enforce_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.enforceInput"></a>

```python
enforce_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.portsInput"></a>

```python
ports_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `validation_input`<sup>Optional</sup> <a name="validation_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.validationInput"></a>

```python
validation_input: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation</a>

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.enforce"></a>

```python
enforce: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.putSubjectAlternativeNames">put_subject_alternative_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.putTrust">put_trust</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.resetSubjectAlternativeNames">reset_subject_alternative_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_subject_alternative_names` <a name="put_subject_alternative_names" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.putSubjectAlternativeNames"></a>

```python
def put_subject_alternative_names(
  match: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch
) -> None
```

###### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.putSubjectAlternativeNames.parameter.match"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#match AppmeshVirtualGateway#match}

---

##### `put_trust` <a name="put_trust" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.putTrust"></a>

```python
def put_trust(
  acm: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm = None,
  file: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile = None,
  sds: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds = None
) -> None
```

###### `acm`<sup>Optional</sup> <a name="acm" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.putTrust.parameter.acm"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm</a>

acm block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#acm AppmeshVirtualGateway#acm}

---

###### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.putTrust.parameter.file"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile</a>

file block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#file AppmeshVirtualGateway#file}

---

###### `sds`<sup>Optional</sup> <a name="sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.putTrust.parameter.sds"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds</a>

sds block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#sds AppmeshVirtualGateway#sds}

---

##### `reset_subject_alternative_names` <a name="reset_subject_alternative_names" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.resetSubjectAlternativeNames"></a>

```python
def reset_subject_alternative_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.subjectAlternativeNames">subject_alternative_names</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.trust">trust</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.subjectAlternativeNamesInput">subject_alternative_names_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.trustInput">trust_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subject_alternative_names`<sup>Required</sup> <a name="subject_alternative_names" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.subjectAlternativeNames"></a>

```python
subject_alternative_names: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference</a>

---

##### `trust`<sup>Required</sup> <a name="trust" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.trust"></a>

```python
trust: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference</a>

---

##### `subject_alternative_names_input`<sup>Optional</sup> <a name="subject_alternative_names_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.subjectAlternativeNamesInput"></a>

```python
subject_alternative_names_input: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames</a>

---

##### `trust_input`<sup>Optional</sup> <a name="trust_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.trustInput"></a>

```python
trust_input: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.exactInput">exact_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.exact">exact</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exact_input`<sup>Optional</sup> <a name="exact_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.exactInput"></a>

```python
exact_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.exact"></a>

```python
exact: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.putMatch">put_match</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_match` <a name="put_match" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.putMatch"></a>

```python
def put_match(
  exact: typing.List[str]
) -> None
```

###### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.putMatch.parameter.exact"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#exact AppmeshVirtualGateway#exact}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.matchInput">match_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.match"></a>

```python
match: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference</a>

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.matchInput"></a>

```python
match_input: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.certificateAuthorityArnsInput">certificate_authority_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.certificateAuthorityArns">certificate_authority_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_authority_arns_input`<sup>Optional</sup> <a name="certificate_authority_arns_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.certificateAuthorityArnsInput"></a>

```python
certificate_authority_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `certificate_authority_arns`<sup>Required</sup> <a name="certificate_authority_arns" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.certificateAuthorityArns"></a>

```python
certificate_authority_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.certificateChainInput">certificate_chain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.certificateChain">certificate_chain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_chain_input`<sup>Optional</sup> <a name="certificate_chain_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.certificateChainInput"></a>

```python
certificate_chain_input: str
```

- *Type:* str

---

##### `certificate_chain`<sup>Required</sup> <a name="certificate_chain" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.certificateChain"></a>

```python
certificate_chain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.putAcm">put_acm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.putFile">put_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.putSds">put_sds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.resetAcm">reset_acm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.resetFile">reset_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.resetSds">reset_sds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_acm` <a name="put_acm" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.putAcm"></a>

```python
def put_acm(
  certificate_authority_arns: typing.List[str]
) -> None
```

###### `certificate_authority_arns`<sup>Required</sup> <a name="certificate_authority_arns" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.putAcm.parameter.certificateAuthorityArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_authority_arns AppmeshVirtualGateway#certificate_authority_arns}.

---

##### `put_file` <a name="put_file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.putFile"></a>

```python
def put_file(
  certificate_chain: str
) -> None
```

###### `certificate_chain`<sup>Required</sup> <a name="certificate_chain" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.putFile.parameter.certificateChain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_chain AppmeshVirtualGateway#certificate_chain}.

---

##### `put_sds` <a name="put_sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.putSds"></a>

```python
def put_sds(
  secret_name: str
) -> None
```

###### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.putSds.parameter.secretName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#secret_name AppmeshVirtualGateway#secret_name}.

---

##### `reset_acm` <a name="reset_acm" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.resetAcm"></a>

```python
def reset_acm() -> None
```

##### `reset_file` <a name="reset_file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.resetFile"></a>

```python
def reset_file() -> None
```

##### `reset_sds` <a name="reset_sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.resetSds"></a>

```python
def reset_sds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.acm">acm</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.file">file</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.sds">sds</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.acmInput">acm_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.fileInput">file_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.sdsInput">sds_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `acm`<sup>Required</sup> <a name="acm" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.acm"></a>

```python
acm: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference</a>

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.file"></a>

```python
file: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference</a>

---

##### `sds`<sup>Required</sup> <a name="sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.sds"></a>

```python
sds: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference</a>

---

##### `acm_input`<sup>Optional</sup> <a name="acm_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.acmInput"></a>

```python
acm_input: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm</a>

---

##### `file_input`<sup>Optional</sup> <a name="file_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.fileInput"></a>

```python
file_input: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile</a>

---

##### `sds_input`<sup>Optional</sup> <a name="sds_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.sdsInput"></a>

```python
sds_input: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.putClientPolicy">put_client_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.resetClientPolicy">reset_client_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_client_policy` <a name="put_client_policy" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.putClientPolicy"></a>

```python
def put_client_policy(
  tls: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls = None
) -> None
```

###### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.putClientPolicy.parameter.tls"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls</a>

tls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#tls AppmeshVirtualGateway#tls}

---

##### `reset_client_policy` <a name="reset_client_policy" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.resetClientPolicy"></a>

```python
def reset_client_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.clientPolicy">client_policy</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.clientPolicyInput">client_policy_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults">AppmeshVirtualGatewaySpecBackendDefaults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_policy`<sup>Required</sup> <a name="client_policy" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.clientPolicy"></a>

```python
client_policy: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference</a>

---

##### `client_policy_input`<sup>Optional</sup> <a name="client_policy_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.clientPolicyInput"></a>

```python
client_policy_input: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpecBackendDefaults
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults">AppmeshVirtualGatewaySpecBackendDefaults</a>

---


### AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference <a name="AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.maxRequestsInput">max_requests_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.maxRequests">max_requests</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc">AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_requests_input`<sup>Optional</sup> <a name="max_requests_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.maxRequestsInput"></a>

```python
max_requests_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_requests`<sup>Required</sup> <a name="max_requests" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.maxRequests"></a>

```python
max_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc">AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc</a>

---


### AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference <a name="AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.maxRequestsInput">max_requests_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.maxRequests">max_requests</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_requests_input`<sup>Optional</sup> <a name="max_requests_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.maxRequestsInput"></a>

```python
max_requests_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_requests`<sup>Required</sup> <a name="max_requests" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.maxRequests"></a>

```python
max_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2</a>

---


### AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference <a name="AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.resetMaxPendingRequests">reset_max_pending_requests</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_pending_requests` <a name="reset_max_pending_requests" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.resetMaxPendingRequests"></a>

```python
def reset_max_pending_requests() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.maxConnectionsInput">max_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.maxPendingRequestsInput">max_pending_requests_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.maxConnections">max_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.maxPendingRequests">max_pending_requests</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_connections_input`<sup>Optional</sup> <a name="max_connections_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.maxConnectionsInput"></a>

```python
max_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pending_requests_input`<sup>Optional</sup> <a name="max_pending_requests_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.maxPendingRequestsInput"></a>

```python
max_pending_requests_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_connections`<sup>Required</sup> <a name="max_connections" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.maxConnections"></a>

```python
max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pending_requests`<sup>Required</sup> <a name="max_pending_requests" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.maxPendingRequests"></a>

```python
max_pending_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp</a>

---


### AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference <a name="AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.putGrpc">put_grpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.putHttp">put_http</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.putHttp2">put_http2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.resetGrpc">reset_grpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.resetHttp">reset_http</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.resetHttp2">reset_http2</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_grpc` <a name="put_grpc" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.putGrpc"></a>

```python
def put_grpc(
  max_requests: typing.Union[int, float]
) -> None
```

###### `max_requests`<sup>Required</sup> <a name="max_requests" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.putGrpc.parameter.maxRequests"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#max_requests AppmeshVirtualGateway#max_requests}.

---

##### `put_http` <a name="put_http" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.putHttp"></a>

```python
def put_http(
  max_connections: typing.Union[int, float],
  max_pending_requests: typing.Union[int, float] = None
) -> None
```

###### `max_connections`<sup>Required</sup> <a name="max_connections" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.putHttp.parameter.maxConnections"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#max_connections AppmeshVirtualGateway#max_connections}.

---

###### `max_pending_requests`<sup>Optional</sup> <a name="max_pending_requests" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.putHttp.parameter.maxPendingRequests"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#max_pending_requests AppmeshVirtualGateway#max_pending_requests}.

---

##### `put_http2` <a name="put_http2" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.putHttp2"></a>

```python
def put_http2(
  max_requests: typing.Union[int, float]
) -> None
```

###### `max_requests`<sup>Required</sup> <a name="max_requests" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.putHttp2.parameter.maxRequests"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#max_requests AppmeshVirtualGateway#max_requests}.

---

##### `reset_grpc` <a name="reset_grpc" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.resetGrpc"></a>

```python
def reset_grpc() -> None
```

##### `reset_http` <a name="reset_http" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.resetHttp"></a>

```python
def reset_http() -> None
```

##### `reset_http2` <a name="reset_http2" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.resetHttp2"></a>

```python
def reset_http2() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.grpc">grpc</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference">AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.http">http</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference">AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.http2">http2</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.grpcInput">grpc_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc">AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.http2Input">http2_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.httpInput">http_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool">AppmeshVirtualGatewaySpecListenerConnectionPool</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `grpc`<sup>Required</sup> <a name="grpc" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.grpc"></a>

```python
grpc: AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference">AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference</a>

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.http"></a>

```python
http: AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference">AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference</a>

---

##### `http2`<sup>Required</sup> <a name="http2" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.http2"></a>

```python
http2: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference</a>

---

##### `grpc_input`<sup>Optional</sup> <a name="grpc_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.grpcInput"></a>

```python
grpc_input: AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc">AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc</a>

---

##### `http2_input`<sup>Optional</sup> <a name="http2_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.http2Input"></a>

```python
http2_input: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2</a>

---

##### `http_input`<sup>Optional</sup> <a name="http_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.httpInput"></a>

```python
http_input: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpecListenerConnectionPool
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool">AppmeshVirtualGatewaySpecListenerConnectionPool</a>

---


### AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference <a name="AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.healthyThresholdInput">healthy_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.intervalMillisInput">interval_millis_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.timeoutMillisInput">timeout_millis_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.unhealthyThresholdInput">unhealthy_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.healthyThreshold">healthy_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.intervalMillis">interval_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.timeoutMillis">timeout_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.unhealthyThreshold">unhealthy_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck">AppmeshVirtualGatewaySpecListenerHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `healthy_threshold_input`<sup>Optional</sup> <a name="healthy_threshold_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.healthyThresholdInput"></a>

```python
healthy_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_millis_input`<sup>Optional</sup> <a name="interval_millis_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.intervalMillisInput"></a>

```python
interval_millis_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `timeout_millis_input`<sup>Optional</sup> <a name="timeout_millis_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.timeoutMillisInput"></a>

```python
timeout_millis_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unhealthy_threshold_input`<sup>Optional</sup> <a name="unhealthy_threshold_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.unhealthyThresholdInput"></a>

```python
unhealthy_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `healthy_threshold`<sup>Required</sup> <a name="healthy_threshold" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.healthyThreshold"></a>

```python
healthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_millis`<sup>Required</sup> <a name="interval_millis" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.intervalMillis"></a>

```python
interval_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `timeout_millis`<sup>Required</sup> <a name="timeout_millis" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.timeoutMillis"></a>

```python
timeout_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unhealthy_threshold`<sup>Required</sup> <a name="unhealthy_threshold" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.unhealthyThreshold"></a>

```python
unhealthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpecListenerHealthCheck
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck">AppmeshVirtualGatewaySpecListenerHealthCheck</a>

---


### AppmeshVirtualGatewaySpecListenerList <a name="AppmeshVirtualGatewaySpecListenerList" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppmeshVirtualGatewaySpecListenerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener">AppmeshVirtualGatewaySpecListener</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppmeshVirtualGatewaySpecListener]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener">AppmeshVirtualGatewaySpecListener</a>]]

---


### AppmeshVirtualGatewaySpecListenerOutputReference <a name="AppmeshVirtualGatewaySpecListenerOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putConnectionPool">put_connection_pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putHealthCheck">put_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putPortMapping">put_port_mapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putTls">put_tls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.resetConnectionPool">reset_connection_pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.resetHealthCheck">reset_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.resetTls">reset_tls</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_connection_pool` <a name="put_connection_pool" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putConnectionPool"></a>

```python
def put_connection_pool(
  grpc: AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc = None,
  http: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp = None,
  http2: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 = None
) -> None
```

###### `grpc`<sup>Optional</sup> <a name="grpc" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putConnectionPool.parameter.grpc"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc">AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#grpc AppmeshVirtualGateway#grpc}

---

###### `http`<sup>Optional</sup> <a name="http" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putConnectionPool.parameter.http"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp</a>

http block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#http AppmeshVirtualGateway#http}

---

###### `http2`<sup>Optional</sup> <a name="http2" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putConnectionPool.parameter.http2"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2</a>

http2 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#http2 AppmeshVirtualGateway#http2}

---

##### `put_health_check` <a name="put_health_check" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putHealthCheck"></a>

```python
def put_health_check(
  healthy_threshold: typing.Union[int, float],
  interval_millis: typing.Union[int, float],
  protocol: str,
  timeout_millis: typing.Union[int, float],
  unhealthy_threshold: typing.Union[int, float],
  path: str = None,
  port: typing.Union[int, float] = None
) -> None
```

###### `healthy_threshold`<sup>Required</sup> <a name="healthy_threshold" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putHealthCheck.parameter.healthyThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#healthy_threshold AppmeshVirtualGateway#healthy_threshold}.

---

###### `interval_millis`<sup>Required</sup> <a name="interval_millis" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putHealthCheck.parameter.intervalMillis"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#interval_millis AppmeshVirtualGateway#interval_millis}.

---

###### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putHealthCheck.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#protocol AppmeshVirtualGateway#protocol}.

---

###### `timeout_millis`<sup>Required</sup> <a name="timeout_millis" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putHealthCheck.parameter.timeoutMillis"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#timeout_millis AppmeshVirtualGateway#timeout_millis}.

---

###### `unhealthy_threshold`<sup>Required</sup> <a name="unhealthy_threshold" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putHealthCheck.parameter.unhealthyThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#unhealthy_threshold AppmeshVirtualGateway#unhealthy_threshold}.

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putHealthCheck.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#path AppmeshVirtualGateway#path}.

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putHealthCheck.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#port AppmeshVirtualGateway#port}.

---

##### `put_port_mapping` <a name="put_port_mapping" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putPortMapping"></a>

```python
def put_port_mapping(
  port: typing.Union[int, float],
  protocol: str
) -> None
```

###### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putPortMapping.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#port AppmeshVirtualGateway#port}.

---

###### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putPortMapping.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#protocol AppmeshVirtualGateway#protocol}.

---

##### `put_tls` <a name="put_tls" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putTls"></a>

```python
def put_tls(
  certificate: AppmeshVirtualGatewaySpecListenerTlsCertificate,
  mode: str,
  validation: AppmeshVirtualGatewaySpecListenerTlsValidation = None
) -> None
```

###### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putTls.parameter.certificate"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate">AppmeshVirtualGatewaySpecListenerTlsCertificate</a>

certificate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate AppmeshVirtualGateway#certificate}

---

###### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putTls.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#mode AppmeshVirtualGateway#mode}.

---

###### `validation`<sup>Optional</sup> <a name="validation" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putTls.parameter.validation"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation">AppmeshVirtualGatewaySpecListenerTlsValidation</a>

validation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#validation AppmeshVirtualGateway#validation}

---

##### `reset_connection_pool` <a name="reset_connection_pool" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.resetConnectionPool"></a>

```python
def reset_connection_pool() -> None
```

##### `reset_health_check` <a name="reset_health_check" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.resetHealthCheck"></a>

```python
def reset_health_check() -> None
```

##### `reset_tls` <a name="reset_tls" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.resetTls"></a>

```python
def reset_tls() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.connectionPool">connection_pool</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference">AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference">AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.portMapping">port_mapping</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference">AppmeshVirtualGatewaySpecListenerPortMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.tls">tls</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference">AppmeshVirtualGatewaySpecListenerTlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.connectionPoolInput">connection_pool_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool">AppmeshVirtualGatewaySpecListenerConnectionPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.healthCheckInput">health_check_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck">AppmeshVirtualGatewaySpecListenerHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.portMappingInput">port_mapping_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping">AppmeshVirtualGatewaySpecListenerPortMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.tlsInput">tls_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls">AppmeshVirtualGatewaySpecListenerTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener">AppmeshVirtualGatewaySpecListener</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_pool`<sup>Required</sup> <a name="connection_pool" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.connectionPool"></a>

```python
connection_pool: AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference">AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference</a>

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.healthCheck"></a>

```python
health_check: AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference">AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference</a>

---

##### `port_mapping`<sup>Required</sup> <a name="port_mapping" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.portMapping"></a>

```python
port_mapping: AppmeshVirtualGatewaySpecListenerPortMappingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference">AppmeshVirtualGatewaySpecListenerPortMappingOutputReference</a>

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.tls"></a>

```python
tls: AppmeshVirtualGatewaySpecListenerTlsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference">AppmeshVirtualGatewaySpecListenerTlsOutputReference</a>

---

##### `connection_pool_input`<sup>Optional</sup> <a name="connection_pool_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.connectionPoolInput"></a>

```python
connection_pool_input: AppmeshVirtualGatewaySpecListenerConnectionPool
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool">AppmeshVirtualGatewaySpecListenerConnectionPool</a>

---

##### `health_check_input`<sup>Optional</sup> <a name="health_check_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.healthCheckInput"></a>

```python
health_check_input: AppmeshVirtualGatewaySpecListenerHealthCheck
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck">AppmeshVirtualGatewaySpecListenerHealthCheck</a>

---

##### `port_mapping_input`<sup>Optional</sup> <a name="port_mapping_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.portMappingInput"></a>

```python
port_mapping_input: AppmeshVirtualGatewaySpecListenerPortMapping
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping">AppmeshVirtualGatewaySpecListenerPortMapping</a>

---

##### `tls_input`<sup>Optional</sup> <a name="tls_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.tlsInput"></a>

```python
tls_input: AppmeshVirtualGatewaySpecListenerTls
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls">AppmeshVirtualGatewaySpecListenerTls</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AppmeshVirtualGatewaySpecListener, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener">AppmeshVirtualGatewaySpecListener</a>, cdktf.IResolvable]

---


### AppmeshVirtualGatewaySpecListenerPortMappingOutputReference <a name="AppmeshVirtualGatewaySpecListenerPortMappingOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping">AppmeshVirtualGatewaySpecListenerPortMapping</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpecListenerPortMapping
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping">AppmeshVirtualGatewaySpecListenerPortMapping</a>

---


### AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference <a name="AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.certificateArnInput">certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm">AppmeshVirtualGatewaySpecListenerTlsCertificateAcm</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_arn_input`<sup>Optional</sup> <a name="certificate_arn_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.certificateArnInput"></a>

```python
certificate_arn_input: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpecListenerTlsCertificateAcm
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm">AppmeshVirtualGatewaySpecListenerTlsCertificateAcm</a>

---


### AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference <a name="AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.certificateChainInput">certificate_chain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.certificateChain">certificate_chain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile">AppmeshVirtualGatewaySpecListenerTlsCertificateFile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_chain_input`<sup>Optional</sup> <a name="certificate_chain_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.certificateChainInput"></a>

```python
certificate_chain_input: str
```

- *Type:* str

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `certificate_chain`<sup>Required</sup> <a name="certificate_chain" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.certificateChain"></a>

```python
certificate_chain: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpecListenerTlsCertificateFile
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile">AppmeshVirtualGatewaySpecListenerTlsCertificateFile</a>

---


### AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference <a name="AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.putAcm">put_acm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.putFile">put_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.putSds">put_sds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.resetAcm">reset_acm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.resetFile">reset_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.resetSds">reset_sds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_acm` <a name="put_acm" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.putAcm"></a>

```python
def put_acm(
  certificate_arn: str
) -> None
```

###### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.putAcm.parameter.certificateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_arn AppmeshVirtualGateway#certificate_arn}.

---

##### `put_file` <a name="put_file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.putFile"></a>

```python
def put_file(
  certificate_chain: str,
  private_key: str
) -> None
```

###### `certificate_chain`<sup>Required</sup> <a name="certificate_chain" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.putFile.parameter.certificateChain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_chain AppmeshVirtualGateway#certificate_chain}.

---

###### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.putFile.parameter.privateKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#private_key AppmeshVirtualGateway#private_key}.

---

##### `put_sds` <a name="put_sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.putSds"></a>

```python
def put_sds(
  secret_name: str
) -> None
```

###### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.putSds.parameter.secretName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#secret_name AppmeshVirtualGateway#secret_name}.

---

##### `reset_acm` <a name="reset_acm" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.resetAcm"></a>

```python
def reset_acm() -> None
```

##### `reset_file` <a name="reset_file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.resetFile"></a>

```python
def reset_file() -> None
```

##### `reset_sds` <a name="reset_sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.resetSds"></a>

```python
def reset_sds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.acm">acm</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference">AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.file">file</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference">AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.sds">sds</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference">AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.acmInput">acm_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm">AppmeshVirtualGatewaySpecListenerTlsCertificateAcm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.fileInput">file_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile">AppmeshVirtualGatewaySpecListenerTlsCertificateFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.sdsInput">sds_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds">AppmeshVirtualGatewaySpecListenerTlsCertificateSds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate">AppmeshVirtualGatewaySpecListenerTlsCertificate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `acm`<sup>Required</sup> <a name="acm" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.acm"></a>

```python
acm: AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference">AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference</a>

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.file"></a>

```python
file: AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference">AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference</a>

---

##### `sds`<sup>Required</sup> <a name="sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.sds"></a>

```python
sds: AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference">AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference</a>

---

##### `acm_input`<sup>Optional</sup> <a name="acm_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.acmInput"></a>

```python
acm_input: AppmeshVirtualGatewaySpecListenerTlsCertificateAcm
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm">AppmeshVirtualGatewaySpecListenerTlsCertificateAcm</a>

---

##### `file_input`<sup>Optional</sup> <a name="file_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.fileInput"></a>

```python
file_input: AppmeshVirtualGatewaySpecListenerTlsCertificateFile
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile">AppmeshVirtualGatewaySpecListenerTlsCertificateFile</a>

---

##### `sds_input`<sup>Optional</sup> <a name="sds_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.sdsInput"></a>

```python
sds_input: AppmeshVirtualGatewaySpecListenerTlsCertificateSds
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds">AppmeshVirtualGatewaySpecListenerTlsCertificateSds</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpecListenerTlsCertificate
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate">AppmeshVirtualGatewaySpecListenerTlsCertificate</a>

---


### AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference <a name="AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds">AppmeshVirtualGatewaySpecListenerTlsCertificateSds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpecListenerTlsCertificateSds
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds">AppmeshVirtualGatewaySpecListenerTlsCertificateSds</a>

---


### AppmeshVirtualGatewaySpecListenerTlsOutputReference <a name="AppmeshVirtualGatewaySpecListenerTlsOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.putCertificate">put_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.putValidation">put_validation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.resetValidation">reset_validation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_certificate` <a name="put_certificate" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.putCertificate"></a>

```python
def put_certificate(
  acm: AppmeshVirtualGatewaySpecListenerTlsCertificateAcm = None,
  file: AppmeshVirtualGatewaySpecListenerTlsCertificateFile = None,
  sds: AppmeshVirtualGatewaySpecListenerTlsCertificateSds = None
) -> None
```

###### `acm`<sup>Optional</sup> <a name="acm" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.putCertificate.parameter.acm"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm">AppmeshVirtualGatewaySpecListenerTlsCertificateAcm</a>

acm block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#acm AppmeshVirtualGateway#acm}

---

###### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.putCertificate.parameter.file"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile">AppmeshVirtualGatewaySpecListenerTlsCertificateFile</a>

file block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#file AppmeshVirtualGateway#file}

---

###### `sds`<sup>Optional</sup> <a name="sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.putCertificate.parameter.sds"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds">AppmeshVirtualGatewaySpecListenerTlsCertificateSds</a>

sds block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#sds AppmeshVirtualGateway#sds}

---

##### `put_validation` <a name="put_validation" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.putValidation"></a>

```python
def put_validation(
  trust: AppmeshVirtualGatewaySpecListenerTlsValidationTrust,
  subject_alternative_names: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames = None
) -> None
```

###### `trust`<sup>Required</sup> <a name="trust" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.putValidation.parameter.trust"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust">AppmeshVirtualGatewaySpecListenerTlsValidationTrust</a>

trust block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#trust AppmeshVirtualGateway#trust}

---

###### `subject_alternative_names`<sup>Optional</sup> <a name="subject_alternative_names" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.putValidation.parameter.subjectAlternativeNames"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames</a>

subject_alternative_names block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#subject_alternative_names AppmeshVirtualGateway#subject_alternative_names}

---

##### `reset_validation` <a name="reset_validation" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.resetValidation"></a>

```python
def reset_validation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference">AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.validation">validation</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.certificateInput">certificate_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate">AppmeshVirtualGatewaySpecListenerTlsCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.validationInput">validation_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation">AppmeshVirtualGatewaySpecListenerTlsValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls">AppmeshVirtualGatewaySpecListenerTls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.certificate"></a>

```python
certificate: AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference">AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference</a>

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.validation"></a>

```python
validation: AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference</a>

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.certificateInput"></a>

```python
certificate_input: AppmeshVirtualGatewaySpecListenerTlsCertificate
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate">AppmeshVirtualGatewaySpecListenerTlsCertificate</a>

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `validation_input`<sup>Optional</sup> <a name="validation_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.validationInput"></a>

```python
validation_input: AppmeshVirtualGatewaySpecListenerTlsValidation
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation">AppmeshVirtualGatewaySpecListenerTlsValidation</a>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpecListenerTls
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls">AppmeshVirtualGatewaySpecListenerTls</a>

---


### AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference <a name="AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.putSubjectAlternativeNames">put_subject_alternative_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.putTrust">put_trust</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.resetSubjectAlternativeNames">reset_subject_alternative_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_subject_alternative_names` <a name="put_subject_alternative_names" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.putSubjectAlternativeNames"></a>

```python
def put_subject_alternative_names(
  match: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch
) -> None
```

###### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.putSubjectAlternativeNames.parameter.match"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#match AppmeshVirtualGateway#match}

---

##### `put_trust` <a name="put_trust" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.putTrust"></a>

```python
def put_trust(
  file: AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile = None,
  sds: AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds = None
) -> None
```

###### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.putTrust.parameter.file"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile">AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile</a>

file block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#file AppmeshVirtualGateway#file}

---

###### `sds`<sup>Optional</sup> <a name="sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.putTrust.parameter.sds"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds">AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds</a>

sds block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#sds AppmeshVirtualGateway#sds}

---

##### `reset_subject_alternative_names` <a name="reset_subject_alternative_names" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.resetSubjectAlternativeNames"></a>

```python
def reset_subject_alternative_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.subjectAlternativeNames">subject_alternative_names</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.trust">trust</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.subjectAlternativeNamesInput">subject_alternative_names_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.trustInput">trust_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust">AppmeshVirtualGatewaySpecListenerTlsValidationTrust</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation">AppmeshVirtualGatewaySpecListenerTlsValidation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subject_alternative_names`<sup>Required</sup> <a name="subject_alternative_names" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.subjectAlternativeNames"></a>

```python
subject_alternative_names: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference</a>

---

##### `trust`<sup>Required</sup> <a name="trust" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.trust"></a>

```python
trust: AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference</a>

---

##### `subject_alternative_names_input`<sup>Optional</sup> <a name="subject_alternative_names_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.subjectAlternativeNamesInput"></a>

```python
subject_alternative_names_input: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames</a>

---

##### `trust_input`<sup>Optional</sup> <a name="trust_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.trustInput"></a>

```python
trust_input: AppmeshVirtualGatewaySpecListenerTlsValidationTrust
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust">AppmeshVirtualGatewaySpecListenerTlsValidationTrust</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpecListenerTlsValidation
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation">AppmeshVirtualGatewaySpecListenerTlsValidation</a>

---


### AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference <a name="AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.exactInput">exact_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.exact">exact</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exact_input`<sup>Optional</sup> <a name="exact_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.exactInput"></a>

```python
exact_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.exact"></a>

```python
exact: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch</a>

---


### AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference <a name="AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.putMatch">put_match</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_match` <a name="put_match" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.putMatch"></a>

```python
def put_match(
  exact: typing.List[str]
) -> None
```

###### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.putMatch.parameter.exact"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#exact AppmeshVirtualGateway#exact}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.matchInput">match_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.match"></a>

```python
match: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference</a>

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.matchInput"></a>

```python
match_input: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames</a>

---


### AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference <a name="AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.certificateChainInput">certificate_chain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.certificateChain">certificate_chain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile">AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_chain_input`<sup>Optional</sup> <a name="certificate_chain_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.certificateChainInput"></a>

```python
certificate_chain_input: str
```

- *Type:* str

---

##### `certificate_chain`<sup>Required</sup> <a name="certificate_chain" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.certificateChain"></a>

```python
certificate_chain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile">AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile</a>

---


### AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference <a name="AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.putFile">put_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.putSds">put_sds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.resetFile">reset_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.resetSds">reset_sds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_file` <a name="put_file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.putFile"></a>

```python
def put_file(
  certificate_chain: str
) -> None
```

###### `certificate_chain`<sup>Required</sup> <a name="certificate_chain" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.putFile.parameter.certificateChain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_chain AppmeshVirtualGateway#certificate_chain}.

---

##### `put_sds` <a name="put_sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.putSds"></a>

```python
def put_sds(
  secret_name: str
) -> None
```

###### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.putSds.parameter.secretName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#secret_name AppmeshVirtualGateway#secret_name}.

---

##### `reset_file` <a name="reset_file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.resetFile"></a>

```python
def reset_file() -> None
```

##### `reset_sds` <a name="reset_sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.resetSds"></a>

```python
def reset_sds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.file">file</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.sds">sds</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.fileInput">file_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile">AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.sdsInput">sds_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds">AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust">AppmeshVirtualGatewaySpecListenerTlsValidationTrust</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.file"></a>

```python
file: AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference</a>

---

##### `sds`<sup>Required</sup> <a name="sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.sds"></a>

```python
sds: AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference</a>

---

##### `file_input`<sup>Optional</sup> <a name="file_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.fileInput"></a>

```python
file_input: AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile">AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile</a>

---

##### `sds_input`<sup>Optional</sup> <a name="sds_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.sdsInput"></a>

```python
sds_input: AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds">AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpecListenerTlsValidationTrust
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust">AppmeshVirtualGatewaySpecListenerTlsValidationTrust</a>

---


### AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference <a name="AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds">AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds">AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds</a>

---


### AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference <a name="AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile">AppmeshVirtualGatewaySpecLoggingAccessLogFile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpecLoggingAccessLogFile
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile">AppmeshVirtualGatewaySpecLoggingAccessLogFile</a>

---


### AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference <a name="AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.putFile">put_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.resetFile">reset_file</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_file` <a name="put_file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.putFile"></a>

```python
def put_file(
  path: str
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.putFile.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#path AppmeshVirtualGateway#path}.

---

##### `reset_file` <a name="reset_file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.resetFile"></a>

```python
def reset_file() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.file">file</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference">AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.fileInput">file_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile">AppmeshVirtualGatewaySpecLoggingAccessLogFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog">AppmeshVirtualGatewaySpecLoggingAccessLog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.file"></a>

```python
file: AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference">AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference</a>

---

##### `file_input`<sup>Optional</sup> <a name="file_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.fileInput"></a>

```python
file_input: AppmeshVirtualGatewaySpecLoggingAccessLogFile
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile">AppmeshVirtualGatewaySpecLoggingAccessLogFile</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpecLoggingAccessLog
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog">AppmeshVirtualGatewaySpecLoggingAccessLog</a>

---


### AppmeshVirtualGatewaySpecLoggingOutputReference <a name="AppmeshVirtualGatewaySpecLoggingOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.putAccessLog">put_access_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.resetAccessLog">reset_access_log</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_access_log` <a name="put_access_log" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.putAccessLog"></a>

```python
def put_access_log(
  file: AppmeshVirtualGatewaySpecLoggingAccessLogFile = None
) -> None
```

###### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.putAccessLog.parameter.file"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile">AppmeshVirtualGatewaySpecLoggingAccessLogFile</a>

file block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#file AppmeshVirtualGateway#file}

---

##### `reset_access_log` <a name="reset_access_log" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.resetAccessLog"></a>

```python
def reset_access_log() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.property.accessLog">access_log</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference">AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.property.accessLogInput">access_log_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog">AppmeshVirtualGatewaySpecLoggingAccessLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging">AppmeshVirtualGatewaySpecLogging</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_log`<sup>Required</sup> <a name="access_log" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.property.accessLog"></a>

```python
access_log: AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference">AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference</a>

---

##### `access_log_input`<sup>Optional</sup> <a name="access_log_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.property.accessLogInput"></a>

```python
access_log_input: AppmeshVirtualGatewaySpecLoggingAccessLog
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog">AppmeshVirtualGatewaySpecLoggingAccessLog</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpecLogging
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging">AppmeshVirtualGatewaySpecLogging</a>

---


### AppmeshVirtualGatewaySpecOutputReference <a name="AppmeshVirtualGatewaySpecOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_virtual_gateway

appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.putBackendDefaults">put_backend_defaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.putListener">put_listener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.putLogging">put_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.resetBackendDefaults">reset_backend_defaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.resetLogging">reset_logging</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_backend_defaults` <a name="put_backend_defaults" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.putBackendDefaults"></a>

```python
def put_backend_defaults(
  client_policy: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy = None
) -> None
```

###### `client_policy`<sup>Optional</sup> <a name="client_policy" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.putBackendDefaults.parameter.clientPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy</a>

client_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#client_policy AppmeshVirtualGateway#client_policy}

---

##### `put_listener` <a name="put_listener" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.putListener"></a>

```python
def put_listener(
  value: typing.Union[IResolvable, typing.List[AppmeshVirtualGatewaySpecListener]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.putListener.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener">AppmeshVirtualGatewaySpecListener</a>]]

---

##### `put_logging` <a name="put_logging" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.putLogging"></a>

```python
def put_logging(
  access_log: AppmeshVirtualGatewaySpecLoggingAccessLog = None
) -> None
```

###### `access_log`<sup>Optional</sup> <a name="access_log" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.putLogging.parameter.accessLog"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog">AppmeshVirtualGatewaySpecLoggingAccessLog</a>

access_log block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#access_log AppmeshVirtualGateway#access_log}

---

##### `reset_backend_defaults` <a name="reset_backend_defaults" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.resetBackendDefaults"></a>

```python
def reset_backend_defaults() -> None
```

##### `reset_logging` <a name="reset_logging" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.resetLogging"></a>

```python
def reset_logging() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.backendDefaults">backend_defaults</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.listener">listener</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList">AppmeshVirtualGatewaySpecListenerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference">AppmeshVirtualGatewaySpecLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.backendDefaultsInput">backend_defaults_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults">AppmeshVirtualGatewaySpecBackendDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.listenerInput">listener_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener">AppmeshVirtualGatewaySpecListener</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.loggingInput">logging_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging">AppmeshVirtualGatewaySpecLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec">AppmeshVirtualGatewaySpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backend_defaults`<sup>Required</sup> <a name="backend_defaults" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.backendDefaults"></a>

```python
backend_defaults: AppmeshVirtualGatewaySpecBackendDefaultsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsOutputReference</a>

---

##### `listener`<sup>Required</sup> <a name="listener" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.listener"></a>

```python
listener: AppmeshVirtualGatewaySpecListenerList
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList">AppmeshVirtualGatewaySpecListenerList</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.logging"></a>

```python
logging: AppmeshVirtualGatewaySpecLoggingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference">AppmeshVirtualGatewaySpecLoggingOutputReference</a>

---

##### `backend_defaults_input`<sup>Optional</sup> <a name="backend_defaults_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.backendDefaultsInput"></a>

```python
backend_defaults_input: AppmeshVirtualGatewaySpecBackendDefaults
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults">AppmeshVirtualGatewaySpecBackendDefaults</a>

---

##### `listener_input`<sup>Optional</sup> <a name="listener_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.listenerInput"></a>

```python
listener_input: typing.Union[IResolvable, typing.List[AppmeshVirtualGatewaySpecListener]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener">AppmeshVirtualGatewaySpecListener</a>]]

---

##### `logging_input`<sup>Optional</sup> <a name="logging_input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.loggingInput"></a>

```python
logging_input: AppmeshVirtualGatewaySpecLogging
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging">AppmeshVirtualGatewaySpecLogging</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshVirtualGatewaySpec
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec">AppmeshVirtualGatewaySpec</a>

---



