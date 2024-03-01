# `lakeformationResource` Submodule <a name="`lakeformationResource` Submodule" id="@cdktf/provider-aws.lakeformationResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationResource <a name="LakeformationResource" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/lakeformation_resource aws_lakeformation_resource}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource

lakeformationResource.LakeformationResource(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  arn: str,
  hybrid_access_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  role_arn: str = None,
  use_service_linked_role: typing.Union[bool, IResolvable] = None,
  with_federation: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/lakeformation_resource#arn LakeformationResource#arn}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.hybridAccessEnabled">hybrid_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/lakeformation_resource#hybrid_access_enabled LakeformationResource#hybrid_access_enabled}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/lakeformation_resource#id LakeformationResource#id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/lakeformation_resource#role_arn LakeformationResource#role_arn}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.useServiceLinkedRole">use_service_linked_role</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/lakeformation_resource#use_service_linked_role LakeformationResource#use_service_linked_role}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.withFederation">with_federation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/lakeformation_resource#with_federation LakeformationResource#with_federation}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.arn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/lakeformation_resource#arn LakeformationResource#arn}.

---

##### `hybrid_access_enabled`<sup>Optional</sup> <a name="hybrid_access_enabled" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.hybridAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/lakeformation_resource#hybrid_access_enabled LakeformationResource#hybrid_access_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/lakeformation_resource#id LakeformationResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/lakeformation_resource#role_arn LakeformationResource#role_arn}.

---

##### `use_service_linked_role`<sup>Optional</sup> <a name="use_service_linked_role" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.useServiceLinkedRole"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/lakeformation_resource#use_service_linked_role LakeformationResource#use_service_linked_role}.

---

##### `with_federation`<sup>Optional</sup> <a name="with_federation" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.withFederation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/lakeformation_resource#with_federation LakeformationResource#with_federation}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.resetHybridAccessEnabled">reset_hybrid_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.resetUseServiceLinkedRole">reset_use_service_linked_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.resetWithFederation">reset_with_federation</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_hybrid_access_enabled` <a name="reset_hybrid_access_enabled" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.resetHybridAccessEnabled"></a>

```python
def reset_hybrid_access_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_use_service_linked_role` <a name="reset_use_service_linked_role" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.resetUseServiceLinkedRole"></a>

```python
def reset_use_service_linked_role() -> None
```

##### `reset_with_federation` <a name="reset_with_federation" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.resetWithFederation"></a>

```python
def reset_with_federation() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LakeformationResource resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource

lakeformationResource.LakeformationResource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource

lakeformationResource.LakeformationResource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource

lakeformationResource.LakeformationResource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource

lakeformationResource.LakeformationResource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LakeformationResource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LakeformationResource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LakeformationResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/lakeformation_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LakeformationResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.hybridAccessEnabledInput">hybrid_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.useServiceLinkedRoleInput">use_service_linked_role_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.withFederationInput">with_federation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.hybridAccessEnabled">hybrid_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.useServiceLinkedRole">use_service_linked_role</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.withFederation">with_federation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `hybrid_access_enabled_input`<sup>Optional</sup> <a name="hybrid_access_enabled_input" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.hybridAccessEnabledInput"></a>

```python
hybrid_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `use_service_linked_role_input`<sup>Optional</sup> <a name="use_service_linked_role_input" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.useServiceLinkedRoleInput"></a>

```python
use_service_linked_role_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `with_federation_input`<sup>Optional</sup> <a name="with_federation_input" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.withFederationInput"></a>

```python
with_federation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `hybrid_access_enabled`<sup>Required</sup> <a name="hybrid_access_enabled" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.hybridAccessEnabled"></a>

```python
hybrid_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `use_service_linked_role`<sup>Required</sup> <a name="use_service_linked_role" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.useServiceLinkedRole"></a>

```python
use_service_linked_role: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `with_federation`<sup>Required</sup> <a name="with_federation" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.withFederation"></a>

```python
with_federation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationResourceConfig <a name="LakeformationResourceConfig" id="@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource

lakeformationResource.LakeformationResourceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  arn: str,
  hybrid_access_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  role_arn: str = None,
  use_service_linked_role: typing.Union[bool, IResolvable] = None,
  with_federation: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/lakeformation_resource#arn LakeformationResource#arn}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.hybridAccessEnabled">hybrid_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/lakeformation_resource#hybrid_access_enabled LakeformationResource#hybrid_access_enabled}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/lakeformation_resource#id LakeformationResource#id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/lakeformation_resource#role_arn LakeformationResource#role_arn}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.useServiceLinkedRole">use_service_linked_role</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/lakeformation_resource#use_service_linked_role LakeformationResource#use_service_linked_role}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.withFederation">with_federation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/lakeformation_resource#with_federation LakeformationResource#with_federation}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/lakeformation_resource#arn LakeformationResource#arn}.

---

##### `hybrid_access_enabled`<sup>Optional</sup> <a name="hybrid_access_enabled" id="@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.hybridAccessEnabled"></a>

```python
hybrid_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/lakeformation_resource#hybrid_access_enabled LakeformationResource#hybrid_access_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/lakeformation_resource#id LakeformationResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/lakeformation_resource#role_arn LakeformationResource#role_arn}.

---

##### `use_service_linked_role`<sup>Optional</sup> <a name="use_service_linked_role" id="@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.useServiceLinkedRole"></a>

```python
use_service_linked_role: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/lakeformation_resource#use_service_linked_role LakeformationResource#use_service_linked_role}.

---

##### `with_federation`<sup>Optional</sup> <a name="with_federation" id="@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.withFederation"></a>

```python
with_federation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/lakeformation_resource#with_federation LakeformationResource#with_federation}.

---



