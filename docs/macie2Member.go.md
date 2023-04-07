# `macie2Member` Submodule <a name="`macie2Member` Submodule" id="@cdktf/provider-aws.macie2Member"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Macie2Member <a name="Macie2Member" id="@cdktf/provider-aws.macie2Member.Macie2Member"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_member aws_macie2_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2Member.Macie2Member.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2member"

macie2member.NewMacie2Member(scope Construct, id *string, config Macie2MemberConfig) Macie2Member
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberConfig">Macie2MemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.macie2Member.Macie2Member.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.macie2Member.Macie2Member.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.macie2Member.Macie2Member.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2Member.Macie2MemberConfig">Macie2MemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.resetInvitationDisableEmailNotification">ResetInvitationDisableEmailNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.resetInvitationMessage">ResetInvitationMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.resetInvite">ResetInvite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2Member.Macie2Member.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.macie2Member.Macie2Member.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.macie2Member.Macie2Member.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2Member.Macie2Member.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.macie2Member.Macie2Member.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.macie2Member.Macie2Member.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.macie2Member.Macie2Member.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.macie2Member.Macie2Member.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.macie2Member.Macie2Member.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2Member.Macie2Member.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2Member.Macie2Member.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2Member.Macie2Member.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2Member.Macie2Member.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2Member.Macie2Member.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2Member.Macie2Member.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2Member.Macie2Member.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2Member.Macie2Member.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2Member.Macie2Member.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2Member.Macie2Member.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2Member.Macie2Member.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2Member.Macie2Member.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2Member.Macie2Member.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2Member.Macie2Member.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2Member.Macie2Member.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2Member.Macie2Member.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2Member.Macie2Member.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2Member.Macie2Member.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2Member.Macie2Member.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2Member.Macie2Member.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.macie2Member.Macie2Member.putTimeouts"></a>

```go
func PutTimeouts(value Macie2MemberTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2Member.Macie2Member.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2Member.Macie2MemberTimeouts">Macie2MemberTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.macie2Member.Macie2Member.resetId"></a>

```go
func ResetId()
```

##### `ResetInvitationDisableEmailNotification` <a name="ResetInvitationDisableEmailNotification" id="@cdktf/provider-aws.macie2Member.Macie2Member.resetInvitationDisableEmailNotification"></a>

```go
func ResetInvitationDisableEmailNotification()
```

##### `ResetInvitationMessage` <a name="ResetInvitationMessage" id="@cdktf/provider-aws.macie2Member.Macie2Member.resetInvitationMessage"></a>

```go
func ResetInvitationMessage()
```

##### `ResetInvite` <a name="ResetInvite" id="@cdktf/provider-aws.macie2Member.Macie2Member.resetInvite"></a>

```go
func ResetInvite()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.macie2Member.Macie2Member.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.macie2Member.Macie2Member.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.macie2Member.Macie2Member.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.macie2Member.Macie2Member.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.macie2Member.Macie2Member.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2member"

macie2member.Macie2Member_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macie2Member.Macie2Member.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.macie2Member.Macie2Member.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2member"

macie2member.Macie2Member_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macie2Member.Macie2Member.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.macie2Member.Macie2Member.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2member"

macie2member.Macie2Member_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macie2Member.Macie2Member.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.administratorAccountId">AdministratorAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.invitedAt">InvitedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.masterAccountId">MasterAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.relationshipStatus">RelationshipStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference">Macie2MemberTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.invitationDisableEmailNotificationInput">InvitationDisableEmailNotificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.invitationMessageInput">InvitationMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.inviteInput">InviteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.invitationDisableEmailNotification">InvitationDisableEmailNotification</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.invitationMessage">InvitationMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.invite">Invite</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdministratorAccountId`<sup>Required</sup> <a name="AdministratorAccountId" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.administratorAccountId"></a>

```go
func AdministratorAccountId() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `InvitedAt`<sup>Required</sup> <a name="InvitedAt" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.invitedAt"></a>

```go
func InvitedAt() *string
```

- *Type:* *string

---

##### `MasterAccountId`<sup>Required</sup> <a name="MasterAccountId" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.masterAccountId"></a>

```go
func MasterAccountId() *string
```

- *Type:* *string

---

##### `RelationshipStatus`<sup>Required</sup> <a name="RelationshipStatus" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.relationshipStatus"></a>

```go
func RelationshipStatus() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.timeouts"></a>

```go
func Timeouts() Macie2MemberTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference">Macie2MemberTimeoutsOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InvitationDisableEmailNotificationInput`<sup>Optional</sup> <a name="InvitationDisableEmailNotificationInput" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.invitationDisableEmailNotificationInput"></a>

```go
func InvitationDisableEmailNotificationInput() interface{}
```

- *Type:* interface{}

---

##### `InvitationMessageInput`<sup>Optional</sup> <a name="InvitationMessageInput" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.invitationMessageInput"></a>

```go
func InvitationMessageInput() *string
```

- *Type:* *string

---

##### `InviteInput`<sup>Optional</sup> <a name="InviteInput" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.inviteInput"></a>

```go
func InviteInput() interface{}
```

- *Type:* interface{}

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InvitationDisableEmailNotification`<sup>Required</sup> <a name="InvitationDisableEmailNotification" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.invitationDisableEmailNotification"></a>

```go
func InvitationDisableEmailNotification() interface{}
```

- *Type:* interface{}

---

##### `InvitationMessage`<sup>Required</sup> <a name="InvitationMessage" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.invitationMessage"></a>

```go
func InvitationMessage() *string
```

- *Type:* *string

---

##### `Invite`<sup>Required</sup> <a name="Invite" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.invite"></a>

```go
func Invite() interface{}
```

- *Type:* interface{}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2Member.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.macie2Member.Macie2Member.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Macie2MemberConfig <a name="Macie2MemberConfig" id="@cdktf/provider-aws.macie2Member.Macie2MemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2Member.Macie2MemberConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2member"

&macie2member.Macie2MemberConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Email: *string,
	Id: *string,
	InvitationDisableEmailNotification: interface{},
	InvitationMessage: *string,
	Invite: interface{},
	Status: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.macie2Member.Macie2MemberTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member#account_id Macie2Member#account_id}. |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member#email Macie2Member#email}. |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member#id Macie2Member#id}. |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.invitationDisableEmailNotification">InvitationDisableEmailNotification</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member#invitation_disable_email_notification Macie2Member#invitation_disable_email_notification}. |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.invitationMessage">InvitationMessage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member#invitation_message Macie2Member#invitation_message}. |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.invite">Invite</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member#invite Macie2Member#invite}. |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member#status Macie2Member#status}. |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member#tags Macie2Member#tags}. |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member#tags_all Macie2Member#tags_all}. |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberTimeouts">Macie2MemberTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member#account_id Macie2Member#account_id}.

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member#email Macie2Member#email}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member#id Macie2Member#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InvitationDisableEmailNotification`<sup>Optional</sup> <a name="InvitationDisableEmailNotification" id="@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.invitationDisableEmailNotification"></a>

```go
InvitationDisableEmailNotification interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member#invitation_disable_email_notification Macie2Member#invitation_disable_email_notification}.

---

##### `InvitationMessage`<sup>Optional</sup> <a name="InvitationMessage" id="@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.invitationMessage"></a>

```go
InvitationMessage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member#invitation_message Macie2Member#invitation_message}.

---

##### `Invite`<sup>Optional</sup> <a name="Invite" id="@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.invite"></a>

```go
Invite interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member#invite Macie2Member#invite}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member#status Macie2Member#status}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member#tags Macie2Member#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member#tags_all Macie2Member#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.macie2Member.Macie2MemberConfig.property.timeouts"></a>

```go
Timeouts Macie2MemberTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.macie2Member.Macie2MemberTimeouts">Macie2MemberTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member#timeouts Macie2Member#timeouts}

---

### Macie2MemberTimeouts <a name="Macie2MemberTimeouts" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2member"

&macie2member.Macie2MemberTimeouts {
	Create: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member#create Macie2Member#create}. |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member#update Macie2Member#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member#create Macie2Member#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member#update Macie2Member#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Macie2MemberTimeoutsOutputReference <a name="Macie2MemberTimeoutsOutputReference" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2member"

macie2member.NewMacie2MemberTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Macie2MemberTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2Member.Macie2MemberTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



