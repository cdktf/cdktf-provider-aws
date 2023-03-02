# `rdsReservedInstance` Submodule <a name="`rdsReservedInstance` Submodule" id="@cdktf/provider-aws.rdsReservedInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsReservedInstance <a name="RdsReservedInstance" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance aws_rds_reserved_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rds_reserved_instance

rdsReservedInstance.RdsReservedInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  offering_id: str,
  id: str = None,
  instance_count: typing.Union[int, float] = None,
  reservation_id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: RdsReservedInstanceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.offeringId">offering_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#offering_id RdsReservedInstance#offering_id}. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#id RdsReservedInstance#id}. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#instance_count RdsReservedInstance#instance_count}. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.reservationId">reservation_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#reservation_id RdsReservedInstance#reservation_id}. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#tags RdsReservedInstance#tags}. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#tags_all RdsReservedInstance#tags_all}. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts">RdsReservedInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `offering_id`<sup>Required</sup> <a name="offering_id" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.offeringId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#offering_id RdsReservedInstance#offering_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#id RdsReservedInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.instanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#instance_count RdsReservedInstance#instance_count}.

---

##### `reservation_id`<sup>Optional</sup> <a name="reservation_id" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.reservationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#reservation_id RdsReservedInstance#reservation_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#tags RdsReservedInstance#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#tags_all RdsReservedInstance#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts">RdsReservedInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#timeouts RdsReservedInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.resetInstanceCount">reset_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.resetReservationId">reset_reservation_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#create RdsReservedInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#delete RdsReservedInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#update RdsReservedInstance#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_count` <a name="reset_instance_count" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.resetInstanceCount"></a>

```python
def reset_instance_count() -> None
```

##### `reset_reservation_id` <a name="reset_reservation_id" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.resetReservationId"></a>

```python
def reset_reservation_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import rds_reserved_instance

rdsReservedInstance.RdsReservedInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import rds_reserved_instance

rdsReservedInstance.RdsReservedInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import rds_reserved_instance

rdsReservedInstance.RdsReservedInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.currencyCode">currency_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.dbInstanceClass">db_instance_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.fixedPrice">fixed_price</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.leaseId">lease_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.multiAz">multi_az</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.offeringType">offering_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.productDescription">product_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.recurringCharges">recurring_charges</a></code> | <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList">RdsReservedInstanceRecurringChargesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference">RdsReservedInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.usagePrice">usage_price</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.instanceCountInput">instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.offeringIdInput">offering_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.reservationIdInput">reservation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts">RdsReservedInstanceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.offeringId">offering_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.reservationId">reservation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `currency_code`<sup>Required</sup> <a name="currency_code" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.currencyCode"></a>

```python
currency_code: str
```

- *Type:* str

---

##### `db_instance_class`<sup>Required</sup> <a name="db_instance_class" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.dbInstanceClass"></a>

```python
db_instance_class: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fixed_price`<sup>Required</sup> <a name="fixed_price" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.fixedPrice"></a>

```python
fixed_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lease_id`<sup>Required</sup> <a name="lease_id" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.leaseId"></a>

```python
lease_id: str
```

- *Type:* str

---

##### `multi_az`<sup>Required</sup> <a name="multi_az" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.multiAz"></a>

```python
multi_az: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `offering_type`<sup>Required</sup> <a name="offering_type" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.offeringType"></a>

```python
offering_type: str
```

- *Type:* str

---

##### `product_description`<sup>Required</sup> <a name="product_description" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.productDescription"></a>

```python
product_description: str
```

- *Type:* str

---

##### `recurring_charges`<sup>Required</sup> <a name="recurring_charges" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.recurringCharges"></a>

```python
recurring_charges: RdsReservedInstanceRecurringChargesList
```

- *Type:* <a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList">RdsReservedInstanceRecurringChargesList</a>

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.timeouts"></a>

```python
timeouts: RdsReservedInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference">RdsReservedInstanceTimeoutsOutputReference</a>

---

##### `usage_price`<sup>Required</sup> <a name="usage_price" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.usagePrice"></a>

```python
usage_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_count_input`<sup>Optional</sup> <a name="instance_count_input" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.instanceCountInput"></a>

```python
instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offering_id_input`<sup>Optional</sup> <a name="offering_id_input" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.offeringIdInput"></a>

```python
offering_id_input: str
```

- *Type:* str

---

##### `reservation_id_input`<sup>Optional</sup> <a name="reservation_id_input" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.reservationIdInput"></a>

```python
reservation_id_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[RdsReservedInstanceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts">RdsReservedInstanceTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offering_id`<sup>Required</sup> <a name="offering_id" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.offeringId"></a>

```python
offering_id: str
```

- *Type:* str

---

##### `reservation_id`<sup>Required</sup> <a name="reservation_id" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.reservationId"></a>

```python
reservation_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RdsReservedInstanceConfig <a name="RdsReservedInstanceConfig" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rds_reserved_instance

rdsReservedInstance.RdsReservedInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  offering_id: str,
  id: str = None,
  instance_count: typing.Union[int, float] = None,
  reservation_id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: RdsReservedInstanceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.offeringId">offering_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#offering_id RdsReservedInstance#offering_id}. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#id RdsReservedInstance#id}. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#instance_count RdsReservedInstance#instance_count}. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.reservationId">reservation_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#reservation_id RdsReservedInstance#reservation_id}. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#tags RdsReservedInstance#tags}. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#tags_all RdsReservedInstance#tags_all}. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts">RdsReservedInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `offering_id`<sup>Required</sup> <a name="offering_id" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.offeringId"></a>

```python
offering_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#offering_id RdsReservedInstance#offering_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#id RdsReservedInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#instance_count RdsReservedInstance#instance_count}.

---

##### `reservation_id`<sup>Optional</sup> <a name="reservation_id" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.reservationId"></a>

```python
reservation_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#reservation_id RdsReservedInstance#reservation_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#tags RdsReservedInstance#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#tags_all RdsReservedInstance#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.timeouts"></a>

```python
timeouts: RdsReservedInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts">RdsReservedInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#timeouts RdsReservedInstance#timeouts}

---

### RdsReservedInstanceRecurringCharges <a name="RdsReservedInstanceRecurringCharges" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringCharges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringCharges.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rds_reserved_instance

rdsReservedInstance.RdsReservedInstanceRecurringCharges()
```


### RdsReservedInstanceTimeouts <a name="RdsReservedInstanceTimeouts" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rds_reserved_instance

rdsReservedInstance.RdsReservedInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#create RdsReservedInstance#create}. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#delete RdsReservedInstance#delete}. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#update RdsReservedInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#create RdsReservedInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#delete RdsReservedInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#update RdsReservedInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RdsReservedInstanceRecurringChargesList <a name="RdsReservedInstanceRecurringChargesList" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rds_reserved_instance

rdsReservedInstance.RdsReservedInstanceRecurringChargesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RdsReservedInstanceRecurringChargesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### RdsReservedInstanceRecurringChargesOutputReference <a name="RdsReservedInstanceRecurringChargesOutputReference" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rds_reserved_instance

rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.property.recurringChargeAmount">recurring_charge_amount</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.property.recurringChargeFrequency">recurring_charge_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringCharges">RdsReservedInstanceRecurringCharges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `recurring_charge_amount`<sup>Required</sup> <a name="recurring_charge_amount" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.property.recurringChargeAmount"></a>

```python
recurring_charge_amount: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recurring_charge_frequency`<sup>Required</sup> <a name="recurring_charge_frequency" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.property.recurringChargeFrequency"></a>

```python
recurring_charge_frequency: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.property.internalValue"></a>

```python
internal_value: RdsReservedInstanceRecurringCharges
```

- *Type:* <a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringCharges">RdsReservedInstanceRecurringCharges</a>

---


### RdsReservedInstanceTimeoutsOutputReference <a name="RdsReservedInstanceTimeoutsOutputReference" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rds_reserved_instance

rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts">RdsReservedInstanceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[RdsReservedInstanceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts">RdsReservedInstanceTimeouts</a>, cdktf.IResolvable]

---



