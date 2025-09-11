# `workspaceswebIpAccessSettings` Submodule <a name="`workspaceswebIpAccessSettings` Submodule" id="@cdktf/provider-aws.workspaceswebIpAccessSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebIpAccessSettings <a name="WorkspaceswebIpAccessSettings" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_ip_access_settings aws_workspacesweb_ip_access_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_ip_access_settings

workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  additional_encryption_context: typing.Mapping[str] = None,
  customer_managed_key: str = None,
  description: str = None,
  ip_rule: typing.Union[IResolvable, typing.List[WorkspaceswebIpAccessSettingsIpRule]] = None,
  region: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_ip_access_settings#display_name WorkspaceswebIpAccessSettings#display_name}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.additionalEncryptionContext">additional_encryption_context</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_ip_access_settings#additional_encryption_context WorkspaceswebIpAccessSettings#additional_encryption_context}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.customerManagedKey">customer_managed_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_ip_access_settings#customer_managed_key WorkspaceswebIpAccessSettings#customer_managed_key}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_ip_access_settings#description WorkspaceswebIpAccessSettings#description}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.ipRule">ip_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule">WorkspaceswebIpAccessSettingsIpRule</a>]]</code> | ip_rule block. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_ip_access_settings#tags WorkspaceswebIpAccessSettings#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_ip_access_settings#display_name WorkspaceswebIpAccessSettings#display_name}.

---

##### `additional_encryption_context`<sup>Optional</sup> <a name="additional_encryption_context" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.additionalEncryptionContext"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_ip_access_settings#additional_encryption_context WorkspaceswebIpAccessSettings#additional_encryption_context}.

---

##### `customer_managed_key`<sup>Optional</sup> <a name="customer_managed_key" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.customerManagedKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_ip_access_settings#customer_managed_key WorkspaceswebIpAccessSettings#customer_managed_key}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_ip_access_settings#description WorkspaceswebIpAccessSettings#description}.

---

##### `ip_rule`<sup>Optional</sup> <a name="ip_rule" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.ipRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule">WorkspaceswebIpAccessSettingsIpRule</a>]]

ip_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_ip_access_settings#ip_rule WorkspaceswebIpAccessSettings#ip_rule}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_ip_access_settings#region WorkspaceswebIpAccessSettings#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_ip_access_settings#tags WorkspaceswebIpAccessSettings#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.putIpRule">put_ip_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetAdditionalEncryptionContext">reset_additional_encryption_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetCustomerManagedKey">reset_customer_managed_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetIpRule">reset_ip_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ip_rule` <a name="put_ip_rule" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.putIpRule"></a>

```python
def put_ip_rule(
  value: typing.Union[IResolvable, typing.List[WorkspaceswebIpAccessSettingsIpRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.putIpRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule">WorkspaceswebIpAccessSettingsIpRule</a>]]

---

##### `reset_additional_encryption_context` <a name="reset_additional_encryption_context" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetAdditionalEncryptionContext"></a>

```python
def reset_additional_encryption_context() -> None
```

##### `reset_customer_managed_key` <a name="reset_customer_managed_key" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetCustomerManagedKey"></a>

```python
def reset_customer_managed_key() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_ip_rule` <a name="reset_ip_rule" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetIpRule"></a>

```python
def reset_ip_rule() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WorkspaceswebIpAccessSettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_ip_access_settings

workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_ip_access_settings

workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_ip_access_settings

workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_ip_access_settings

workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WorkspaceswebIpAccessSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkspaceswebIpAccessSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkspaceswebIpAccessSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_ip_access_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WorkspaceswebIpAccessSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.associatedPortalArns">associated_portal_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.ipAccessSettingsArn">ip_access_settings_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.ipRule">ip_rule</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList">WorkspaceswebIpAccessSettingsIpRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.additionalEncryptionContextInput">additional_encryption_context_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.customerManagedKeyInput">customer_managed_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.ipRuleInput">ip_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule">WorkspaceswebIpAccessSettingsIpRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.additionalEncryptionContext">additional_encryption_context</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.customerManagedKey">customer_managed_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `associated_portal_arns`<sup>Required</sup> <a name="associated_portal_arns" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.associatedPortalArns"></a>

```python
associated_portal_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_access_settings_arn`<sup>Required</sup> <a name="ip_access_settings_arn" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.ipAccessSettingsArn"></a>

```python
ip_access_settings_arn: str
```

- *Type:* str

---

##### `ip_rule`<sup>Required</sup> <a name="ip_rule" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.ipRule"></a>

```python
ip_rule: WorkspaceswebIpAccessSettingsIpRuleList
```

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList">WorkspaceswebIpAccessSettingsIpRuleList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `additional_encryption_context_input`<sup>Optional</sup> <a name="additional_encryption_context_input" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.additionalEncryptionContextInput"></a>

```python
additional_encryption_context_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `customer_managed_key_input`<sup>Optional</sup> <a name="customer_managed_key_input" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.customerManagedKeyInput"></a>

```python
customer_managed_key_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `ip_rule_input`<sup>Optional</sup> <a name="ip_rule_input" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.ipRuleInput"></a>

```python
ip_rule_input: typing.Union[IResolvable, typing.List[WorkspaceswebIpAccessSettingsIpRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule">WorkspaceswebIpAccessSettingsIpRule</a>]]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `additional_encryption_context`<sup>Required</sup> <a name="additional_encryption_context" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.additionalEncryptionContext"></a>

```python
additional_encryption_context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `customer_managed_key`<sup>Required</sup> <a name="customer_managed_key" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.customerManagedKey"></a>

```python
customer_managed_key: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebIpAccessSettingsConfig <a name="WorkspaceswebIpAccessSettingsConfig" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_ip_access_settings

workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  additional_encryption_context: typing.Mapping[str] = None,
  customer_managed_key: str = None,
  description: str = None,
  ip_rule: typing.Union[IResolvable, typing.List[WorkspaceswebIpAccessSettingsIpRule]] = None,
  region: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_ip_access_settings#display_name WorkspaceswebIpAccessSettings#display_name}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.additionalEncryptionContext">additional_encryption_context</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_ip_access_settings#additional_encryption_context WorkspaceswebIpAccessSettings#additional_encryption_context}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.customerManagedKey">customer_managed_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_ip_access_settings#customer_managed_key WorkspaceswebIpAccessSettings#customer_managed_key}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_ip_access_settings#description WorkspaceswebIpAccessSettings#description}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.ipRule">ip_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule">WorkspaceswebIpAccessSettingsIpRule</a>]]</code> | ip_rule block. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_ip_access_settings#tags WorkspaceswebIpAccessSettings#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_ip_access_settings#display_name WorkspaceswebIpAccessSettings#display_name}.

---

##### `additional_encryption_context`<sup>Optional</sup> <a name="additional_encryption_context" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.additionalEncryptionContext"></a>

```python
additional_encryption_context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_ip_access_settings#additional_encryption_context WorkspaceswebIpAccessSettings#additional_encryption_context}.

---

##### `customer_managed_key`<sup>Optional</sup> <a name="customer_managed_key" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.customerManagedKey"></a>

```python
customer_managed_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_ip_access_settings#customer_managed_key WorkspaceswebIpAccessSettings#customer_managed_key}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_ip_access_settings#description WorkspaceswebIpAccessSettings#description}.

---

##### `ip_rule`<sup>Optional</sup> <a name="ip_rule" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.ipRule"></a>

```python
ip_rule: typing.Union[IResolvable, typing.List[WorkspaceswebIpAccessSettingsIpRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule">WorkspaceswebIpAccessSettingsIpRule</a>]]

ip_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_ip_access_settings#ip_rule WorkspaceswebIpAccessSettings#ip_rule}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_ip_access_settings#region WorkspaceswebIpAccessSettings#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_ip_access_settings#tags WorkspaceswebIpAccessSettings#tags}.

---

### WorkspaceswebIpAccessSettingsIpRule <a name="WorkspaceswebIpAccessSettingsIpRule" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_ip_access_settings

workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule(
  ip_range: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule.property.ipRange">ip_range</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_ip_access_settings#ip_range WorkspaceswebIpAccessSettings#ip_range}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_ip_access_settings#description WorkspaceswebIpAccessSettings#description}. |

---

##### `ip_range`<sup>Required</sup> <a name="ip_range" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule.property.ipRange"></a>

```python
ip_range: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_ip_access_settings#ip_range WorkspaceswebIpAccessSettings#ip_range}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_ip_access_settings#description WorkspaceswebIpAccessSettings#description}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceswebIpAccessSettingsIpRuleList <a name="WorkspaceswebIpAccessSettingsIpRuleList" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_ip_access_settings

workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspaceswebIpAccessSettingsIpRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule">WorkspaceswebIpAccessSettingsIpRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkspaceswebIpAccessSettingsIpRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule">WorkspaceswebIpAccessSettingsIpRule</a>]]

---


### WorkspaceswebIpAccessSettingsIpRuleOutputReference <a name="WorkspaceswebIpAccessSettingsIpRuleOutputReference" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_ip_access_settings

workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.ipRangeInput">ip_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.ipRange">ip_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule">WorkspaceswebIpAccessSettingsIpRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `ip_range_input`<sup>Optional</sup> <a name="ip_range_input" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.ipRangeInput"></a>

```python
ip_range_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `ip_range`<sup>Required</sup> <a name="ip_range" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.ipRange"></a>

```python
ip_range: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkspaceswebIpAccessSettingsIpRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule">WorkspaceswebIpAccessSettingsIpRule</a>]

---



