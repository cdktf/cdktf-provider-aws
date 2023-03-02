# `guarddutyMember` Submodule <a name="`guarddutyMember` Submodule" id="@cdktf/provider-aws.guarddutyMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyMember <a name="GuarddutyMember" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member aws_guardduty_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import guardduty_member

guarddutyMember.GuarddutyMember(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  detector_id: str,
  email: str,
  disable_email_notification: typing.Union[bool, IResolvable] = None,
  id: str = None,
  invitation_message: str = None,
  invite: typing.Union[bool, IResolvable] = None,
  timeouts: GuarddutyMemberTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#account_id GuarddutyMember#account_id}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.detectorId">detector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#detector_id GuarddutyMember#detector_id}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#email GuarddutyMember#email}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.disableEmailNotification">disable_email_notification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#disable_email_notification GuarddutyMember#disable_email_notification}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#id GuarddutyMember#id}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.invitationMessage">invitation_message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#invitation_message GuarddutyMember#invitation_message}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.invite">invite</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#invite GuarddutyMember#invite}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeouts">GuarddutyMemberTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#account_id GuarddutyMember#account_id}.

---

##### `detector_id`<sup>Required</sup> <a name="detector_id" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.detectorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#detector_id GuarddutyMember#detector_id}.

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.email"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#email GuarddutyMember#email}.

---

##### `disable_email_notification`<sup>Optional</sup> <a name="disable_email_notification" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.disableEmailNotification"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#disable_email_notification GuarddutyMember#disable_email_notification}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#id GuarddutyMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `invitation_message`<sup>Optional</sup> <a name="invitation_message" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.invitationMessage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#invitation_message GuarddutyMember#invitation_message}.

---

##### `invite`<sup>Optional</sup> <a name="invite" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.invite"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#invite GuarddutyMember#invite}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeouts">GuarddutyMemberTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#timeouts GuarddutyMember#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.resetDisableEmailNotification">reset_disable_email_notification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.resetInvitationMessage">reset_invitation_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.resetInvite">reset_invite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#create GuarddutyMember#create}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#update GuarddutyMember#update}.

---

##### `reset_disable_email_notification` <a name="reset_disable_email_notification" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.resetDisableEmailNotification"></a>

```python
def reset_disable_email_notification() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_invitation_message` <a name="reset_invitation_message" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.resetInvitationMessage"></a>

```python
def reset_invitation_message() -> None
```

##### `reset_invite` <a name="reset_invite" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.resetInvite"></a>

```python
def reset_invite() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import guardduty_member

guarddutyMember.GuarddutyMember.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import guardduty_member

guarddutyMember.GuarddutyMember.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import guardduty_member

guarddutyMember.GuarddutyMember.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.relationshipStatus">relationship_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference">GuarddutyMemberTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.detectorIdInput">detector_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.disableEmailNotificationInput">disable_email_notification_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.invitationMessageInput">invitation_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.inviteInput">invite_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeouts">GuarddutyMemberTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.detectorId">detector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.disableEmailNotification">disable_email_notification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.invitationMessage">invitation_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.invite">invite</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `relationship_status`<sup>Required</sup> <a name="relationship_status" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.relationshipStatus"></a>

```python
relationship_status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.timeouts"></a>

```python
timeouts: GuarddutyMemberTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference">GuarddutyMemberTimeoutsOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `detector_id_input`<sup>Optional</sup> <a name="detector_id_input" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.detectorIdInput"></a>

```python
detector_id_input: str
```

- *Type:* str

---

##### `disable_email_notification_input`<sup>Optional</sup> <a name="disable_email_notification_input" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.disableEmailNotificationInput"></a>

```python
disable_email_notification_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `invitation_message_input`<sup>Optional</sup> <a name="invitation_message_input" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.invitationMessageInput"></a>

```python
invitation_message_input: str
```

- *Type:* str

---

##### `invite_input`<sup>Optional</sup> <a name="invite_input" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.inviteInput"></a>

```python
invite_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[GuarddutyMemberTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeouts">GuarddutyMemberTimeouts</a>, cdktf.IResolvable]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `detector_id`<sup>Required</sup> <a name="detector_id" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.detectorId"></a>

```python
detector_id: str
```

- *Type:* str

---

##### `disable_email_notification`<sup>Required</sup> <a name="disable_email_notification" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.disableEmailNotification"></a>

```python
disable_email_notification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `invitation_message`<sup>Required</sup> <a name="invitation_message" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.invitationMessage"></a>

```python
invitation_message: str
```

- *Type:* str

---

##### `invite`<sup>Required</sup> <a name="invite" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.invite"></a>

```python
invite: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMember.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyMemberConfig <a name="GuarddutyMemberConfig" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import guardduty_member

guarddutyMember.GuarddutyMemberConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  detector_id: str,
  email: str,
  disable_email_notification: typing.Union[bool, IResolvable] = None,
  id: str = None,
  invitation_message: str = None,
  invite: typing.Union[bool, IResolvable] = None,
  timeouts: GuarddutyMemberTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#account_id GuarddutyMember#account_id}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberConfig.property.detectorId">detector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#detector_id GuarddutyMember#detector_id}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberConfig.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#email GuarddutyMember#email}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberConfig.property.disableEmailNotification">disable_email_notification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#disable_email_notification GuarddutyMember#disable_email_notification}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#id GuarddutyMember#id}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberConfig.property.invitationMessage">invitation_message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#invitation_message GuarddutyMember#invitation_message}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberConfig.property.invite">invite</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#invite GuarddutyMember#invite}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeouts">GuarddutyMemberTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#account_id GuarddutyMember#account_id}.

---

##### `detector_id`<sup>Required</sup> <a name="detector_id" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberConfig.property.detectorId"></a>

```python
detector_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#detector_id GuarddutyMember#detector_id}.

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberConfig.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#email GuarddutyMember#email}.

---

##### `disable_email_notification`<sup>Optional</sup> <a name="disable_email_notification" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberConfig.property.disableEmailNotification"></a>

```python
disable_email_notification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#disable_email_notification GuarddutyMember#disable_email_notification}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#id GuarddutyMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `invitation_message`<sup>Optional</sup> <a name="invitation_message" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberConfig.property.invitationMessage"></a>

```python
invitation_message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#invitation_message GuarddutyMember#invitation_message}.

---

##### `invite`<sup>Optional</sup> <a name="invite" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberConfig.property.invite"></a>

```python
invite: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#invite GuarddutyMember#invite}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberConfig.property.timeouts"></a>

```python
timeouts: GuarddutyMemberTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeouts">GuarddutyMemberTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#timeouts GuarddutyMember#timeouts}

---

### GuarddutyMemberTimeouts <a name="GuarddutyMemberTimeouts" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import guardduty_member

guarddutyMember.GuarddutyMemberTimeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#create GuarddutyMember#create}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#update GuarddutyMember#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#create GuarddutyMember#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member#update GuarddutyMember#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GuarddutyMemberTimeoutsOutputReference <a name="GuarddutyMemberTimeoutsOutputReference" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import guardduty_member

guarddutyMember.GuarddutyMemberTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeouts">GuarddutyMemberTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GuarddutyMemberTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.guarddutyMember.GuarddutyMemberTimeouts">GuarddutyMemberTimeouts</a>, cdktf.IResolvable]

---



