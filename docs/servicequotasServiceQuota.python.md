# `servicequotasServiceQuota` Submodule <a name="`servicequotasServiceQuota` Submodule" id="@cdktf/provider-aws.servicequotasServiceQuota"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicequotasServiceQuota <a name="ServicequotasServiceQuota" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/servicequotas_service_quota aws_servicequotas_service_quota}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicequotas_service_quota

servicequotasServiceQuota.ServicequotasServiceQuota(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  quota_code: str,
  service_code: str,
  value: typing.Union[int, float],
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.quotaCode">quota_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/servicequotas_service_quota#quota_code ServicequotasServiceQuota#quota_code}. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.serviceCode">service_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/servicequotas_service_quota#service_code ServicequotasServiceQuota#service_code}. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/servicequotas_service_quota#value ServicequotasServiceQuota#value}. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/servicequotas_service_quota#id ServicequotasServiceQuota#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `quota_code`<sup>Required</sup> <a name="quota_code" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.quotaCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/servicequotas_service_quota#quota_code ServicequotasServiceQuota#quota_code}.

---

##### `service_code`<sup>Required</sup> <a name="service_code" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.serviceCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/servicequotas_service_quota#service_code ServicequotasServiceQuota#service_code}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/servicequotas_service_quota#value ServicequotasServiceQuota#value}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/servicequotas_service_quota#id ServicequotasServiceQuota#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ServicequotasServiceQuota resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import servicequotas_service_quota

servicequotasServiceQuota.ServicequotasServiceQuota.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import servicequotas_service_quota

servicequotasServiceQuota.ServicequotasServiceQuota.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import servicequotas_service_quota

servicequotasServiceQuota.ServicequotasServiceQuota.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import servicequotas_service_quota

servicequotasServiceQuota.ServicequotasServiceQuota.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ServicequotasServiceQuota resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServicequotasServiceQuota to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServicequotasServiceQuota that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/servicequotas_service_quota#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServicequotasServiceQuota to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.adjustable">adjustable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.defaultValue">default_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.quotaName">quota_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.requestId">request_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.requestStatus">request_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.usageMetric">usage_metric</a></code> | <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList">ServicequotasServiceQuotaUsageMetricList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.quotaCodeInput">quota_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.serviceCodeInput">service_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.quotaCode">quota_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.serviceCode">service_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `adjustable`<sup>Required</sup> <a name="adjustable" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.adjustable"></a>

```python
adjustable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.defaultValue"></a>

```python
default_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `quota_name`<sup>Required</sup> <a name="quota_name" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.quotaName"></a>

```python
quota_name: str
```

- *Type:* str

---

##### `request_id`<sup>Required</sup> <a name="request_id" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.requestId"></a>

```python
request_id: str
```

- *Type:* str

---

##### `request_status`<sup>Required</sup> <a name="request_status" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.requestStatus"></a>

```python
request_status: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `usage_metric`<sup>Required</sup> <a name="usage_metric" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.usageMetric"></a>

```python
usage_metric: ServicequotasServiceQuotaUsageMetricList
```

- *Type:* <a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList">ServicequotasServiceQuotaUsageMetricList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `quota_code_input`<sup>Optional</sup> <a name="quota_code_input" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.quotaCodeInput"></a>

```python
quota_code_input: str
```

- *Type:* str

---

##### `service_code_input`<sup>Optional</sup> <a name="service_code_input" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.serviceCodeInput"></a>

```python
service_code_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `quota_code`<sup>Required</sup> <a name="quota_code" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.quotaCode"></a>

```python
quota_code: str
```

- *Type:* str

---

##### `service_code`<sup>Required</sup> <a name="service_code" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.serviceCode"></a>

```python
service_code: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuota.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicequotasServiceQuotaConfig <a name="ServicequotasServiceQuotaConfig" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicequotas_service_quota

servicequotasServiceQuota.ServicequotasServiceQuotaConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  quota_code: str,
  service_code: str,
  value: typing.Union[int, float],
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.quotaCode">quota_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/servicequotas_service_quota#quota_code ServicequotasServiceQuota#quota_code}. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.serviceCode">service_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/servicequotas_service_quota#service_code ServicequotasServiceQuota#service_code}. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/servicequotas_service_quota#value ServicequotasServiceQuota#value}. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/servicequotas_service_quota#id ServicequotasServiceQuota#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `quota_code`<sup>Required</sup> <a name="quota_code" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.quotaCode"></a>

```python
quota_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/servicequotas_service_quota#quota_code ServicequotasServiceQuota#quota_code}.

---

##### `service_code`<sup>Required</sup> <a name="service_code" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.serviceCode"></a>

```python
service_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/servicequotas_service_quota#service_code ServicequotasServiceQuota#service_code}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/servicequotas_service_quota#value ServicequotasServiceQuota#value}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/servicequotas_service_quota#id ServicequotasServiceQuota#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ServicequotasServiceQuotaUsageMetric <a name="ServicequotasServiceQuotaUsageMetric" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetric.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicequotas_service_quota

servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetric()
```


### ServicequotasServiceQuotaUsageMetricMetricDimensions <a name="ServicequotasServiceQuotaUsageMetricMetricDimensions" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicequotas_service_quota

servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensions()
```


## Classes <a name="Classes" id="Classes"></a>

### ServicequotasServiceQuotaUsageMetricList <a name="ServicequotasServiceQuotaUsageMetricList" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicequotas_service_quota

servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServicequotasServiceQuotaUsageMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ServicequotasServiceQuotaUsageMetricMetricDimensionsList <a name="ServicequotasServiceQuotaUsageMetricMetricDimensionsList" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicequotas_service_quota

servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference <a name="ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicequotas_service_quota

servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.class">class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensions">ServicequotasServiceQuotaUsageMetricMetricDimensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `class`<sup>Required</sup> <a name="class" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.class"></a>

```python
class: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: ServicequotasServiceQuotaUsageMetricMetricDimensions
```

- *Type:* <a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensions">ServicequotasServiceQuotaUsageMetricMetricDimensions</a>

---


### ServicequotasServiceQuotaUsageMetricOutputReference <a name="ServicequotasServiceQuotaUsageMetricOutputReference" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicequotas_service_quota

servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.metricDimensions">metric_dimensions</a></code> | <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList">ServicequotasServiceQuotaUsageMetricMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.metricNamespace">metric_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.metricStatisticRecommendation">metric_statistic_recommendation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetric">ServicequotasServiceQuotaUsageMetric</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_dimensions`<sup>Required</sup> <a name="metric_dimensions" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.metricDimensions"></a>

```python
metric_dimensions: ServicequotasServiceQuotaUsageMetricMetricDimensionsList
```

- *Type:* <a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricMetricDimensionsList">ServicequotasServiceQuotaUsageMetricMetricDimensionsList</a>

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `metric_namespace`<sup>Required</sup> <a name="metric_namespace" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.metricNamespace"></a>

```python
metric_namespace: str
```

- *Type:* str

---

##### `metric_statistic_recommendation`<sup>Required</sup> <a name="metric_statistic_recommendation" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.metricStatisticRecommendation"></a>

```python
metric_statistic_recommendation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetricOutputReference.property.internalValue"></a>

```python
internal_value: ServicequotasServiceQuotaUsageMetric
```

- *Type:* <a href="#@cdktf/provider-aws.servicequotasServiceQuota.ServicequotasServiceQuotaUsageMetric">ServicequotasServiceQuotaUsageMetric</a>

---



