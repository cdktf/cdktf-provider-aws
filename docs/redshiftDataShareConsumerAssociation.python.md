# `redshiftDataShareConsumerAssociation` Submodule <a name="`redshiftDataShareConsumerAssociation` Submodule" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftDataShareConsumerAssociation <a name="RedshiftDataShareConsumerAssociation" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshift_data_share_consumer_association aws_redshift_data_share_consumer_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshift_data_share_consumer_association

redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_share_arn: str,
  allow_writes: typing.Union[bool, IResolvable] = None,
  associate_entire_account: typing.Union[bool, IResolvable] = None,
  consumer_arn: str = None,
  consumer_region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.dataShareArn">data_share_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshift_data_share_consumer_association#data_share_arn RedshiftDataShareConsumerAssociation#data_share_arn}. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.allowWrites">allow_writes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshift_data_share_consumer_association#allow_writes RedshiftDataShareConsumerAssociation#allow_writes}. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.associateEntireAccount">associate_entire_account</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshift_data_share_consumer_association#associate_entire_account RedshiftDataShareConsumerAssociation#associate_entire_account}. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.consumerArn">consumer_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshift_data_share_consumer_association#consumer_arn RedshiftDataShareConsumerAssociation#consumer_arn}. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.consumerRegion">consumer_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshift_data_share_consumer_association#consumer_region RedshiftDataShareConsumerAssociation#consumer_region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_share_arn`<sup>Required</sup> <a name="data_share_arn" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.dataShareArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshift_data_share_consumer_association#data_share_arn RedshiftDataShareConsumerAssociation#data_share_arn}.

---

##### `allow_writes`<sup>Optional</sup> <a name="allow_writes" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.allowWrites"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshift_data_share_consumer_association#allow_writes RedshiftDataShareConsumerAssociation#allow_writes}.

---

##### `associate_entire_account`<sup>Optional</sup> <a name="associate_entire_account" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.associateEntireAccount"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshift_data_share_consumer_association#associate_entire_account RedshiftDataShareConsumerAssociation#associate_entire_account}.

---

##### `consumer_arn`<sup>Optional</sup> <a name="consumer_arn" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.consumerArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshift_data_share_consumer_association#consumer_arn RedshiftDataShareConsumerAssociation#consumer_arn}.

---

##### `consumer_region`<sup>Optional</sup> <a name="consumer_region" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.consumerRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshift_data_share_consumer_association#consumer_region RedshiftDataShareConsumerAssociation#consumer_region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetAllowWrites">reset_allow_writes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetAssociateEntireAccount">reset_associate_entire_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetConsumerArn">reset_consumer_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetConsumerRegion">reset_consumer_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_allow_writes` <a name="reset_allow_writes" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetAllowWrites"></a>

```python
def reset_allow_writes() -> None
```

##### `reset_associate_entire_account` <a name="reset_associate_entire_account" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetAssociateEntireAccount"></a>

```python
def reset_associate_entire_account() -> None
```

##### `reset_consumer_arn` <a name="reset_consumer_arn" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetConsumerArn"></a>

```python
def reset_consumer_arn() -> None
```

##### `reset_consumer_region` <a name="reset_consumer_region" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetConsumerRegion"></a>

```python
def reset_consumer_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RedshiftDataShareConsumerAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import redshift_data_share_consumer_association

redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import redshift_data_share_consumer_association

redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import redshift_data_share_consumer_association

redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import redshift_data_share_consumer_association

redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RedshiftDataShareConsumerAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RedshiftDataShareConsumerAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RedshiftDataShareConsumerAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshift_data_share_consumer_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RedshiftDataShareConsumerAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.managedBy">managed_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.producerArn">producer_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.allowWritesInput">allow_writes_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.associateEntireAccountInput">associate_entire_account_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerArnInput">consumer_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerRegionInput">consumer_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.dataShareArnInput">data_share_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.allowWrites">allow_writes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.associateEntireAccount">associate_entire_account</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerArn">consumer_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerRegion">consumer_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.dataShareArn">data_share_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_by`<sup>Required</sup> <a name="managed_by" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.managedBy"></a>

```python
managed_by: str
```

- *Type:* str

---

##### `producer_arn`<sup>Required</sup> <a name="producer_arn" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.producerArn"></a>

```python
producer_arn: str
```

- *Type:* str

---

##### `allow_writes_input`<sup>Optional</sup> <a name="allow_writes_input" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.allowWritesInput"></a>

```python
allow_writes_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `associate_entire_account_input`<sup>Optional</sup> <a name="associate_entire_account_input" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.associateEntireAccountInput"></a>

```python
associate_entire_account_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `consumer_arn_input`<sup>Optional</sup> <a name="consumer_arn_input" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerArnInput"></a>

```python
consumer_arn_input: str
```

- *Type:* str

---

##### `consumer_region_input`<sup>Optional</sup> <a name="consumer_region_input" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerRegionInput"></a>

```python
consumer_region_input: str
```

- *Type:* str

---

##### `data_share_arn_input`<sup>Optional</sup> <a name="data_share_arn_input" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.dataShareArnInput"></a>

```python
data_share_arn_input: str
```

- *Type:* str

---

##### `allow_writes`<sup>Required</sup> <a name="allow_writes" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.allowWrites"></a>

```python
allow_writes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `associate_entire_account`<sup>Required</sup> <a name="associate_entire_account" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.associateEntireAccount"></a>

```python
associate_entire_account: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `consumer_arn`<sup>Required</sup> <a name="consumer_arn" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerArn"></a>

```python
consumer_arn: str
```

- *Type:* str

---

##### `consumer_region`<sup>Required</sup> <a name="consumer_region" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerRegion"></a>

```python
consumer_region: str
```

- *Type:* str

---

##### `data_share_arn`<sup>Required</sup> <a name="data_share_arn" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.dataShareArn"></a>

```python
data_share_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftDataShareConsumerAssociationConfig <a name="RedshiftDataShareConsumerAssociationConfig" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshift_data_share_consumer_association

redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_share_arn: str,
  allow_writes: typing.Union[bool, IResolvable] = None,
  associate_entire_account: typing.Union[bool, IResolvable] = None,
  consumer_arn: str = None,
  consumer_region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.dataShareArn">data_share_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshift_data_share_consumer_association#data_share_arn RedshiftDataShareConsumerAssociation#data_share_arn}. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.allowWrites">allow_writes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshift_data_share_consumer_association#allow_writes RedshiftDataShareConsumerAssociation#allow_writes}. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.associateEntireAccount">associate_entire_account</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshift_data_share_consumer_association#associate_entire_account RedshiftDataShareConsumerAssociation#associate_entire_account}. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.consumerArn">consumer_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshift_data_share_consumer_association#consumer_arn RedshiftDataShareConsumerAssociation#consumer_arn}. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.consumerRegion">consumer_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshift_data_share_consumer_association#consumer_region RedshiftDataShareConsumerAssociation#consumer_region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_share_arn`<sup>Required</sup> <a name="data_share_arn" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.dataShareArn"></a>

```python
data_share_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshift_data_share_consumer_association#data_share_arn RedshiftDataShareConsumerAssociation#data_share_arn}.

---

##### `allow_writes`<sup>Optional</sup> <a name="allow_writes" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.allowWrites"></a>

```python
allow_writes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshift_data_share_consumer_association#allow_writes RedshiftDataShareConsumerAssociation#allow_writes}.

---

##### `associate_entire_account`<sup>Optional</sup> <a name="associate_entire_account" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.associateEntireAccount"></a>

```python
associate_entire_account: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshift_data_share_consumer_association#associate_entire_account RedshiftDataShareConsumerAssociation#associate_entire_account}.

---

##### `consumer_arn`<sup>Optional</sup> <a name="consumer_arn" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.consumerArn"></a>

```python
consumer_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshift_data_share_consumer_association#consumer_arn RedshiftDataShareConsumerAssociation#consumer_arn}.

---

##### `consumer_region`<sup>Optional</sup> <a name="consumer_region" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.consumerRegion"></a>

```python
consumer_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshift_data_share_consumer_association#consumer_region RedshiftDataShareConsumerAssociation#consumer_region}.

---



