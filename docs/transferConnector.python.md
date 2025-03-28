# `transferConnector` Submodule <a name="`transferConnector` Submodule" id="@cdktf/provider-aws.transferConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferConnector <a name="TransferConnector" id="@cdktf/provider-aws.transferConnector.TransferConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector aws_transfer_connector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_connector

transferConnector.TransferConnector(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_role: str,
  url: str,
  as2_config: TransferConnectorAs2Config = None,
  id: str = None,
  logging_role: str = None,
  security_policy_name: str = None,
  sftp_config: TransferConnectorSftpConfig = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.accessRole">access_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#access_role TransferConnector#access_role}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#url TransferConnector#url}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.as2Config">as2_config</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a></code> | as2_config block. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#id TransferConnector#id}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.loggingRole">logging_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#logging_role TransferConnector#logging_role}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.securityPolicyName">security_policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#security_policy_name TransferConnector#security_policy_name}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.sftpConfig">sftp_config</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a></code> | sftp_config block. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#tags TransferConnector#tags}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#tags_all TransferConnector#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_role`<sup>Required</sup> <a name="access_role" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.accessRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#access_role TransferConnector#access_role}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#url TransferConnector#url}.

---

##### `as2_config`<sup>Optional</sup> <a name="as2_config" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.as2Config"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

as2_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#as2_config TransferConnector#as2_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#id TransferConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging_role`<sup>Optional</sup> <a name="logging_role" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.loggingRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#logging_role TransferConnector#logging_role}.

---

##### `security_policy_name`<sup>Optional</sup> <a name="security_policy_name" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.securityPolicyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#security_policy_name TransferConnector#security_policy_name}.

---

##### `sftp_config`<sup>Optional</sup> <a name="sftp_config" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.sftpConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a>

sftp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#sftp_config TransferConnector#sftp_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#tags TransferConnector#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#tags_all TransferConnector#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.putAs2Config">put_as2_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.putSftpConfig">put_sftp_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.resetAs2Config">reset_as2_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.resetLoggingRole">reset_logging_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.resetSecurityPolicyName">reset_security_policy_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.resetSftpConfig">reset_sftp_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferConnector.TransferConnector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.transferConnector.TransferConnector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.transferConnector.TransferConnector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferConnector.TransferConnector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.transferConnector.TransferConnector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.transferConnector.TransferConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.transferConnector.TransferConnector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.transferConnector.TransferConnector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.transferConnector.TransferConnector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.transferConnector.TransferConnector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.transferConnector.TransferConnector.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.transferConnector.TransferConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.transferConnector.TransferConnector.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.transferConnector.TransferConnector.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferConnector.TransferConnector.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferConnector.TransferConnector.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.transferConnector.TransferConnector.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferConnector.TransferConnector.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.transferConnector.TransferConnector.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.transferConnector.TransferConnector.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.transferConnector.TransferConnector.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.transferConnector.TransferConnector.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferConnector.TransferConnector.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_as2_config` <a name="put_as2_config" id="@cdktf/provider-aws.transferConnector.TransferConnector.putAs2Config"></a>

```python
def put_as2_config(
  compression: str,
  encryption_algorithm: str,
  local_profile_id: str,
  mdn_response: str,
  partner_profile_id: str,
  signing_algorithm: str,
  mdn_signing_algorithm: str = None,
  message_subject: str = None
) -> None
```

###### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-aws.transferConnector.TransferConnector.putAs2Config.parameter.compression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#compression TransferConnector#compression}.

---

###### `encryption_algorithm`<sup>Required</sup> <a name="encryption_algorithm" id="@cdktf/provider-aws.transferConnector.TransferConnector.putAs2Config.parameter.encryptionAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#encryption_algorithm TransferConnector#encryption_algorithm}.

---

###### `local_profile_id`<sup>Required</sup> <a name="local_profile_id" id="@cdktf/provider-aws.transferConnector.TransferConnector.putAs2Config.parameter.localProfileId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#local_profile_id TransferConnector#local_profile_id}.

---

###### `mdn_response`<sup>Required</sup> <a name="mdn_response" id="@cdktf/provider-aws.transferConnector.TransferConnector.putAs2Config.parameter.mdnResponse"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#mdn_response TransferConnector#mdn_response}.

---

###### `partner_profile_id`<sup>Required</sup> <a name="partner_profile_id" id="@cdktf/provider-aws.transferConnector.TransferConnector.putAs2Config.parameter.partnerProfileId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#partner_profile_id TransferConnector#partner_profile_id}.

---

###### `signing_algorithm`<sup>Required</sup> <a name="signing_algorithm" id="@cdktf/provider-aws.transferConnector.TransferConnector.putAs2Config.parameter.signingAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#signing_algorithm TransferConnector#signing_algorithm}.

---

###### `mdn_signing_algorithm`<sup>Optional</sup> <a name="mdn_signing_algorithm" id="@cdktf/provider-aws.transferConnector.TransferConnector.putAs2Config.parameter.mdnSigningAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#mdn_signing_algorithm TransferConnector#mdn_signing_algorithm}.

---

###### `message_subject`<sup>Optional</sup> <a name="message_subject" id="@cdktf/provider-aws.transferConnector.TransferConnector.putAs2Config.parameter.messageSubject"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#message_subject TransferConnector#message_subject}.

---

##### `put_sftp_config` <a name="put_sftp_config" id="@cdktf/provider-aws.transferConnector.TransferConnector.putSftpConfig"></a>

```python
def put_sftp_config(
  trusted_host_keys: typing.List[str] = None,
  user_secret_id: str = None
) -> None
```

###### `trusted_host_keys`<sup>Optional</sup> <a name="trusted_host_keys" id="@cdktf/provider-aws.transferConnector.TransferConnector.putSftpConfig.parameter.trustedHostKeys"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#trusted_host_keys TransferConnector#trusted_host_keys}.

---

###### `user_secret_id`<sup>Optional</sup> <a name="user_secret_id" id="@cdktf/provider-aws.transferConnector.TransferConnector.putSftpConfig.parameter.userSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#user_secret_id TransferConnector#user_secret_id}.

---

##### `reset_as2_config` <a name="reset_as2_config" id="@cdktf/provider-aws.transferConnector.TransferConnector.resetAs2Config"></a>

```python
def reset_as2_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.transferConnector.TransferConnector.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_logging_role` <a name="reset_logging_role" id="@cdktf/provider-aws.transferConnector.TransferConnector.resetLoggingRole"></a>

```python
def reset_logging_role() -> None
```

##### `reset_security_policy_name` <a name="reset_security_policy_name" id="@cdktf/provider-aws.transferConnector.TransferConnector.resetSecurityPolicyName"></a>

```python
def reset_security_policy_name() -> None
```

##### `reset_sftp_config` <a name="reset_sftp_config" id="@cdktf/provider-aws.transferConnector.TransferConnector.resetSftpConfig"></a>

```python
def reset_sftp_config() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.transferConnector.TransferConnector.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.transferConnector.TransferConnector.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a TransferConnector resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.transferConnector.TransferConnector.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import transfer_connector

transferConnector.TransferConnector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferConnector.TransferConnector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.transferConnector.TransferConnector.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import transfer_connector

transferConnector.TransferConnector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferConnector.TransferConnector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.transferConnector.TransferConnector.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import transfer_connector

transferConnector.TransferConnector.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferConnector.TransferConnector.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.transferConnector.TransferConnector.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import transfer_connector

transferConnector.TransferConnector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a TransferConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.transferConnector.TransferConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.transferConnector.TransferConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TransferConnector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.transferConnector.TransferConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TransferConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferConnector.TransferConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TransferConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.as2Config">as2_config</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference">TransferConnectorAs2ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.connectorId">connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.sftpConfig">sftp_config</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference">TransferConnectorSftpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.accessRoleInput">access_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.as2ConfigInput">as2_config_input</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.loggingRoleInput">logging_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.securityPolicyNameInput">security_policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.sftpConfigInput">sftp_config_input</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.accessRole">access_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.loggingRole">logging_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.securityPolicyName">security_policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.url">url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `as2_config`<sup>Required</sup> <a name="as2_config" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.as2Config"></a>

```python
as2_config: TransferConnectorAs2ConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference">TransferConnectorAs2ConfigOutputReference</a>

---

##### `connector_id`<sup>Required</sup> <a name="connector_id" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.connectorId"></a>

```python
connector_id: str
```

- *Type:* str

---

##### `sftp_config`<sup>Required</sup> <a name="sftp_config" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.sftpConfig"></a>

```python
sftp_config: TransferConnectorSftpConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference">TransferConnectorSftpConfigOutputReference</a>

---

##### `access_role_input`<sup>Optional</sup> <a name="access_role_input" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.accessRoleInput"></a>

```python
access_role_input: str
```

- *Type:* str

---

##### `as2_config_input`<sup>Optional</sup> <a name="as2_config_input" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.as2ConfigInput"></a>

```python
as2_config_input: TransferConnectorAs2Config
```

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `logging_role_input`<sup>Optional</sup> <a name="logging_role_input" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.loggingRoleInput"></a>

```python
logging_role_input: str
```

- *Type:* str

---

##### `security_policy_name_input`<sup>Optional</sup> <a name="security_policy_name_input" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.securityPolicyNameInput"></a>

```python
security_policy_name_input: str
```

- *Type:* str

---

##### `sftp_config_input`<sup>Optional</sup> <a name="sftp_config_input" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.sftpConfigInput"></a>

```python
sftp_config_input: TransferConnectorSftpConfig
```

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `access_role`<sup>Required</sup> <a name="access_role" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.accessRole"></a>

```python
access_role: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `logging_role`<sup>Required</sup> <a name="logging_role" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.loggingRole"></a>

```python
logging_role: str
```

- *Type:* str

---

##### `security_policy_name`<sup>Required</sup> <a name="security_policy_name" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.securityPolicyName"></a>

```python
security_policy_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.url"></a>

```python
url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TransferConnectorAs2Config <a name="TransferConnectorAs2Config" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_connector

transferConnector.TransferConnectorAs2Config(
  compression: str,
  encryption_algorithm: str,
  local_profile_id: str,
  mdn_response: str,
  partner_profile_id: str,
  signing_algorithm: str,
  mdn_signing_algorithm: str = None,
  message_subject: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.compression">compression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#compression TransferConnector#compression}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.encryptionAlgorithm">encryption_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#encryption_algorithm TransferConnector#encryption_algorithm}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.localProfileId">local_profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#local_profile_id TransferConnector#local_profile_id}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.mdnResponse">mdn_response</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#mdn_response TransferConnector#mdn_response}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.partnerProfileId">partner_profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#partner_profile_id TransferConnector#partner_profile_id}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.signingAlgorithm">signing_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#signing_algorithm TransferConnector#signing_algorithm}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.mdnSigningAlgorithm">mdn_signing_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#mdn_signing_algorithm TransferConnector#mdn_signing_algorithm}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.messageSubject">message_subject</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#message_subject TransferConnector#message_subject}. |

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.compression"></a>

```python
compression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#compression TransferConnector#compression}.

---

##### `encryption_algorithm`<sup>Required</sup> <a name="encryption_algorithm" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.encryptionAlgorithm"></a>

```python
encryption_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#encryption_algorithm TransferConnector#encryption_algorithm}.

---

##### `local_profile_id`<sup>Required</sup> <a name="local_profile_id" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.localProfileId"></a>

```python
local_profile_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#local_profile_id TransferConnector#local_profile_id}.

---

##### `mdn_response`<sup>Required</sup> <a name="mdn_response" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.mdnResponse"></a>

```python
mdn_response: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#mdn_response TransferConnector#mdn_response}.

---

##### `partner_profile_id`<sup>Required</sup> <a name="partner_profile_id" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.partnerProfileId"></a>

```python
partner_profile_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#partner_profile_id TransferConnector#partner_profile_id}.

---

##### `signing_algorithm`<sup>Required</sup> <a name="signing_algorithm" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.signingAlgorithm"></a>

```python
signing_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#signing_algorithm TransferConnector#signing_algorithm}.

---

##### `mdn_signing_algorithm`<sup>Optional</sup> <a name="mdn_signing_algorithm" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.mdnSigningAlgorithm"></a>

```python
mdn_signing_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#mdn_signing_algorithm TransferConnector#mdn_signing_algorithm}.

---

##### `message_subject`<sup>Optional</sup> <a name="message_subject" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.messageSubject"></a>

```python
message_subject: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#message_subject TransferConnector#message_subject}.

---

### TransferConnectorConfig <a name="TransferConnectorConfig" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_connector

transferConnector.TransferConnectorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_role: str,
  url: str,
  as2_config: TransferConnectorAs2Config = None,
  id: str = None,
  logging_role: str = None,
  security_policy_name: str = None,
  sftp_config: TransferConnectorSftpConfig = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.accessRole">access_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#access_role TransferConnector#access_role}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#url TransferConnector#url}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.as2Config">as2_config</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a></code> | as2_config block. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#id TransferConnector#id}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.loggingRole">logging_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#logging_role TransferConnector#logging_role}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.securityPolicyName">security_policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#security_policy_name TransferConnector#security_policy_name}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.sftpConfig">sftp_config</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a></code> | sftp_config block. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#tags TransferConnector#tags}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#tags_all TransferConnector#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_role`<sup>Required</sup> <a name="access_role" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.accessRole"></a>

```python
access_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#access_role TransferConnector#access_role}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#url TransferConnector#url}.

---

##### `as2_config`<sup>Optional</sup> <a name="as2_config" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.as2Config"></a>

```python
as2_config: TransferConnectorAs2Config
```

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

as2_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#as2_config TransferConnector#as2_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#id TransferConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging_role`<sup>Optional</sup> <a name="logging_role" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.loggingRole"></a>

```python
logging_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#logging_role TransferConnector#logging_role}.

---

##### `security_policy_name`<sup>Optional</sup> <a name="security_policy_name" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.securityPolicyName"></a>

```python
security_policy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#security_policy_name TransferConnector#security_policy_name}.

---

##### `sftp_config`<sup>Optional</sup> <a name="sftp_config" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.sftpConfig"></a>

```python
sftp_config: TransferConnectorSftpConfig
```

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a>

sftp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#sftp_config TransferConnector#sftp_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#tags TransferConnector#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#tags_all TransferConnector#tags_all}.

---

### TransferConnectorSftpConfig <a name="TransferConnectorSftpConfig" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_connector

transferConnector.TransferConnectorSftpConfig(
  trusted_host_keys: typing.List[str] = None,
  user_secret_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig.property.trustedHostKeys">trusted_host_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#trusted_host_keys TransferConnector#trusted_host_keys}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig.property.userSecretId">user_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#user_secret_id TransferConnector#user_secret_id}. |

---

##### `trusted_host_keys`<sup>Optional</sup> <a name="trusted_host_keys" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig.property.trustedHostKeys"></a>

```python
trusted_host_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#trusted_host_keys TransferConnector#trusted_host_keys}.

---

##### `user_secret_id`<sup>Optional</sup> <a name="user_secret_id" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig.property.userSecretId"></a>

```python
user_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/transfer_connector#user_secret_id TransferConnector#user_secret_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### TransferConnectorAs2ConfigOutputReference <a name="TransferConnectorAs2ConfigOutputReference" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_connector

transferConnector.TransferConnectorAs2ConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMdnSigningAlgorithm">reset_mdn_signing_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMessageSubject">reset_message_subject</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mdn_signing_algorithm` <a name="reset_mdn_signing_algorithm" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMdnSigningAlgorithm"></a>

```python
def reset_mdn_signing_algorithm() -> None
```

##### `reset_message_subject` <a name="reset_message_subject" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMessageSubject"></a>

```python
def reset_message_subject() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.encryptionAlgorithmInput">encryption_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.localProfileIdInput">local_profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnResponseInput">mdn_response_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnSigningAlgorithmInput">mdn_signing_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.messageSubjectInput">message_subject_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.partnerProfileIdInput">partner_profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.signingAlgorithmInput">signing_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.encryptionAlgorithm">encryption_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.localProfileId">local_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnResponse">mdn_response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnSigningAlgorithm">mdn_signing_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.messageSubject">message_subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.partnerProfileId">partner_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.signingAlgorithm">signing_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.compressionInput"></a>

```python
compression_input: str
```

- *Type:* str

---

##### `encryption_algorithm_input`<sup>Optional</sup> <a name="encryption_algorithm_input" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.encryptionAlgorithmInput"></a>

```python
encryption_algorithm_input: str
```

- *Type:* str

---

##### `local_profile_id_input`<sup>Optional</sup> <a name="local_profile_id_input" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.localProfileIdInput"></a>

```python
local_profile_id_input: str
```

- *Type:* str

---

##### `mdn_response_input`<sup>Optional</sup> <a name="mdn_response_input" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnResponseInput"></a>

```python
mdn_response_input: str
```

- *Type:* str

---

##### `mdn_signing_algorithm_input`<sup>Optional</sup> <a name="mdn_signing_algorithm_input" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnSigningAlgorithmInput"></a>

```python
mdn_signing_algorithm_input: str
```

- *Type:* str

---

##### `message_subject_input`<sup>Optional</sup> <a name="message_subject_input" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.messageSubjectInput"></a>

```python
message_subject_input: str
```

- *Type:* str

---

##### `partner_profile_id_input`<sup>Optional</sup> <a name="partner_profile_id_input" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.partnerProfileIdInput"></a>

```python
partner_profile_id_input: str
```

- *Type:* str

---

##### `signing_algorithm_input`<sup>Optional</sup> <a name="signing_algorithm_input" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.signingAlgorithmInput"></a>

```python
signing_algorithm_input: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `encryption_algorithm`<sup>Required</sup> <a name="encryption_algorithm" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.encryptionAlgorithm"></a>

```python
encryption_algorithm: str
```

- *Type:* str

---

##### `local_profile_id`<sup>Required</sup> <a name="local_profile_id" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.localProfileId"></a>

```python
local_profile_id: str
```

- *Type:* str

---

##### `mdn_response`<sup>Required</sup> <a name="mdn_response" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnResponse"></a>

```python
mdn_response: str
```

- *Type:* str

---

##### `mdn_signing_algorithm`<sup>Required</sup> <a name="mdn_signing_algorithm" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnSigningAlgorithm"></a>

```python
mdn_signing_algorithm: str
```

- *Type:* str

---

##### `message_subject`<sup>Required</sup> <a name="message_subject" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.messageSubject"></a>

```python
message_subject: str
```

- *Type:* str

---

##### `partner_profile_id`<sup>Required</sup> <a name="partner_profile_id" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.partnerProfileId"></a>

```python
partner_profile_id: str
```

- *Type:* str

---

##### `signing_algorithm`<sup>Required</sup> <a name="signing_algorithm" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.signingAlgorithm"></a>

```python
signing_algorithm: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.internalValue"></a>

```python
internal_value: TransferConnectorAs2Config
```

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

---


### TransferConnectorSftpConfigOutputReference <a name="TransferConnectorSftpConfigOutputReference" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_connector

transferConnector.TransferConnectorSftpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.resetTrustedHostKeys">reset_trusted_host_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.resetUserSecretId">reset_user_secret_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_trusted_host_keys` <a name="reset_trusted_host_keys" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.resetTrustedHostKeys"></a>

```python
def reset_trusted_host_keys() -> None
```

##### `reset_user_secret_id` <a name="reset_user_secret_id" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.resetUserSecretId"></a>

```python
def reset_user_secret_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.trustedHostKeysInput">trusted_host_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.userSecretIdInput">user_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.trustedHostKeys">trusted_host_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.userSecretId">user_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `trusted_host_keys_input`<sup>Optional</sup> <a name="trusted_host_keys_input" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.trustedHostKeysInput"></a>

```python
trusted_host_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_secret_id_input`<sup>Optional</sup> <a name="user_secret_id_input" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.userSecretIdInput"></a>

```python
user_secret_id_input: str
```

- *Type:* str

---

##### `trusted_host_keys`<sup>Required</sup> <a name="trusted_host_keys" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.trustedHostKeys"></a>

```python
trusted_host_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_secret_id`<sup>Required</sup> <a name="user_secret_id" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.userSecretId"></a>

```python
user_secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfigOutputReference.property.internalValue"></a>

```python
internal_value: TransferConnectorSftpConfig
```

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a>

---



