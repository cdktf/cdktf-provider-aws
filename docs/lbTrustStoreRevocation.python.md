# `lbTrustStoreRevocation` Submodule <a name="`lbTrustStoreRevocation` Submodule" id="@cdktf/provider-aws.lbTrustStoreRevocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbTrustStoreRevocation <a name="LbTrustStoreRevocation" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lb_trust_store_revocation aws_lb_trust_store_revocation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lb_trust_store_revocation

lbTrustStoreRevocation.LbTrustStoreRevocation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  revocations_s3_bucket: str,
  revocations_s3_key: str,
  trust_store_arn: str,
  id: str = None,
  revocations_s3_object_version: str = None,
  timeouts: LbTrustStoreRevocationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.revocationsS3Bucket">revocations_s3_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lb_trust_store_revocation#revocations_s3_bucket LbTrustStoreRevocation#revocations_s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.revocationsS3Key">revocations_s3_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lb_trust_store_revocation#revocations_s3_key LbTrustStoreRevocation#revocations_s3_key}. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.trustStoreArn">trust_store_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lb_trust_store_revocation#trust_store_arn LbTrustStoreRevocation#trust_store_arn}. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lb_trust_store_revocation#id LbTrustStoreRevocation#id}. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.revocationsS3ObjectVersion">revocations_s3_object_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lb_trust_store_revocation#revocations_s3_object_version LbTrustStoreRevocation#revocations_s3_object_version}. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeouts">LbTrustStoreRevocationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `revocations_s3_bucket`<sup>Required</sup> <a name="revocations_s3_bucket" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.revocationsS3Bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lb_trust_store_revocation#revocations_s3_bucket LbTrustStoreRevocation#revocations_s3_bucket}.

---

##### `revocations_s3_key`<sup>Required</sup> <a name="revocations_s3_key" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.revocationsS3Key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lb_trust_store_revocation#revocations_s3_key LbTrustStoreRevocation#revocations_s3_key}.

---

##### `trust_store_arn`<sup>Required</sup> <a name="trust_store_arn" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.trustStoreArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lb_trust_store_revocation#trust_store_arn LbTrustStoreRevocation#trust_store_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lb_trust_store_revocation#id LbTrustStoreRevocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `revocations_s3_object_version`<sup>Optional</sup> <a name="revocations_s3_object_version" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.revocationsS3ObjectVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lb_trust_store_revocation#revocations_s3_object_version LbTrustStoreRevocation#revocations_s3_object_version}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeouts">LbTrustStoreRevocationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lb_trust_store_revocation#timeouts LbTrustStoreRevocation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.resetRevocationsS3ObjectVersion">reset_revocations_s3_object_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lb_trust_store_revocation#create LbTrustStoreRevocation#create}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_revocations_s3_object_version` <a name="reset_revocations_s3_object_version" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.resetRevocationsS3ObjectVersion"></a>

```python
def reset_revocations_s3_object_version() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LbTrustStoreRevocation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import lb_trust_store_revocation

lbTrustStoreRevocation.LbTrustStoreRevocation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import lb_trust_store_revocation

lbTrustStoreRevocation.LbTrustStoreRevocation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import lb_trust_store_revocation

lbTrustStoreRevocation.LbTrustStoreRevocation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import lb_trust_store_revocation

lbTrustStoreRevocation.LbTrustStoreRevocation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LbTrustStoreRevocation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LbTrustStoreRevocation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LbTrustStoreRevocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lb_trust_store_revocation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LbTrustStoreRevocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationId">revocation_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference">LbTrustStoreRevocationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3BucketInput">revocations_s3_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3KeyInput">revocations_s3_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3ObjectVersionInput">revocations_s3_object_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeouts">LbTrustStoreRevocationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.trustStoreArnInput">trust_store_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3Bucket">revocations_s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3Key">revocations_s3_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3ObjectVersion">revocations_s3_object_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.trustStoreArn">trust_store_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `revocation_id`<sup>Required</sup> <a name="revocation_id" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationId"></a>

```python
revocation_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.timeouts"></a>

```python
timeouts: LbTrustStoreRevocationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference">LbTrustStoreRevocationTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `revocations_s3_bucket_input`<sup>Optional</sup> <a name="revocations_s3_bucket_input" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3BucketInput"></a>

```python
revocations_s3_bucket_input: str
```

- *Type:* str

---

##### `revocations_s3_key_input`<sup>Optional</sup> <a name="revocations_s3_key_input" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3KeyInput"></a>

```python
revocations_s3_key_input: str
```

- *Type:* str

---

##### `revocations_s3_object_version_input`<sup>Optional</sup> <a name="revocations_s3_object_version_input" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3ObjectVersionInput"></a>

```python
revocations_s3_object_version_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LbTrustStoreRevocationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeouts">LbTrustStoreRevocationTimeouts</a>]

---

##### `trust_store_arn_input`<sup>Optional</sup> <a name="trust_store_arn_input" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.trustStoreArnInput"></a>

```python
trust_store_arn_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `revocations_s3_bucket`<sup>Required</sup> <a name="revocations_s3_bucket" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3Bucket"></a>

```python
revocations_s3_bucket: str
```

- *Type:* str

---

##### `revocations_s3_key`<sup>Required</sup> <a name="revocations_s3_key" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3Key"></a>

```python
revocations_s3_key: str
```

- *Type:* str

---

##### `revocations_s3_object_version`<sup>Required</sup> <a name="revocations_s3_object_version" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3ObjectVersion"></a>

```python
revocations_s3_object_version: str
```

- *Type:* str

---

##### `trust_store_arn`<sup>Required</sup> <a name="trust_store_arn" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.trustStoreArn"></a>

```python
trust_store_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LbTrustStoreRevocationConfig <a name="LbTrustStoreRevocationConfig" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lb_trust_store_revocation

lbTrustStoreRevocation.LbTrustStoreRevocationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  revocations_s3_bucket: str,
  revocations_s3_key: str,
  trust_store_arn: str,
  id: str = None,
  revocations_s3_object_version: str = None,
  timeouts: LbTrustStoreRevocationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.revocationsS3Bucket">revocations_s3_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lb_trust_store_revocation#revocations_s3_bucket LbTrustStoreRevocation#revocations_s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.revocationsS3Key">revocations_s3_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lb_trust_store_revocation#revocations_s3_key LbTrustStoreRevocation#revocations_s3_key}. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.trustStoreArn">trust_store_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lb_trust_store_revocation#trust_store_arn LbTrustStoreRevocation#trust_store_arn}. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lb_trust_store_revocation#id LbTrustStoreRevocation#id}. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.revocationsS3ObjectVersion">revocations_s3_object_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lb_trust_store_revocation#revocations_s3_object_version LbTrustStoreRevocation#revocations_s3_object_version}. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeouts">LbTrustStoreRevocationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `revocations_s3_bucket`<sup>Required</sup> <a name="revocations_s3_bucket" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.revocationsS3Bucket"></a>

```python
revocations_s3_bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lb_trust_store_revocation#revocations_s3_bucket LbTrustStoreRevocation#revocations_s3_bucket}.

---

##### `revocations_s3_key`<sup>Required</sup> <a name="revocations_s3_key" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.revocationsS3Key"></a>

```python
revocations_s3_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lb_trust_store_revocation#revocations_s3_key LbTrustStoreRevocation#revocations_s3_key}.

---

##### `trust_store_arn`<sup>Required</sup> <a name="trust_store_arn" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.trustStoreArn"></a>

```python
trust_store_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lb_trust_store_revocation#trust_store_arn LbTrustStoreRevocation#trust_store_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lb_trust_store_revocation#id LbTrustStoreRevocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `revocations_s3_object_version`<sup>Optional</sup> <a name="revocations_s3_object_version" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.revocationsS3ObjectVersion"></a>

```python
revocations_s3_object_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lb_trust_store_revocation#revocations_s3_object_version LbTrustStoreRevocation#revocations_s3_object_version}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.timeouts"></a>

```python
timeouts: LbTrustStoreRevocationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeouts">LbTrustStoreRevocationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lb_trust_store_revocation#timeouts LbTrustStoreRevocation#timeouts}

---

### LbTrustStoreRevocationTimeouts <a name="LbTrustStoreRevocationTimeouts" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lb_trust_store_revocation

lbTrustStoreRevocation.LbTrustStoreRevocationTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lb_trust_store_revocation#create LbTrustStoreRevocation#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lb_trust_store_revocation#create LbTrustStoreRevocation#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbTrustStoreRevocationTimeoutsOutputReference <a name="LbTrustStoreRevocationTimeoutsOutputReference" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lb_trust_store_revocation

lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeouts">LbTrustStoreRevocationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LbTrustStoreRevocationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeouts">LbTrustStoreRevocationTimeouts</a>]

---



