# `route53VpcAssociationAuthorization` Submodule <a name="`route53VpcAssociationAuthorization` Submodule" id="@cdktf/provider-aws.route53VpcAssociationAuthorization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53VpcAssociationAuthorization <a name="Route53VpcAssociationAuthorization" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/route53_vpc_association_authorization aws_route53_vpc_association_authorization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_vpc_association_authorization

route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  vpc_id: str,
  zone_id: str,
  id: str = None,
  timeouts: Route53VpcAssociationAuthorizationTimeouts = None,
  vpc_region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/route53_vpc_association_authorization#vpc_id Route53VpcAssociationAuthorization#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/route53_vpc_association_authorization#zone_id Route53VpcAssociationAuthorization#zone_id}. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/route53_vpc_association_authorization#id Route53VpcAssociationAuthorization#id}. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeouts">Route53VpcAssociationAuthorizationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.vpcRegion">vpc_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/route53_vpc_association_authorization#vpc_region Route53VpcAssociationAuthorization#vpc_region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/route53_vpc_association_authorization#vpc_id Route53VpcAssociationAuthorization#vpc_id}.

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.zoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/route53_vpc_association_authorization#zone_id Route53VpcAssociationAuthorization#zone_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/route53_vpc_association_authorization#id Route53VpcAssociationAuthorization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeouts">Route53VpcAssociationAuthorizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/route53_vpc_association_authorization#timeouts Route53VpcAssociationAuthorization#timeouts}

---

##### `vpc_region`<sup>Optional</sup> <a name="vpc_region" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.vpcRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/route53_vpc_association_authorization#vpc_region Route53VpcAssociationAuthorization#vpc_region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.resetVpcRegion">reset_vpc_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/route53_vpc_association_authorization#create Route53VpcAssociationAuthorization#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/route53_vpc_association_authorization#delete Route53VpcAssociationAuthorization#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/route53_vpc_association_authorization#read Route53VpcAssociationAuthorization#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vpc_region` <a name="reset_vpc_region" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.resetVpcRegion"></a>

```python
def reset_vpc_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Route53VpcAssociationAuthorization resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import route53_vpc_association_authorization

route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import route53_vpc_association_authorization

route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import route53_vpc_association_authorization

route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import route53_vpc_association_authorization

route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Route53VpcAssociationAuthorization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Route53VpcAssociationAuthorization to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Route53VpcAssociationAuthorization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/route53_vpc_association_authorization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Route53VpcAssociationAuthorization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference">Route53VpcAssociationAuthorizationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeouts">Route53VpcAssociationAuthorizationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.vpcRegionInput">vpc_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.vpcRegion">vpc_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.timeouts"></a>

```python
timeouts: Route53VpcAssociationAuthorizationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference">Route53VpcAssociationAuthorizationTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, Route53VpcAssociationAuthorizationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeouts">Route53VpcAssociationAuthorizationTimeouts</a>]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `vpc_region_input`<sup>Optional</sup> <a name="vpc_region_input" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.vpcRegionInput"></a>

```python
vpc_region_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `vpc_region`<sup>Required</sup> <a name="vpc_region" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.vpcRegion"></a>

```python
vpc_region: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Route53VpcAssociationAuthorizationConfig <a name="Route53VpcAssociationAuthorizationConfig" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_vpc_association_authorization

route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  vpc_id: str,
  zone_id: str,
  id: str = None,
  timeouts: Route53VpcAssociationAuthorizationTimeouts = None,
  vpc_region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/route53_vpc_association_authorization#vpc_id Route53VpcAssociationAuthorization#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/route53_vpc_association_authorization#zone_id Route53VpcAssociationAuthorization#zone_id}. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/route53_vpc_association_authorization#id Route53VpcAssociationAuthorization#id}. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeouts">Route53VpcAssociationAuthorizationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.vpcRegion">vpc_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/route53_vpc_association_authorization#vpc_region Route53VpcAssociationAuthorization#vpc_region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/route53_vpc_association_authorization#vpc_id Route53VpcAssociationAuthorization#vpc_id}.

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/route53_vpc_association_authorization#zone_id Route53VpcAssociationAuthorization#zone_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/route53_vpc_association_authorization#id Route53VpcAssociationAuthorization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.timeouts"></a>

```python
timeouts: Route53VpcAssociationAuthorizationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeouts">Route53VpcAssociationAuthorizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/route53_vpc_association_authorization#timeouts Route53VpcAssociationAuthorization#timeouts}

---

##### `vpc_region`<sup>Optional</sup> <a name="vpc_region" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.vpcRegion"></a>

```python
vpc_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/route53_vpc_association_authorization#vpc_region Route53VpcAssociationAuthorization#vpc_region}.

---

### Route53VpcAssociationAuthorizationTimeouts <a name="Route53VpcAssociationAuthorizationTimeouts" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_vpc_association_authorization

route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/route53_vpc_association_authorization#create Route53VpcAssociationAuthorization#create}. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/route53_vpc_association_authorization#delete Route53VpcAssociationAuthorization#delete}. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/route53_vpc_association_authorization#read Route53VpcAssociationAuthorization#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/route53_vpc_association_authorization#create Route53VpcAssociationAuthorization#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/route53_vpc_association_authorization#delete Route53VpcAssociationAuthorization#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/route53_vpc_association_authorization#read Route53VpcAssociationAuthorization#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53VpcAssociationAuthorizationTimeoutsOutputReference <a name="Route53VpcAssociationAuthorizationTimeoutsOutputReference" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_vpc_association_authorization

route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeouts">Route53VpcAssociationAuthorizationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Route53VpcAssociationAuthorizationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationTimeouts">Route53VpcAssociationAuthorizationTimeouts</a>]

---



