# `dataAwsAppmeshGatewayRoute` Submodule <a name="`dataAwsAppmeshGatewayRoute` Submodule" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAppmeshGatewayRoute <a name="DataAwsAppmeshGatewayRoute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/appmesh_gateway_route aws_appmesh_gateway_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute(
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
  virtual_gateway_name: str,
  id: str = None,
  mesh_owner: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.Initializer.parameter.meshName">mesh_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/appmesh_gateway_route#mesh_name DataAwsAppmeshGatewayRoute#mesh_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/appmesh_gateway_route#name DataAwsAppmeshGatewayRoute#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.Initializer.parameter.virtualGatewayName">virtual_gateway_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/appmesh_gateway_route#virtual_gateway_name DataAwsAppmeshGatewayRoute#virtual_gateway_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/appmesh_gateway_route#id DataAwsAppmeshGatewayRoute#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.Initializer.parameter.meshOwner">mesh_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/appmesh_gateway_route#mesh_owner DataAwsAppmeshGatewayRoute#mesh_owner}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/appmesh_gateway_route#tags DataAwsAppmeshGatewayRoute#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mesh_name`<sup>Required</sup> <a name="mesh_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.Initializer.parameter.meshName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/appmesh_gateway_route#mesh_name DataAwsAppmeshGatewayRoute#mesh_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/appmesh_gateway_route#name DataAwsAppmeshGatewayRoute#name}.

---

##### `virtual_gateway_name`<sup>Required</sup> <a name="virtual_gateway_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.Initializer.parameter.virtualGatewayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/appmesh_gateway_route#virtual_gateway_name DataAwsAppmeshGatewayRoute#virtual_gateway_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/appmesh_gateway_route#id DataAwsAppmeshGatewayRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mesh_owner`<sup>Optional</sup> <a name="mesh_owner" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.Initializer.parameter.meshOwner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/appmesh_gateway_route#mesh_owner DataAwsAppmeshGatewayRoute#mesh_owner}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/appmesh_gateway_route#tags DataAwsAppmeshGatewayRoute#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.resetMeshOwner">reset_mesh_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mesh_owner` <a name="reset_mesh_owner" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.resetMeshOwner"></a>

```python
def reset_mesh_owner() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsAppmeshGatewayRoute resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsAppmeshGatewayRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsAppmeshGatewayRoute to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsAppmeshGatewayRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/appmesh_gateway_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsAppmeshGatewayRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.createdDate">created_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.lastUpdatedDate">last_updated_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.resourceOwner">resource_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecList">DataAwsAppmeshGatewayRouteSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.meshNameInput">mesh_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.meshOwnerInput">mesh_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.virtualGatewayNameInput">virtual_gateway_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.meshName">mesh_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.meshOwner">mesh_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.virtualGatewayName">virtual_gateway_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_date`<sup>Required</sup> <a name="created_date" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.createdDate"></a>

```python
created_date: str
```

- *Type:* str

---

##### `last_updated_date`<sup>Required</sup> <a name="last_updated_date" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.lastUpdatedDate"></a>

```python
last_updated_date: str
```

- *Type:* str

---

##### `resource_owner`<sup>Required</sup> <a name="resource_owner" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.resourceOwner"></a>

```python
resource_owner: str
```

- *Type:* str

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.spec"></a>

```python
spec: DataAwsAppmeshGatewayRouteSpecList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecList">DataAwsAppmeshGatewayRouteSpecList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mesh_name_input`<sup>Optional</sup> <a name="mesh_name_input" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.meshNameInput"></a>

```python
mesh_name_input: str
```

- *Type:* str

---

##### `mesh_owner_input`<sup>Optional</sup> <a name="mesh_owner_input" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.meshOwnerInput"></a>

```python
mesh_owner_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `virtual_gateway_name_input`<sup>Optional</sup> <a name="virtual_gateway_name_input" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.virtualGatewayNameInput"></a>

```python
virtual_gateway_name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mesh_name`<sup>Required</sup> <a name="mesh_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.meshName"></a>

```python
mesh_name: str
```

- *Type:* str

---

##### `mesh_owner`<sup>Required</sup> <a name="mesh_owner" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.meshOwner"></a>

```python
mesh_owner: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `virtual_gateway_name`<sup>Required</sup> <a name="virtual_gateway_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.virtualGatewayName"></a>

```python
virtual_gateway_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRoute.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAppmeshGatewayRouteConfig <a name="DataAwsAppmeshGatewayRouteConfig" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  mesh_name: str,
  name: str,
  virtual_gateway_name: str,
  id: str = None,
  mesh_owner: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteConfig.property.meshName">mesh_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/appmesh_gateway_route#mesh_name DataAwsAppmeshGatewayRoute#mesh_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/appmesh_gateway_route#name DataAwsAppmeshGatewayRoute#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteConfig.property.virtualGatewayName">virtual_gateway_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/appmesh_gateway_route#virtual_gateway_name DataAwsAppmeshGatewayRoute#virtual_gateway_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/appmesh_gateway_route#id DataAwsAppmeshGatewayRoute#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteConfig.property.meshOwner">mesh_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/appmesh_gateway_route#mesh_owner DataAwsAppmeshGatewayRoute#mesh_owner}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/appmesh_gateway_route#tags DataAwsAppmeshGatewayRoute#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mesh_name`<sup>Required</sup> <a name="mesh_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteConfig.property.meshName"></a>

```python
mesh_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/appmesh_gateway_route#mesh_name DataAwsAppmeshGatewayRoute#mesh_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/appmesh_gateway_route#name DataAwsAppmeshGatewayRoute#name}.

---

##### `virtual_gateway_name`<sup>Required</sup> <a name="virtual_gateway_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteConfig.property.virtualGatewayName"></a>

```python
virtual_gateway_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/appmesh_gateway_route#virtual_gateway_name DataAwsAppmeshGatewayRoute#virtual_gateway_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/appmesh_gateway_route#id DataAwsAppmeshGatewayRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mesh_owner`<sup>Optional</sup> <a name="mesh_owner" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteConfig.property.meshOwner"></a>

```python
mesh_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/appmesh_gateway_route#mesh_owner DataAwsAppmeshGatewayRoute#mesh_owner}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/appmesh_gateway_route#tags DataAwsAppmeshGatewayRoute#tags}.

---

### DataAwsAppmeshGatewayRouteSpec <a name="DataAwsAppmeshGatewayRouteSpec" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpec()
```


### DataAwsAppmeshGatewayRouteSpecGrpcRoute <a name="DataAwsAppmeshGatewayRouteSpecGrpcRoute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRoute()
```


### DataAwsAppmeshGatewayRouteSpecGrpcRouteAction <a name="DataAwsAppmeshGatewayRouteSpecGrpcRouteAction" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteAction()
```


### DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTarget <a name="DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTarget" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTarget()
```


### DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService <a name="DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService()
```


### DataAwsAppmeshGatewayRouteSpecGrpcRouteMatch <a name="DataAwsAppmeshGatewayRouteSpecGrpcRouteMatch" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatch()
```


### DataAwsAppmeshGatewayRouteSpecHttp2Route <a name="DataAwsAppmeshGatewayRouteSpecHttp2Route" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2Route"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2Route.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2Route()
```


### DataAwsAppmeshGatewayRouteSpecHttp2RouteAction <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteAction" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteAction()
```


### DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewrite <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewrite" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewrite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewrite.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewrite()
```


### DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname()
```


### DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePath <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePath" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePath.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePath()
```


### DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix()
```


### DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTarget <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTarget" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTarget()
```


### DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService()
```


### DataAwsAppmeshGatewayRouteSpecHttp2RouteMatch <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteMatch" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatch()
```


### DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeader <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeader" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeader()
```


### DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch()
```


### DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange()
```


### DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostname <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostname" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostname"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostname.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostname()
```


### DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPath <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPath" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPath.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPath()
```


### DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameter <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameter" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameter()
```


### DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch()
```


### DataAwsAppmeshGatewayRouteSpecHttpRoute <a name="DataAwsAppmeshGatewayRouteSpecHttpRoute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRoute()
```


### DataAwsAppmeshGatewayRouteSpecHttpRouteAction <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteAction" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteAction()
```


### DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewrite <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewrite" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewrite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewrite.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewrite()
```


### DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostname <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostname" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostname"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostname.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostname()
```


### DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePath <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePath" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePath.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePath()
```


### DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefix <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefix" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefix"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefix.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefix()
```


### DataAwsAppmeshGatewayRouteSpecHttpRouteActionTarget <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteActionTarget" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTarget()
```


### DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService()
```


### DataAwsAppmeshGatewayRouteSpecHttpRouteMatch <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteMatch" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatch()
```


### DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeader <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeader" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeader()
```


### DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch()
```


### DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange()
```


### DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostname <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostname" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostname"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostname.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostname()
```


### DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPath <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPath" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPath.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPath()
```


### DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameter <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameter" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameter()
```


### DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList <a name="DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference <a name="DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList">DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteAction">DataAwsAppmeshGatewayRouteSpecGrpcRouteAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.target"></a>

```python
target: DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList">DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecGrpcRouteAction
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteAction">DataAwsAppmeshGatewayRouteSpecGrpcRouteAction</a>

---


### DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList <a name="DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference <a name="DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.virtualService">virtual_service</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList">DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTarget">DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `virtual_service`<sup>Required</sup> <a name="virtual_service" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.virtualService"></a>

```python
virtual_service: DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList">DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTarget
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTarget">DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTarget</a>

---


### DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList <a name="DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference <a name="DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.virtualServiceName">virtual_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService">DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `virtual_service_name`<sup>Required</sup> <a name="virtual_service_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.virtualServiceName"></a>

```python
virtual_service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService">DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService</a>

---


### DataAwsAppmeshGatewayRouteSpecGrpcRouteList <a name="DataAwsAppmeshGatewayRouteSpecGrpcRouteList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList <a name="DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference <a name="DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatch">DataAwsAppmeshGatewayRouteSpecGrpcRouteMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecGrpcRouteMatch
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatch">DataAwsAppmeshGatewayRouteSpecGrpcRouteMatch</a>

---


### DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference <a name="DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList">DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList">DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRoute">DataAwsAppmeshGatewayRouteSpecGrpcRoute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.property.action"></a>

```python
action: DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList">DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.property.match"></a>

```python
match: DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList">DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecGrpcRoute
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRoute">DataAwsAppmeshGatewayRouteSpecGrpcRoute</a>

---


### DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.rewrite">rewrite</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList">DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList">DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteAction">DataAwsAppmeshGatewayRouteSpecHttp2RouteAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rewrite`<sup>Required</sup> <a name="rewrite" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.rewrite"></a>

```python
rewrite: DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList">DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.target"></a>

```python
target: DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList">DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecHttp2RouteAction
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteAction">DataAwsAppmeshGatewayRouteSpecHttp2RouteAction</a>

---


### DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.defaultTargetHostname">default_target_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname">DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_target_hostname`<sup>Required</sup> <a name="default_target_hostname" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.defaultTargetHostname"></a>

```python
default_target_hostname: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname">DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname</a>

---


### DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.hostname">hostname</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList">DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.path">path</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList">DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.prefix">prefix</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList">DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewrite">DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewrite</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.hostname"></a>

```python
hostname: DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList">DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList</a>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.path"></a>

```python
path: DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList">DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList</a>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.prefix"></a>

```python
prefix: DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList">DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewrite
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewrite">DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewrite</a>

---


### DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.property.exact">exact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePath">DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePath</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.property.exact"></a>

```python
exact: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePath
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePath">DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePath</a>

---


### DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.defaultPrefix">default_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix">DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_prefix`<sup>Required</sup> <a name="default_prefix" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.defaultPrefix"></a>

```python
default_prefix: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix">DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix</a>

---


### DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.virtualService">virtual_service</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList">DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTarget">DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `virtual_service`<sup>Required</sup> <a name="virtual_service" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.virtualService"></a>

```python
virtual_service: DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList">DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTarget
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTarget">DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTarget</a>

---


### DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.virtualServiceName">virtual_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService">DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `virtual_service_name`<sup>Required</sup> <a name="virtual_service_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.virtualServiceName"></a>

```python
virtual_service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService">DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService</a>

---


### DataAwsAppmeshGatewayRouteSpecHttp2RouteList <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.exact">exact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList">DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.suffix">suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch">DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.exact"></a>

```python
exact: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.range"></a>

```python
range: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList">DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList</a>

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch">DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch</a>

---


### DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.end">end</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.start">start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange">DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.end"></a>

```python
end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.start"></a>

```python
start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange">DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange</a>

---


### DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.property.invert">invert</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList">DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeader">DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeader</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `invert`<sup>Required</sup> <a name="invert" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.property.invert"></a>

```python
invert: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.property.match"></a>

```python
match: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList">DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeader
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeader">DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeader</a>

---


### DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.exact">exact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.suffix">suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostname">DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostname</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.exact"></a>

```python
exact: str
```

- *Type:* str

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostname
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostname">DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostname</a>

---


### DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList">DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.hostname">hostname</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList">DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.path">path</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList">DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.queryParameter">query_parameter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList">DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatch">DataAwsAppmeshGatewayRouteSpecHttp2RouteMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.header"></a>

```python
header: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList">DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.hostname"></a>

```python
hostname: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList">DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList</a>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.path"></a>

```python
path: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList">DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `query_parameter`<sup>Required</sup> <a name="query_parameter" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.queryParameter"></a>

```python
query_parameter: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList">DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatch
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatch">DataAwsAppmeshGatewayRouteSpecHttp2RouteMatch</a>

---


### DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.property.exact">exact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPath">DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPath</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.property.exact"></a>

```python
exact: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPath
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPath">DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPath</a>

---


### DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.property.exact">exact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch">DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.property.exact"></a>

```python
exact: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch">DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch</a>

---


### DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList">DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameter">DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.property.match"></a>

```python
match: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList">DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameter
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameter">DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameter</a>

---


### DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference <a name="DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList">DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList">DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2Route">DataAwsAppmeshGatewayRouteSpecHttp2Route</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.property.action"></a>

```python
action: DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList">DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.property.match"></a>

```python
match: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList">DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecHttp2Route
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2Route">DataAwsAppmeshGatewayRouteSpecHttp2Route</a>

---


### DataAwsAppmeshGatewayRouteSpecHttpRouteActionList <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteActionList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.rewrite">rewrite</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList">DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList">DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteAction">DataAwsAppmeshGatewayRouteSpecHttpRouteAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rewrite`<sup>Required</sup> <a name="rewrite" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.rewrite"></a>

```python
rewrite: DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList">DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.target"></a>

```python
target: DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList">DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecHttpRouteAction
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteAction">DataAwsAppmeshGatewayRouteSpecHttpRouteAction</a>

---


### DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.defaultTargetHostname">default_target_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostname">DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostname</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_target_hostname`<sup>Required</sup> <a name="default_target_hostname" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.defaultTargetHostname"></a>

```python
default_target_hostname: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostname
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostname">DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostname</a>

---


### DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.hostname">hostname</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList">DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.path">path</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList">DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.prefix">prefix</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList">DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewrite">DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewrite</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.hostname"></a>

```python
hostname: DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList">DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList</a>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.path"></a>

```python
path: DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList">DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList</a>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.prefix"></a>

```python
prefix: DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList">DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewrite
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewrite">DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewrite</a>

---


### DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.property.exact">exact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePath">DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePath</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.property.exact"></a>

```python
exact: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePath
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePath">DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePath</a>

---


### DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.defaultPrefix">default_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefix">DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefix</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_prefix`<sup>Required</sup> <a name="default_prefix" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.defaultPrefix"></a>

```python
default_prefix: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefix
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefix">DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefix</a>

---


### DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.virtualService">virtual_service</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList">DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTarget">DataAwsAppmeshGatewayRouteSpecHttpRouteActionTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `virtual_service`<sup>Required</sup> <a name="virtual_service" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.virtualService"></a>

```python
virtual_service: DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList">DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecHttpRouteActionTarget
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTarget">DataAwsAppmeshGatewayRouteSpecHttpRouteActionTarget</a>

---


### DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.virtualServiceName">virtual_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService">DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `virtual_service_name`<sup>Required</sup> <a name="virtual_service_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.virtualServiceName"></a>

```python
virtual_service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService">DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService</a>

---


### DataAwsAppmeshGatewayRouteSpecHttpRouteList <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.exact">exact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList">DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.suffix">suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch">DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.exact"></a>

```python
exact: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.range"></a>

```python
range: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList">DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList</a>

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch">DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch</a>

---


### DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.end">end</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.start">start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange">DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.end"></a>

```python
end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.start"></a>

```python
start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange">DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange</a>

---


### DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.property.invert">invert</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList">DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeader">DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeader</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `invert`<sup>Required</sup> <a name="invert" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.property.invert"></a>

```python
invert: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.property.match"></a>

```python
match: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList">DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeader
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeader">DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeader</a>

---


### DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.exact">exact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.suffix">suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostname">DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostname</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.exact"></a>

```python
exact: str
```

- *Type:* str

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostname
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostname">DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostname</a>

---


### DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList">DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.hostname">hostname</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList">DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.path">path</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList">DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.queryParameter">query_parameter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList">DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatch">DataAwsAppmeshGatewayRouteSpecHttpRouteMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.header"></a>

```python
header: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList">DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.hostname"></a>

```python
hostname: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList">DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList</a>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.path"></a>

```python
path: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList">DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `query_parameter`<sup>Required</sup> <a name="query_parameter" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.queryParameter"></a>

```python
query_parameter: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList">DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecHttpRouteMatch
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatch">DataAwsAppmeshGatewayRouteSpecHttpRouteMatch</a>

---


### DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.property.exact">exact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPath">DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPath</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.property.exact"></a>

```python
exact: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPath
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPath">DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPath</a>

---


### DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.property.exact">exact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch">DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.property.exact"></a>

```python
exact: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch">DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch</a>

---


### DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList">DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameter">DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.property.match"></a>

```python
match: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList">DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameter
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameter">DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameter</a>

---


### DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference <a name="DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionList">DataAwsAppmeshGatewayRouteSpecHttpRouteActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList">DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRoute">DataAwsAppmeshGatewayRouteSpecHttpRoute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.property.action"></a>

```python
action: DataAwsAppmeshGatewayRouteSpecHttpRouteActionList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteActionList">DataAwsAppmeshGatewayRouteSpecHttpRouteActionList</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.property.match"></a>

```python
match: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList">DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpecHttpRoute
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRoute">DataAwsAppmeshGatewayRouteSpecHttpRoute</a>

---


### DataAwsAppmeshGatewayRouteSpecList <a name="DataAwsAppmeshGatewayRouteSpecList" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppmeshGatewayRouteSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppmeshGatewayRouteSpecOutputReference <a name="DataAwsAppmeshGatewayRouteSpecOutputReference" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appmesh_gateway_route

dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.property.grpcRoute">grpc_route</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteList">DataAwsAppmeshGatewayRouteSpecGrpcRouteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.property.http2Route">http2_route</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteList">DataAwsAppmeshGatewayRouteSpecHttp2RouteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.property.httpRoute">http_route</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteList">DataAwsAppmeshGatewayRouteSpecHttpRouteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpec">DataAwsAppmeshGatewayRouteSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `grpc_route`<sup>Required</sup> <a name="grpc_route" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.property.grpcRoute"></a>

```python
grpc_route: DataAwsAppmeshGatewayRouteSpecGrpcRouteList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecGrpcRouteList">DataAwsAppmeshGatewayRouteSpecGrpcRouteList</a>

---

##### `http2_route`<sup>Required</sup> <a name="http2_route" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.property.http2Route"></a>

```python
http2_route: DataAwsAppmeshGatewayRouteSpecHttp2RouteList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttp2RouteList">DataAwsAppmeshGatewayRouteSpecHttp2RouteList</a>

---

##### `http_route`<sup>Required</sup> <a name="http_route" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.property.httpRoute"></a>

```python
http_route: DataAwsAppmeshGatewayRouteSpecHttpRouteList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecHttpRouteList">DataAwsAppmeshGatewayRouteSpecHttpRouteList</a>

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpecOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppmeshGatewayRouteSpec
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppmeshGatewayRoute.DataAwsAppmeshGatewayRouteSpec">DataAwsAppmeshGatewayRouteSpec</a>

---



