# `workspaceswebPortal` Submodule <a name="`workspaceswebPortal` Submodule" id="@cdktf/provider-aws.workspaceswebPortal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebPortal <a name="WorkspaceswebPortal" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal aws_workspacesweb_portal}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_portal

workspaceswebPortal.WorkspaceswebPortal(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  additional_encryption_context: typing.Mapping[str] = None,
  authentication_type: str = None,
  browser_settings_arn: str = None,
  customer_managed_key: str = None,
  display_name: str = None,
  instance_type: str = None,
  max_concurrent_sessions: typing.Union[int, float] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: WorkspaceswebPortalTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.additionalEncryptionContext">additional_encryption_context</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#additional_encryption_context WorkspaceswebPortal#additional_encryption_context}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.authenticationType">authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#authentication_type WorkspaceswebPortal#authentication_type}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.browserSettingsArn">browser_settings_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#browser_settings_arn WorkspaceswebPortal#browser_settings_arn}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.customerManagedKey">customer_managed_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#customer_managed_key WorkspaceswebPortal#customer_managed_key}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#display_name WorkspaceswebPortal#display_name}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#instance_type WorkspaceswebPortal#instance_type}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.maxConcurrentSessions">max_concurrent_sessions</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#max_concurrent_sessions WorkspaceswebPortal#max_concurrent_sessions}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#tags WorkspaceswebPortal#tags}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts">WorkspaceswebPortalTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `additional_encryption_context`<sup>Optional</sup> <a name="additional_encryption_context" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.additionalEncryptionContext"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#additional_encryption_context WorkspaceswebPortal#additional_encryption_context}.

---

##### `authentication_type`<sup>Optional</sup> <a name="authentication_type" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.authenticationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#authentication_type WorkspaceswebPortal#authentication_type}.

---

##### `browser_settings_arn`<sup>Optional</sup> <a name="browser_settings_arn" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.browserSettingsArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#browser_settings_arn WorkspaceswebPortal#browser_settings_arn}.

---

##### `customer_managed_key`<sup>Optional</sup> <a name="customer_managed_key" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.customerManagedKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#customer_managed_key WorkspaceswebPortal#customer_managed_key}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#display_name WorkspaceswebPortal#display_name}.

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#instance_type WorkspaceswebPortal#instance_type}.

---

##### `max_concurrent_sessions`<sup>Optional</sup> <a name="max_concurrent_sessions" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.maxConcurrentSessions"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#max_concurrent_sessions WorkspaceswebPortal#max_concurrent_sessions}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#region WorkspaceswebPortal#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#tags WorkspaceswebPortal#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts">WorkspaceswebPortalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#timeouts WorkspaceswebPortal#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetAdditionalEncryptionContext">reset_additional_encryption_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetAuthenticationType">reset_authentication_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetBrowserSettingsArn">reset_browser_settings_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetCustomerManagedKey">reset_customer_managed_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetMaxConcurrentSessions">reset_max_concurrent_sessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#create WorkspaceswebPortal#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#delete WorkspaceswebPortal#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#update WorkspaceswebPortal#update}

---

##### `reset_additional_encryption_context` <a name="reset_additional_encryption_context" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetAdditionalEncryptionContext"></a>

```python
def reset_additional_encryption_context() -> None
```

##### `reset_authentication_type` <a name="reset_authentication_type" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetAuthenticationType"></a>

```python
def reset_authentication_type() -> None
```

##### `reset_browser_settings_arn` <a name="reset_browser_settings_arn" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetBrowserSettingsArn"></a>

```python
def reset_browser_settings_arn() -> None
```

##### `reset_customer_managed_key` <a name="reset_customer_managed_key" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetCustomerManagedKey"></a>

```python
def reset_customer_managed_key() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_max_concurrent_sessions` <a name="reset_max_concurrent_sessions" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetMaxConcurrentSessions"></a>

```python
def reset_max_concurrent_sessions() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WorkspaceswebPortal resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_portal

workspaceswebPortal.WorkspaceswebPortal.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_portal

workspaceswebPortal.WorkspaceswebPortal.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_portal

workspaceswebPortal.WorkspaceswebPortal.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_portal

workspaceswebPortal.WorkspaceswebPortal.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WorkspaceswebPortal resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkspaceswebPortal to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkspaceswebPortal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WorkspaceswebPortal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.browserType">browser_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.creationDate">creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.dataProtectionSettingsArn">data_protection_settings_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.ipAccessSettingsArn">ip_access_settings_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.networkSettingsArn">network_settings_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.portalArn">portal_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.portalEndpoint">portal_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.portalStatus">portal_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.rendererType">renderer_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.sessionLoggerArn">session_logger_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.statusReason">status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference">WorkspaceswebPortalTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.trustStoreArn">trust_store_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.userAccessLoggingSettingsArn">user_access_logging_settings_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.userSettingsArn">user_settings_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.additionalEncryptionContextInput">additional_encryption_context_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.authenticationTypeInput">authentication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.browserSettingsArnInput">browser_settings_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.customerManagedKeyInput">customer_managed_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.maxConcurrentSessionsInput">max_concurrent_sessions_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts">WorkspaceswebPortalTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.additionalEncryptionContext">additional_encryption_context</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.authenticationType">authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.browserSettingsArn">browser_settings_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.customerManagedKey">customer_managed_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.maxConcurrentSessions">max_concurrent_sessions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `browser_type`<sup>Required</sup> <a name="browser_type" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.browserType"></a>

```python
browser_type: str
```

- *Type:* str

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.creationDate"></a>

```python
creation_date: str
```

- *Type:* str

---

##### `data_protection_settings_arn`<sup>Required</sup> <a name="data_protection_settings_arn" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.dataProtectionSettingsArn"></a>

```python
data_protection_settings_arn: str
```

- *Type:* str

---

##### `ip_access_settings_arn`<sup>Required</sup> <a name="ip_access_settings_arn" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.ipAccessSettingsArn"></a>

```python
ip_access_settings_arn: str
```

- *Type:* str

---

##### `network_settings_arn`<sup>Required</sup> <a name="network_settings_arn" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.networkSettingsArn"></a>

```python
network_settings_arn: str
```

- *Type:* str

---

##### `portal_arn`<sup>Required</sup> <a name="portal_arn" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.portalArn"></a>

```python
portal_arn: str
```

- *Type:* str

---

##### `portal_endpoint`<sup>Required</sup> <a name="portal_endpoint" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.portalEndpoint"></a>

```python
portal_endpoint: str
```

- *Type:* str

---

##### `portal_status`<sup>Required</sup> <a name="portal_status" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.portalStatus"></a>

```python
portal_status: str
```

- *Type:* str

---

##### `renderer_type`<sup>Required</sup> <a name="renderer_type" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.rendererType"></a>

```python
renderer_type: str
```

- *Type:* str

---

##### `session_logger_arn`<sup>Required</sup> <a name="session_logger_arn" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.sessionLoggerArn"></a>

```python
session_logger_arn: str
```

- *Type:* str

---

##### `status_reason`<sup>Required</sup> <a name="status_reason" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.statusReason"></a>

```python
status_reason: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.timeouts"></a>

```python
timeouts: WorkspaceswebPortalTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference">WorkspaceswebPortalTimeoutsOutputReference</a>

---

##### `trust_store_arn`<sup>Required</sup> <a name="trust_store_arn" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.trustStoreArn"></a>

```python
trust_store_arn: str
```

- *Type:* str

---

##### `user_access_logging_settings_arn`<sup>Required</sup> <a name="user_access_logging_settings_arn" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.userAccessLoggingSettingsArn"></a>

```python
user_access_logging_settings_arn: str
```

- *Type:* str

---

##### `user_settings_arn`<sup>Required</sup> <a name="user_settings_arn" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.userSettingsArn"></a>

```python
user_settings_arn: str
```

- *Type:* str

---

##### `additional_encryption_context_input`<sup>Optional</sup> <a name="additional_encryption_context_input" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.additionalEncryptionContextInput"></a>

```python
additional_encryption_context_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `authentication_type_input`<sup>Optional</sup> <a name="authentication_type_input" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.authenticationTypeInput"></a>

```python
authentication_type_input: str
```

- *Type:* str

---

##### `browser_settings_arn_input`<sup>Optional</sup> <a name="browser_settings_arn_input" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.browserSettingsArnInput"></a>

```python
browser_settings_arn_input: str
```

- *Type:* str

---

##### `customer_managed_key_input`<sup>Optional</sup> <a name="customer_managed_key_input" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.customerManagedKeyInput"></a>

```python
customer_managed_key_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `max_concurrent_sessions_input`<sup>Optional</sup> <a name="max_concurrent_sessions_input" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.maxConcurrentSessionsInput"></a>

```python
max_concurrent_sessions_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, WorkspaceswebPortalTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts">WorkspaceswebPortalTimeouts</a>]

---

##### `additional_encryption_context`<sup>Required</sup> <a name="additional_encryption_context" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.additionalEncryptionContext"></a>

```python
additional_encryption_context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

---

##### `browser_settings_arn`<sup>Required</sup> <a name="browser_settings_arn" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.browserSettingsArn"></a>

```python
browser_settings_arn: str
```

- *Type:* str

---

##### `customer_managed_key`<sup>Required</sup> <a name="customer_managed_key" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.customerManagedKey"></a>

```python
customer_managed_key: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `max_concurrent_sessions`<sup>Required</sup> <a name="max_concurrent_sessions" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.maxConcurrentSessions"></a>

```python
max_concurrent_sessions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebPortalConfig <a name="WorkspaceswebPortalConfig" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_portal

workspaceswebPortal.WorkspaceswebPortalConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  additional_encryption_context: typing.Mapping[str] = None,
  authentication_type: str = None,
  browser_settings_arn: str = None,
  customer_managed_key: str = None,
  display_name: str = None,
  instance_type: str = None,
  max_concurrent_sessions: typing.Union[int, float] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: WorkspaceswebPortalTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.additionalEncryptionContext">additional_encryption_context</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#additional_encryption_context WorkspaceswebPortal#additional_encryption_context}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.authenticationType">authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#authentication_type WorkspaceswebPortal#authentication_type}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.browserSettingsArn">browser_settings_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#browser_settings_arn WorkspaceswebPortal#browser_settings_arn}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.customerManagedKey">customer_managed_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#customer_managed_key WorkspaceswebPortal#customer_managed_key}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#display_name WorkspaceswebPortal#display_name}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#instance_type WorkspaceswebPortal#instance_type}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.maxConcurrentSessions">max_concurrent_sessions</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#max_concurrent_sessions WorkspaceswebPortal#max_concurrent_sessions}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#tags WorkspaceswebPortal#tags}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts">WorkspaceswebPortalTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `additional_encryption_context`<sup>Optional</sup> <a name="additional_encryption_context" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.additionalEncryptionContext"></a>

```python
additional_encryption_context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#additional_encryption_context WorkspaceswebPortal#additional_encryption_context}.

---

##### `authentication_type`<sup>Optional</sup> <a name="authentication_type" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#authentication_type WorkspaceswebPortal#authentication_type}.

---

##### `browser_settings_arn`<sup>Optional</sup> <a name="browser_settings_arn" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.browserSettingsArn"></a>

```python
browser_settings_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#browser_settings_arn WorkspaceswebPortal#browser_settings_arn}.

---

##### `customer_managed_key`<sup>Optional</sup> <a name="customer_managed_key" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.customerManagedKey"></a>

```python
customer_managed_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#customer_managed_key WorkspaceswebPortal#customer_managed_key}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#display_name WorkspaceswebPortal#display_name}.

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#instance_type WorkspaceswebPortal#instance_type}.

---

##### `max_concurrent_sessions`<sup>Optional</sup> <a name="max_concurrent_sessions" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.maxConcurrentSessions"></a>

```python
max_concurrent_sessions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#max_concurrent_sessions WorkspaceswebPortal#max_concurrent_sessions}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#region WorkspaceswebPortal#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#tags WorkspaceswebPortal#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.timeouts"></a>

```python
timeouts: WorkspaceswebPortalTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts">WorkspaceswebPortalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#timeouts WorkspaceswebPortal#timeouts}

---

### WorkspaceswebPortalTimeouts <a name="WorkspaceswebPortalTimeouts" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_portal

workspaceswebPortal.WorkspaceswebPortalTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#create WorkspaceswebPortal#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#delete WorkspaceswebPortal#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_portal#update WorkspaceswebPortal#update}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceswebPortalTimeoutsOutputReference <a name="WorkspaceswebPortalTimeoutsOutputReference" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_portal

workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts">WorkspaceswebPortalTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkspaceswebPortalTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts">WorkspaceswebPortalTimeouts</a>]

---



