# `route53RecordsExclusive` Submodule <a name="`route53RecordsExclusive` Submodule" id="@cdktf/provider-aws.route53RecordsExclusive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecordsExclusive <a name="Route53RecordsExclusive" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive aws_route53_records_exclusive}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_records_exclusive

route53RecordsExclusive.Route53RecordsExclusive(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  zone_id: str,
  resource_record_set: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSet]] = None,
  timeouts: Route53RecordsExclusiveTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#zone_id Route53RecordsExclusive#zone_id}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.resourceRecordSet">resource_record_set</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet">Route53RecordsExclusiveResourceRecordSet</a>]]</code> | resource_record_set block. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts">Route53RecordsExclusiveTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.zoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#zone_id Route53RecordsExclusive#zone_id}.

---

##### `resource_record_set`<sup>Optional</sup> <a name="resource_record_set" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.resourceRecordSet"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet">Route53RecordsExclusiveResourceRecordSet</a>]]

resource_record_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#resource_record_set Route53RecordsExclusive#resource_record_set}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts">Route53RecordsExclusiveTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#timeouts Route53RecordsExclusive#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.putResourceRecordSet">put_resource_record_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.resetResourceRecordSet">reset_resource_record_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_resource_record_set` <a name="put_resource_record_set" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.putResourceRecordSet"></a>

```python
def put_resource_record_set(
  value: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSet]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.putResourceRecordSet.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet">Route53RecordsExclusiveResourceRecordSet</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#create Route53RecordsExclusive#create}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#update Route53RecordsExclusive#update}

---

##### `reset_resource_record_set` <a name="reset_resource_record_set" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.resetResourceRecordSet"></a>

```python
def reset_resource_record_set() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Route53RecordsExclusive resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import route53_records_exclusive

route53RecordsExclusive.Route53RecordsExclusive.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import route53_records_exclusive

route53RecordsExclusive.Route53RecordsExclusive.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import route53_records_exclusive

route53RecordsExclusive.Route53RecordsExclusive.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import route53_records_exclusive

route53RecordsExclusive.Route53RecordsExclusive.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Route53RecordsExclusive resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Route53RecordsExclusive to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Route53RecordsExclusive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Route53RecordsExclusive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.resourceRecordSet">resource_record_set</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList">Route53RecordsExclusiveResourceRecordSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference">Route53RecordsExclusiveTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.resourceRecordSetInput">resource_record_set_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet">Route53RecordsExclusiveResourceRecordSet</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts">Route53RecordsExclusiveTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `resource_record_set`<sup>Required</sup> <a name="resource_record_set" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.resourceRecordSet"></a>

```python
resource_record_set: Route53RecordsExclusiveResourceRecordSetList
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList">Route53RecordsExclusiveResourceRecordSetList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.timeouts"></a>

```python
timeouts: Route53RecordsExclusiveTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference">Route53RecordsExclusiveTimeoutsOutputReference</a>

---

##### `resource_record_set_input`<sup>Optional</sup> <a name="resource_record_set_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.resourceRecordSetInput"></a>

```python
resource_record_set_input: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSet]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet">Route53RecordsExclusiveResourceRecordSet</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, Route53RecordsExclusiveTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts">Route53RecordsExclusiveTimeouts</a>]

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecordsExclusiveConfig <a name="Route53RecordsExclusiveConfig" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_records_exclusive

route53RecordsExclusive.Route53RecordsExclusiveConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  zone_id: str,
  resource_record_set: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSet]] = None,
  timeouts: Route53RecordsExclusiveTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#zone_id Route53RecordsExclusive#zone_id}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.resourceRecordSet">resource_record_set</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet">Route53RecordsExclusiveResourceRecordSet</a>]]</code> | resource_record_set block. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts">Route53RecordsExclusiveTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#zone_id Route53RecordsExclusive#zone_id}.

---

##### `resource_record_set`<sup>Optional</sup> <a name="resource_record_set" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.resourceRecordSet"></a>

```python
resource_record_set: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSet]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet">Route53RecordsExclusiveResourceRecordSet</a>]]

resource_record_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#resource_record_set Route53RecordsExclusive#resource_record_set}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.timeouts"></a>

```python
timeouts: Route53RecordsExclusiveTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts">Route53RecordsExclusiveTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#timeouts Route53RecordsExclusive#timeouts}

---

### Route53RecordsExclusiveResourceRecordSet <a name="Route53RecordsExclusiveResourceRecordSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_records_exclusive

route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet(
  name: str,
  alias_target: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSetAliasTarget]] = None,
  cidr_routing_config: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig]] = None,
  failover: str = None,
  geolocation: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSetGeolocation]] = None,
  geoproximity_location: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSetGeoproximityLocation]] = None,
  health_check_id: str = None,
  multi_value_answer: typing.Union[bool, IResolvable] = None,
  region: str = None,
  resource_records: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSetResourceRecords]] = None,
  set_identifier: str = None,
  traffic_policy_instance_id: str = None,
  ttl: typing.Union[int, float] = None,
  type: str = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#name Route53RecordsExclusive#name}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.aliasTarget">alias_target</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget">Route53RecordsExclusiveResourceRecordSetAliasTarget</a>]]</code> | alias_target block. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.cidrRoutingConfig">cidr_routing_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig">Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig</a>]]</code> | cidr_routing_config block. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.failover">failover</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#failover Route53RecordsExclusive#failover}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.geolocation">geolocation</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation">Route53RecordsExclusiveResourceRecordSetGeolocation</a>]]</code> | geolocation block. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.geoproximityLocation">geoproximity_location</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation">Route53RecordsExclusiveResourceRecordSetGeoproximityLocation</a>]]</code> | geoproximity_location block. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.healthCheckId">health_check_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#health_check_id Route53RecordsExclusive#health_check_id}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.multiValueAnswer">multi_value_answer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#multi_value_answer Route53RecordsExclusive#multi_value_answer}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#region Route53RecordsExclusive#region}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.resourceRecords">resource_records</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords">Route53RecordsExclusiveResourceRecordSetResourceRecords</a>]]</code> | resource_records block. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.setIdentifier">set_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#set_identifier Route53RecordsExclusive#set_identifier}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.trafficPolicyInstanceId">traffic_policy_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#traffic_policy_instance_id Route53RecordsExclusive#traffic_policy_instance_id}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#ttl Route53RecordsExclusive#ttl}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#type Route53RecordsExclusive#type}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#weight Route53RecordsExclusive#weight}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#name Route53RecordsExclusive#name}.

---

##### `alias_target`<sup>Optional</sup> <a name="alias_target" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.aliasTarget"></a>

```python
alias_target: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSetAliasTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget">Route53RecordsExclusiveResourceRecordSetAliasTarget</a>]]

alias_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#alias_target Route53RecordsExclusive#alias_target}

---

##### `cidr_routing_config`<sup>Optional</sup> <a name="cidr_routing_config" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.cidrRoutingConfig"></a>

```python
cidr_routing_config: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig">Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig</a>]]

cidr_routing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#cidr_routing_config Route53RecordsExclusive#cidr_routing_config}

---

##### `failover`<sup>Optional</sup> <a name="failover" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.failover"></a>

```python
failover: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#failover Route53RecordsExclusive#failover}.

---

##### `geolocation`<sup>Optional</sup> <a name="geolocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.geolocation"></a>

```python
geolocation: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSetGeolocation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation">Route53RecordsExclusiveResourceRecordSetGeolocation</a>]]

geolocation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#geolocation Route53RecordsExclusive#geolocation}

---

##### `geoproximity_location`<sup>Optional</sup> <a name="geoproximity_location" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.geoproximityLocation"></a>

```python
geoproximity_location: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSetGeoproximityLocation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation">Route53RecordsExclusiveResourceRecordSetGeoproximityLocation</a>]]

geoproximity_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#geoproximity_location Route53RecordsExclusive#geoproximity_location}

---

##### `health_check_id`<sup>Optional</sup> <a name="health_check_id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.healthCheckId"></a>

```python
health_check_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#health_check_id Route53RecordsExclusive#health_check_id}.

---

##### `multi_value_answer`<sup>Optional</sup> <a name="multi_value_answer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.multiValueAnswer"></a>

```python
multi_value_answer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#multi_value_answer Route53RecordsExclusive#multi_value_answer}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#region Route53RecordsExclusive#region}.

---

##### `resource_records`<sup>Optional</sup> <a name="resource_records" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.resourceRecords"></a>

```python
resource_records: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSetResourceRecords]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords">Route53RecordsExclusiveResourceRecordSetResourceRecords</a>]]

resource_records block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#resource_records Route53RecordsExclusive#resource_records}

---

##### `set_identifier`<sup>Optional</sup> <a name="set_identifier" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.setIdentifier"></a>

```python
set_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#set_identifier Route53RecordsExclusive#set_identifier}.

---

##### `traffic_policy_instance_id`<sup>Optional</sup> <a name="traffic_policy_instance_id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.trafficPolicyInstanceId"></a>

```python
traffic_policy_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#traffic_policy_instance_id Route53RecordsExclusive#traffic_policy_instance_id}.

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#ttl Route53RecordsExclusive#ttl}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#type Route53RecordsExclusive#type}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#weight Route53RecordsExclusive#weight}.

---

### Route53RecordsExclusiveResourceRecordSetAliasTarget <a name="Route53RecordsExclusiveResourceRecordSetAliasTarget" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_records_exclusive

route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget(
  dns_name: str,
  evaluate_target_health: typing.Union[bool, IResolvable],
  hosted_zone_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget.property.dnsName">dns_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#dns_name Route53RecordsExclusive#dns_name}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget.property.evaluateTargetHealth">evaluate_target_health</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#evaluate_target_health Route53RecordsExclusive#evaluate_target_health}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#hosted_zone_id Route53RecordsExclusive#hosted_zone_id}. |

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#dns_name Route53RecordsExclusive#dns_name}.

---

##### `evaluate_target_health`<sup>Required</sup> <a name="evaluate_target_health" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget.property.evaluateTargetHealth"></a>

```python
evaluate_target_health: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#evaluate_target_health Route53RecordsExclusive#evaluate_target_health}.

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#hosted_zone_id Route53RecordsExclusive#hosted_zone_id}.

---

### Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig <a name="Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_records_exclusive

route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig(
  collection_id: str,
  location_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig.property.collectionId">collection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#collection_id Route53RecordsExclusive#collection_id}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig.property.locationName">location_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#location_name Route53RecordsExclusive#location_name}. |

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#collection_id Route53RecordsExclusive#collection_id}.

---

##### `location_name`<sup>Required</sup> <a name="location_name" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig.property.locationName"></a>

```python
location_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#location_name Route53RecordsExclusive#location_name}.

---

### Route53RecordsExclusiveResourceRecordSetGeolocation <a name="Route53RecordsExclusiveResourceRecordSetGeolocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_records_exclusive

route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation(
  continent_code: str = None,
  country_code: str = None,
  subdivision_code: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation.property.continentCode">continent_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#continent_code Route53RecordsExclusive#continent_code}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation.property.countryCode">country_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#country_code Route53RecordsExclusive#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation.property.subdivisionCode">subdivision_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#subdivision_code Route53RecordsExclusive#subdivision_code}. |

---

##### `continent_code`<sup>Optional</sup> <a name="continent_code" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation.property.continentCode"></a>

```python
continent_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#continent_code Route53RecordsExclusive#continent_code}.

---

##### `country_code`<sup>Optional</sup> <a name="country_code" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#country_code Route53RecordsExclusive#country_code}.

---

##### `subdivision_code`<sup>Optional</sup> <a name="subdivision_code" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation.property.subdivisionCode"></a>

```python
subdivision_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#subdivision_code Route53RecordsExclusive#subdivision_code}.

---

### Route53RecordsExclusiveResourceRecordSetGeoproximityLocation <a name="Route53RecordsExclusiveResourceRecordSetGeoproximityLocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_records_exclusive

route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation(
  aws_region: str = None,
  bias: typing.Union[int, float] = None,
  coordinates: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates]] = None,
  local_zone_group: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.property.awsRegion">aws_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#aws_region Route53RecordsExclusive#aws_region}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.property.bias">bias</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#bias Route53RecordsExclusive#bias}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.property.coordinates">coordinates</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates</a>]]</code> | coordinates block. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.property.localZoneGroup">local_zone_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#local_zone_group Route53RecordsExclusive#local_zone_group}. |

---

##### `aws_region`<sup>Optional</sup> <a name="aws_region" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#aws_region Route53RecordsExclusive#aws_region}.

---

##### `bias`<sup>Optional</sup> <a name="bias" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.property.bias"></a>

```python
bias: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#bias Route53RecordsExclusive#bias}.

---

##### `coordinates`<sup>Optional</sup> <a name="coordinates" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.property.coordinates"></a>

```python
coordinates: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates</a>]]

coordinates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#coordinates Route53RecordsExclusive#coordinates}

---

##### `local_zone_group`<sup>Optional</sup> <a name="local_zone_group" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.property.localZoneGroup"></a>

```python
local_zone_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#local_zone_group Route53RecordsExclusive#local_zone_group}.

---

### Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates <a name="Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_records_exclusive

route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates(
  latitude: str,
  longitude: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates.property.latitude">latitude</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#latitude Route53RecordsExclusive#latitude}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates.property.longitude">longitude</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#longitude Route53RecordsExclusive#longitude}. |

---

##### `latitude`<sup>Required</sup> <a name="latitude" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates.property.latitude"></a>

```python
latitude: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#latitude Route53RecordsExclusive#latitude}.

---

##### `longitude`<sup>Required</sup> <a name="longitude" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates.property.longitude"></a>

```python
longitude: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#longitude Route53RecordsExclusive#longitude}.

---

### Route53RecordsExclusiveResourceRecordSetResourceRecords <a name="Route53RecordsExclusiveResourceRecordSetResourceRecords" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_records_exclusive

route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords(
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#value Route53RecordsExclusive#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#value Route53RecordsExclusive#value}.

---

### Route53RecordsExclusiveTimeouts <a name="Route53RecordsExclusiveTimeouts" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_records_exclusive

route53RecordsExclusive.Route53RecordsExclusiveTimeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#create Route53RecordsExclusive#create}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/route53_records_exclusive#update Route53RecordsExclusive#update}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecordsExclusiveResourceRecordSetAliasTargetList <a name="Route53RecordsExclusiveResourceRecordSetAliasTargetList" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_records_exclusive

route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget">Route53RecordsExclusiveResourceRecordSetAliasTarget</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSetAliasTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget">Route53RecordsExclusiveResourceRecordSetAliasTarget</a>]]

---


### Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference <a name="Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_records_exclusive

route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.dnsNameInput">dns_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.evaluateTargetHealthInput">evaluate_target_health_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.hostedZoneIdInput">hosted_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.evaluateTargetHealth">evaluate_target_health</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget">Route53RecordsExclusiveResourceRecordSetAliasTarget</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_name_input`<sup>Optional</sup> <a name="dns_name_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.dnsNameInput"></a>

```python
dns_name_input: str
```

- *Type:* str

---

##### `evaluate_target_health_input`<sup>Optional</sup> <a name="evaluate_target_health_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.evaluateTargetHealthInput"></a>

```python
evaluate_target_health_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hosted_zone_id_input`<sup>Optional</sup> <a name="hosted_zone_id_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.hostedZoneIdInput"></a>

```python
hosted_zone_id_input: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `evaluate_target_health`<sup>Required</sup> <a name="evaluate_target_health" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.evaluateTargetHealth"></a>

```python
evaluate_target_health: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Route53RecordsExclusiveResourceRecordSetAliasTarget]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget">Route53RecordsExclusiveResourceRecordSetAliasTarget</a>]

---


### Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList <a name="Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_records_exclusive

route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig">Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig">Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig</a>]]

---


### Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference <a name="Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_records_exclusive

route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.collectionIdInput">collection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.locationNameInput">location_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.collectionId">collection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.locationName">location_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig">Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `collection_id_input`<sup>Optional</sup> <a name="collection_id_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.collectionIdInput"></a>

```python
collection_id_input: str
```

- *Type:* str

---

##### `location_name_input`<sup>Optional</sup> <a name="location_name_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.locationNameInput"></a>

```python
location_name_input: str
```

- *Type:* str

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

---

##### `location_name`<sup>Required</sup> <a name="location_name" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.locationName"></a>

```python
location_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig">Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig</a>]

---


### Route53RecordsExclusiveResourceRecordSetGeolocationList <a name="Route53RecordsExclusiveResourceRecordSetGeolocationList" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_records_exclusive

route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation">Route53RecordsExclusiveResourceRecordSetGeolocation</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSetGeolocation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation">Route53RecordsExclusiveResourceRecordSetGeolocation</a>]]

---


### Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference <a name="Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_records_exclusive

route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resetContinentCode">reset_continent_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resetCountryCode">reset_country_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resetSubdivisionCode">reset_subdivision_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_continent_code` <a name="reset_continent_code" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resetContinentCode"></a>

```python
def reset_continent_code() -> None
```

##### `reset_country_code` <a name="reset_country_code" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resetCountryCode"></a>

```python
def reset_country_code() -> None
```

##### `reset_subdivision_code` <a name="reset_subdivision_code" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resetSubdivisionCode"></a>

```python
def reset_subdivision_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.continentCodeInput">continent_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.countryCodeInput">country_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.subdivisionCodeInput">subdivision_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.continentCode">continent_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.countryCode">country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.subdivisionCode">subdivision_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation">Route53RecordsExclusiveResourceRecordSetGeolocation</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `continent_code_input`<sup>Optional</sup> <a name="continent_code_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.continentCodeInput"></a>

```python
continent_code_input: str
```

- *Type:* str

---

##### `country_code_input`<sup>Optional</sup> <a name="country_code_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.countryCodeInput"></a>

```python
country_code_input: str
```

- *Type:* str

---

##### `subdivision_code_input`<sup>Optional</sup> <a name="subdivision_code_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.subdivisionCodeInput"></a>

```python
subdivision_code_input: str
```

- *Type:* str

---

##### `continent_code`<sup>Required</sup> <a name="continent_code" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.continentCode"></a>

```python
continent_code: str
```

- *Type:* str

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

---

##### `subdivision_code`<sup>Required</sup> <a name="subdivision_code" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.subdivisionCode"></a>

```python
subdivision_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Route53RecordsExclusiveResourceRecordSetGeolocation]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation">Route53RecordsExclusiveResourceRecordSetGeolocation</a>]

---


### Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList <a name="Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_records_exclusive

route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates</a>]]

---


### Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference <a name="Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_records_exclusive

route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.latitudeInput">latitude_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.longitudeInput">longitude_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.latitude">latitude</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.longitude">longitude</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `latitude_input`<sup>Optional</sup> <a name="latitude_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.latitudeInput"></a>

```python
latitude_input: str
```

- *Type:* str

---

##### `longitude_input`<sup>Optional</sup> <a name="longitude_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.longitudeInput"></a>

```python
longitude_input: str
```

- *Type:* str

---

##### `latitude`<sup>Required</sup> <a name="latitude" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.latitude"></a>

```python
latitude: str
```

- *Type:* str

---

##### `longitude`<sup>Required</sup> <a name="longitude" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.longitude"></a>

```python
longitude: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates</a>]

---


### Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList <a name="Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_records_exclusive

route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation">Route53RecordsExclusiveResourceRecordSetGeoproximityLocation</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSetGeoproximityLocation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation">Route53RecordsExclusiveResourceRecordSetGeoproximityLocation</a>]]

---


### Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference <a name="Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_records_exclusive

route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.putCoordinates">put_coordinates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resetAwsRegion">reset_aws_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resetBias">reset_bias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resetCoordinates">reset_coordinates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resetLocalZoneGroup">reset_local_zone_group</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_coordinates` <a name="put_coordinates" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.putCoordinates"></a>

```python
def put_coordinates(
  value: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.putCoordinates.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates</a>]]

---

##### `reset_aws_region` <a name="reset_aws_region" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resetAwsRegion"></a>

```python
def reset_aws_region() -> None
```

##### `reset_bias` <a name="reset_bias" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resetBias"></a>

```python
def reset_bias() -> None
```

##### `reset_coordinates` <a name="reset_coordinates" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resetCoordinates"></a>

```python
def reset_coordinates() -> None
```

##### `reset_local_zone_group` <a name="reset_local_zone_group" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resetLocalZoneGroup"></a>

```python
def reset_local_zone_group() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.coordinates">coordinates</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.awsRegionInput">aws_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.biasInput">bias_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.coordinatesInput">coordinates_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.localZoneGroupInput">local_zone_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.awsRegion">aws_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.bias">bias</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.localZoneGroup">local_zone_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation">Route53RecordsExclusiveResourceRecordSetGeoproximityLocation</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `coordinates`<sup>Required</sup> <a name="coordinates" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.coordinates"></a>

```python
coordinates: Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList</a>

---

##### `aws_region_input`<sup>Optional</sup> <a name="aws_region_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.awsRegionInput"></a>

```python
aws_region_input: str
```

- *Type:* str

---

##### `bias_input`<sup>Optional</sup> <a name="bias_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.biasInput"></a>

```python
bias_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `coordinates_input`<sup>Optional</sup> <a name="coordinates_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.coordinatesInput"></a>

```python
coordinates_input: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates</a>]]

---

##### `local_zone_group_input`<sup>Optional</sup> <a name="local_zone_group_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.localZoneGroupInput"></a>

```python
local_zone_group_input: str
```

- *Type:* str

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

---

##### `bias`<sup>Required</sup> <a name="bias" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.bias"></a>

```python
bias: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_zone_group`<sup>Required</sup> <a name="local_zone_group" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.localZoneGroup"></a>

```python
local_zone_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Route53RecordsExclusiveResourceRecordSetGeoproximityLocation]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation">Route53RecordsExclusiveResourceRecordSetGeoproximityLocation</a>]

---


### Route53RecordsExclusiveResourceRecordSetList <a name="Route53RecordsExclusiveResourceRecordSetList" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_records_exclusive

route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53RecordsExclusiveResourceRecordSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet">Route53RecordsExclusiveResourceRecordSet</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSet]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet">Route53RecordsExclusiveResourceRecordSet</a>]]

---


### Route53RecordsExclusiveResourceRecordSetOutputReference <a name="Route53RecordsExclusiveResourceRecordSetOutputReference" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_records_exclusive

route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putAliasTarget">put_alias_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putCidrRoutingConfig">put_cidr_routing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putGeolocation">put_geolocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putGeoproximityLocation">put_geoproximity_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putResourceRecords">put_resource_records</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetAliasTarget">reset_alias_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetCidrRoutingConfig">reset_cidr_routing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetFailover">reset_failover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetGeolocation">reset_geolocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetGeoproximityLocation">reset_geoproximity_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetHealthCheckId">reset_health_check_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetMultiValueAnswer">reset_multi_value_answer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetResourceRecords">reset_resource_records</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetSetIdentifier">reset_set_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetTrafficPolicyInstanceId">reset_traffic_policy_instance_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetTtl">reset_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_alias_target` <a name="put_alias_target" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putAliasTarget"></a>

```python
def put_alias_target(
  value: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSetAliasTarget]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putAliasTarget.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget">Route53RecordsExclusiveResourceRecordSetAliasTarget</a>]]

---

##### `put_cidr_routing_config` <a name="put_cidr_routing_config" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putCidrRoutingConfig"></a>

```python
def put_cidr_routing_config(
  value: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putCidrRoutingConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig">Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig</a>]]

---

##### `put_geolocation` <a name="put_geolocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putGeolocation"></a>

```python
def put_geolocation(
  value: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSetGeolocation]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putGeolocation.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation">Route53RecordsExclusiveResourceRecordSetGeolocation</a>]]

---

##### `put_geoproximity_location` <a name="put_geoproximity_location" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putGeoproximityLocation"></a>

```python
def put_geoproximity_location(
  value: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSetGeoproximityLocation]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putGeoproximityLocation.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation">Route53RecordsExclusiveResourceRecordSetGeoproximityLocation</a>]]

---

##### `put_resource_records` <a name="put_resource_records" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putResourceRecords"></a>

```python
def put_resource_records(
  value: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSetResourceRecords]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putResourceRecords.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords">Route53RecordsExclusiveResourceRecordSetResourceRecords</a>]]

---

##### `reset_alias_target` <a name="reset_alias_target" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetAliasTarget"></a>

```python
def reset_alias_target() -> None
```

##### `reset_cidr_routing_config` <a name="reset_cidr_routing_config" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetCidrRoutingConfig"></a>

```python
def reset_cidr_routing_config() -> None
```

##### `reset_failover` <a name="reset_failover" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetFailover"></a>

```python
def reset_failover() -> None
```

##### `reset_geolocation` <a name="reset_geolocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetGeolocation"></a>

```python
def reset_geolocation() -> None
```

##### `reset_geoproximity_location` <a name="reset_geoproximity_location" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetGeoproximityLocation"></a>

```python
def reset_geoproximity_location() -> None
```

##### `reset_health_check_id` <a name="reset_health_check_id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetHealthCheckId"></a>

```python
def reset_health_check_id() -> None
```

##### `reset_multi_value_answer` <a name="reset_multi_value_answer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetMultiValueAnswer"></a>

```python
def reset_multi_value_answer() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_resource_records` <a name="reset_resource_records" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetResourceRecords"></a>

```python
def reset_resource_records() -> None
```

##### `reset_set_identifier` <a name="reset_set_identifier" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetSetIdentifier"></a>

```python
def reset_set_identifier() -> None
```

##### `reset_traffic_policy_instance_id` <a name="reset_traffic_policy_instance_id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetTrafficPolicyInstanceId"></a>

```python
def reset_traffic_policy_instance_id() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetTtl"></a>

```python
def reset_ttl() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.aliasTarget">alias_target</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList">Route53RecordsExclusiveResourceRecordSetAliasTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.cidrRoutingConfig">cidr_routing_config</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList">Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.geolocation">geolocation</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList">Route53RecordsExclusiveResourceRecordSetGeolocationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.geoproximityLocation">geoproximity_location</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.resourceRecords">resource_records</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList">Route53RecordsExclusiveResourceRecordSetResourceRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.aliasTargetInput">alias_target_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget">Route53RecordsExclusiveResourceRecordSetAliasTarget</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.cidrRoutingConfigInput">cidr_routing_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig">Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.failoverInput">failover_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.geolocationInput">geolocation_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation">Route53RecordsExclusiveResourceRecordSetGeolocation</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.geoproximityLocationInput">geoproximity_location_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation">Route53RecordsExclusiveResourceRecordSetGeoproximityLocation</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.healthCheckIdInput">health_check_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.multiValueAnswerInput">multi_value_answer_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.resourceRecordsInput">resource_records_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords">Route53RecordsExclusiveResourceRecordSetResourceRecords</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.setIdentifierInput">set_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.trafficPolicyInstanceIdInput">traffic_policy_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.failover">failover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.healthCheckId">health_check_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.multiValueAnswer">multi_value_answer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.setIdentifier">set_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.trafficPolicyInstanceId">traffic_policy_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet">Route53RecordsExclusiveResourceRecordSet</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias_target`<sup>Required</sup> <a name="alias_target" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.aliasTarget"></a>

```python
alias_target: Route53RecordsExclusiveResourceRecordSetAliasTargetList
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList">Route53RecordsExclusiveResourceRecordSetAliasTargetList</a>

---

##### `cidr_routing_config`<sup>Required</sup> <a name="cidr_routing_config" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.cidrRoutingConfig"></a>

```python
cidr_routing_config: Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList">Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList</a>

---

##### `geolocation`<sup>Required</sup> <a name="geolocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.geolocation"></a>

```python
geolocation: Route53RecordsExclusiveResourceRecordSetGeolocationList
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList">Route53RecordsExclusiveResourceRecordSetGeolocationList</a>

---

##### `geoproximity_location`<sup>Required</sup> <a name="geoproximity_location" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.geoproximityLocation"></a>

```python
geoproximity_location: Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList</a>

---

##### `resource_records`<sup>Required</sup> <a name="resource_records" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.resourceRecords"></a>

```python
resource_records: Route53RecordsExclusiveResourceRecordSetResourceRecordsList
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList">Route53RecordsExclusiveResourceRecordSetResourceRecordsList</a>

---

##### `alias_target_input`<sup>Optional</sup> <a name="alias_target_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.aliasTargetInput"></a>

```python
alias_target_input: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSetAliasTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget">Route53RecordsExclusiveResourceRecordSetAliasTarget</a>]]

---

##### `cidr_routing_config_input`<sup>Optional</sup> <a name="cidr_routing_config_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.cidrRoutingConfigInput"></a>

```python
cidr_routing_config_input: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig">Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig</a>]]

---

##### `failover_input`<sup>Optional</sup> <a name="failover_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.failoverInput"></a>

```python
failover_input: str
```

- *Type:* str

---

##### `geolocation_input`<sup>Optional</sup> <a name="geolocation_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.geolocationInput"></a>

```python
geolocation_input: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSetGeolocation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation">Route53RecordsExclusiveResourceRecordSetGeolocation</a>]]

---

##### `geoproximity_location_input`<sup>Optional</sup> <a name="geoproximity_location_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.geoproximityLocationInput"></a>

```python
geoproximity_location_input: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSetGeoproximityLocation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation">Route53RecordsExclusiveResourceRecordSetGeoproximityLocation</a>]]

---

##### `health_check_id_input`<sup>Optional</sup> <a name="health_check_id_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.healthCheckIdInput"></a>

```python
health_check_id_input: str
```

- *Type:* str

---

##### `multi_value_answer_input`<sup>Optional</sup> <a name="multi_value_answer_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.multiValueAnswerInput"></a>

```python
multi_value_answer_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `resource_records_input`<sup>Optional</sup> <a name="resource_records_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.resourceRecordsInput"></a>

```python
resource_records_input: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSetResourceRecords]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords">Route53RecordsExclusiveResourceRecordSetResourceRecords</a>]]

---

##### `set_identifier_input`<sup>Optional</sup> <a name="set_identifier_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.setIdentifierInput"></a>

```python
set_identifier_input: str
```

- *Type:* str

---

##### `traffic_policy_instance_id_input`<sup>Optional</sup> <a name="traffic_policy_instance_id_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.trafficPolicyInstanceIdInput"></a>

```python
traffic_policy_instance_id_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failover`<sup>Required</sup> <a name="failover" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.failover"></a>

```python
failover: str
```

- *Type:* str

---

##### `health_check_id`<sup>Required</sup> <a name="health_check_id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.healthCheckId"></a>

```python
health_check_id: str
```

- *Type:* str

---

##### `multi_value_answer`<sup>Required</sup> <a name="multi_value_answer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.multiValueAnswer"></a>

```python
multi_value_answer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `set_identifier`<sup>Required</sup> <a name="set_identifier" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.setIdentifier"></a>

```python
set_identifier: str
```

- *Type:* str

---

##### `traffic_policy_instance_id`<sup>Required</sup> <a name="traffic_policy_instance_id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.trafficPolicyInstanceId"></a>

```python
traffic_policy_instance_id: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Route53RecordsExclusiveResourceRecordSet]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet">Route53RecordsExclusiveResourceRecordSet</a>]

---


### Route53RecordsExclusiveResourceRecordSetResourceRecordsList <a name="Route53RecordsExclusiveResourceRecordSetResourceRecordsList" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_records_exclusive

route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords">Route53RecordsExclusiveResourceRecordSetResourceRecords</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Route53RecordsExclusiveResourceRecordSetResourceRecords]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords">Route53RecordsExclusiveResourceRecordSetResourceRecords</a>]]

---


### Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference <a name="Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_records_exclusive

route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords">Route53RecordsExclusiveResourceRecordSetResourceRecords</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Route53RecordsExclusiveResourceRecordSetResourceRecords]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords">Route53RecordsExclusiveResourceRecordSetResourceRecords</a>]

---


### Route53RecordsExclusiveTimeoutsOutputReference <a name="Route53RecordsExclusiveTimeoutsOutputReference" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_records_exclusive

route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts">Route53RecordsExclusiveTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Route53RecordsExclusiveTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts">Route53RecordsExclusiveTimeouts</a>]

---



