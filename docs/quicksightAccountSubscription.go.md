# `quicksightAccountSubscription` Submodule <a name="`quicksightAccountSubscription` Submodule" id="@cdktf/provider-aws.quicksightAccountSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightAccountSubscription <a name="QuicksightAccountSubscription" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription aws_quicksight_account_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightaccountsubscription"

quicksightaccountsubscription.NewQuicksightAccountSubscription(scope Construct, id *string, config QuicksightAccountSubscriptionConfig) QuicksightAccountSubscription
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig">QuicksightAccountSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig">QuicksightAccountSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetActiveDirectoryName">ResetActiveDirectoryName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAdminGroup">ResetAdminGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAuthorGroup">ResetAuthorGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetContactNumber">ResetContactNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetDirectoryId">ResetDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetEmailAddress">ResetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetFirstName">ResetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetLastName">ResetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetReaderGroup">ResetReaderGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetRealm">ResetRealm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.putTimeouts"></a>

```go
func PutTimeouts(value QuicksightAccountSubscriptionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts">QuicksightAccountSubscriptionTimeouts</a>

---

##### `ResetActiveDirectoryName` <a name="ResetActiveDirectoryName" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetActiveDirectoryName"></a>

```go
func ResetActiveDirectoryName()
```

##### `ResetAdminGroup` <a name="ResetAdminGroup" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAdminGroup"></a>

```go
func ResetAdminGroup()
```

##### `ResetAuthorGroup` <a name="ResetAuthorGroup" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAuthorGroup"></a>

```go
func ResetAuthorGroup()
```

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAwsAccountId"></a>

```go
func ResetAwsAccountId()
```

##### `ResetContactNumber` <a name="ResetContactNumber" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetContactNumber"></a>

```go
func ResetContactNumber()
```

##### `ResetDirectoryId` <a name="ResetDirectoryId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetDirectoryId"></a>

```go
func ResetDirectoryId()
```

##### `ResetEmailAddress` <a name="ResetEmailAddress" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetEmailAddress"></a>

```go
func ResetEmailAddress()
```

##### `ResetFirstName` <a name="ResetFirstName" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetFirstName"></a>

```go
func ResetFirstName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetId"></a>

```go
func ResetId()
```

##### `ResetLastName` <a name="ResetLastName" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetLastName"></a>

```go
func ResetLastName()
```

##### `ResetReaderGroup` <a name="ResetReaderGroup" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetReaderGroup"></a>

```go
func ResetReaderGroup()
```

##### `ResetRealm` <a name="ResetRealm" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetRealm"></a>

```go
func ResetRealm()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightaccountsubscription"

quicksightaccountsubscription.QuicksightAccountSubscription_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightaccountsubscription"

quicksightaccountsubscription.QuicksightAccountSubscription_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightaccountsubscription"

quicksightaccountsubscription.QuicksightAccountSubscription_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.accountSubscriptionStatus">AccountSubscriptionStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference">QuicksightAccountSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.accountNameInput">AccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.activeDirectoryNameInput">ActiveDirectoryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.adminGroupInput">AdminGroupInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authenticationMethodInput">AuthenticationMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authorGroupInput">AuthorGroupInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.contactNumberInput">ContactNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.directoryIdInput">DirectoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.editionInput">EditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.emailAddressInput">EmailAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.firstNameInput">FirstNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.lastNameInput">LastNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.notificationEmailInput">NotificationEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.readerGroupInput">ReaderGroupInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.realmInput">RealmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.accountName">AccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.activeDirectoryName">ActiveDirectoryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.adminGroup">AdminGroup</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authenticationMethod">AuthenticationMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authorGroup">AuthorGroup</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.contactNumber">ContactNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.directoryId">DirectoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.edition">Edition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.notificationEmail">NotificationEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.readerGroup">ReaderGroup</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.realm">Realm</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountSubscriptionStatus`<sup>Required</sup> <a name="AccountSubscriptionStatus" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.accountSubscriptionStatus"></a>

```go
func AccountSubscriptionStatus() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.timeouts"></a>

```go
func Timeouts() QuicksightAccountSubscriptionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference">QuicksightAccountSubscriptionTimeoutsOutputReference</a>

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.accountNameInput"></a>

```go
func AccountNameInput() *string
```

- *Type:* *string

---

##### `ActiveDirectoryNameInput`<sup>Optional</sup> <a name="ActiveDirectoryNameInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.activeDirectoryNameInput"></a>

```go
func ActiveDirectoryNameInput() *string
```

- *Type:* *string

---

##### `AdminGroupInput`<sup>Optional</sup> <a name="AdminGroupInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.adminGroupInput"></a>

```go
func AdminGroupInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuthenticationMethodInput`<sup>Optional</sup> <a name="AuthenticationMethodInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authenticationMethodInput"></a>

```go
func AuthenticationMethodInput() *string
```

- *Type:* *string

---

##### `AuthorGroupInput`<sup>Optional</sup> <a name="AuthorGroupInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authorGroupInput"></a>

```go
func AuthorGroupInput() *[]*string
```

- *Type:* *[]*string

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.awsAccountIdInput"></a>

```go
func AwsAccountIdInput() *string
```

- *Type:* *string

---

##### `ContactNumberInput`<sup>Optional</sup> <a name="ContactNumberInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.contactNumberInput"></a>

```go
func ContactNumberInput() *string
```

- *Type:* *string

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.directoryIdInput"></a>

```go
func DirectoryIdInput() *string
```

- *Type:* *string

---

##### `EditionInput`<sup>Optional</sup> <a name="EditionInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.editionInput"></a>

```go
func EditionInput() *string
```

- *Type:* *string

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.emailAddressInput"></a>

```go
func EmailAddressInput() *string
```

- *Type:* *string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.firstNameInput"></a>

```go
func FirstNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.lastNameInput"></a>

```go
func LastNameInput() *string
```

- *Type:* *string

---

##### `NotificationEmailInput`<sup>Optional</sup> <a name="NotificationEmailInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.notificationEmailInput"></a>

```go
func NotificationEmailInput() *string
```

- *Type:* *string

---

##### `ReaderGroupInput`<sup>Optional</sup> <a name="ReaderGroupInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.readerGroupInput"></a>

```go
func ReaderGroupInput() *[]*string
```

- *Type:* *[]*string

---

##### `RealmInput`<sup>Optional</sup> <a name="RealmInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.realmInput"></a>

```go
func RealmInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.accountName"></a>

```go
func AccountName() *string
```

- *Type:* *string

---

##### `ActiveDirectoryName`<sup>Required</sup> <a name="ActiveDirectoryName" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.activeDirectoryName"></a>

```go
func ActiveDirectoryName() *string
```

- *Type:* *string

---

##### `AdminGroup`<sup>Required</sup> <a name="AdminGroup" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.adminGroup"></a>

```go
func AdminGroup() *[]*string
```

- *Type:* *[]*string

---

##### `AuthenticationMethod`<sup>Required</sup> <a name="AuthenticationMethod" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authenticationMethod"></a>

```go
func AuthenticationMethod() *string
```

- *Type:* *string

---

##### `AuthorGroup`<sup>Required</sup> <a name="AuthorGroup" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authorGroup"></a>

```go
func AuthorGroup() *[]*string
```

- *Type:* *[]*string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `ContactNumber`<sup>Required</sup> <a name="ContactNumber" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.contactNumber"></a>

```go
func ContactNumber() *string
```

- *Type:* *string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.directoryId"></a>

```go
func DirectoryId() *string
```

- *Type:* *string

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.edition"></a>

```go
func Edition() *string
```

- *Type:* *string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `NotificationEmail`<sup>Required</sup> <a name="NotificationEmail" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.notificationEmail"></a>

```go
func NotificationEmail() *string
```

- *Type:* *string

---

##### `ReaderGroup`<sup>Required</sup> <a name="ReaderGroup" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.readerGroup"></a>

```go
func ReaderGroup() *[]*string
```

- *Type:* *[]*string

---

##### `Realm`<sup>Required</sup> <a name="Realm" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.realm"></a>

```go
func Realm() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightAccountSubscriptionConfig <a name="QuicksightAccountSubscriptionConfig" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightaccountsubscription"

&quicksightaccountsubscription.QuicksightAccountSubscriptionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountName: *string,
	AuthenticationMethod: *string,
	Edition: *string,
	NotificationEmail: *string,
	ActiveDirectoryName: *string,
	AdminGroup: *[]*string,
	AuthorGroup: *[]*string,
	AwsAccountId: *string,
	ContactNumber: *string,
	DirectoryId: *string,
	EmailAddress: *string,
	FirstName: *string,
	Id: *string,
	LastName: *string,
	ReaderGroup: *[]*string,
	Realm: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.accountName">AccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#account_name QuicksightAccountSubscription#account_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.authenticationMethod">AuthenticationMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#authentication_method QuicksightAccountSubscription#authentication_method}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.edition">Edition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#edition QuicksightAccountSubscription#edition}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.notificationEmail">NotificationEmail</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#notification_email QuicksightAccountSubscription#notification_email}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.activeDirectoryName">ActiveDirectoryName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#active_directory_name QuicksightAccountSubscription#active_directory_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.adminGroup">AdminGroup</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#admin_group QuicksightAccountSubscription#admin_group}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.authorGroup">AuthorGroup</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#author_group QuicksightAccountSubscription#author_group}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#aws_account_id QuicksightAccountSubscription#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.contactNumber">ContactNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#contact_number QuicksightAccountSubscription#contact_number}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.directoryId">DirectoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#directory_id QuicksightAccountSubscription#directory_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#email_address QuicksightAccountSubscription#email_address}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.firstName">FirstName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#first_name QuicksightAccountSubscription#first_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#id QuicksightAccountSubscription#id}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.lastName">LastName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#last_name QuicksightAccountSubscription#last_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.readerGroup">ReaderGroup</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#reader_group QuicksightAccountSubscription#reader_group}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.realm">Realm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#realm QuicksightAccountSubscription#realm}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts">QuicksightAccountSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.accountName"></a>

```go
AccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#account_name QuicksightAccountSubscription#account_name}.

---

##### `AuthenticationMethod`<sup>Required</sup> <a name="AuthenticationMethod" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.authenticationMethod"></a>

```go
AuthenticationMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#authentication_method QuicksightAccountSubscription#authentication_method}.

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.edition"></a>

```go
Edition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#edition QuicksightAccountSubscription#edition}.

---

##### `NotificationEmail`<sup>Required</sup> <a name="NotificationEmail" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.notificationEmail"></a>

```go
NotificationEmail *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#notification_email QuicksightAccountSubscription#notification_email}.

---

##### `ActiveDirectoryName`<sup>Optional</sup> <a name="ActiveDirectoryName" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.activeDirectoryName"></a>

```go
ActiveDirectoryName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#active_directory_name QuicksightAccountSubscription#active_directory_name}.

---

##### `AdminGroup`<sup>Optional</sup> <a name="AdminGroup" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.adminGroup"></a>

```go
AdminGroup *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#admin_group QuicksightAccountSubscription#admin_group}.

---

##### `AuthorGroup`<sup>Optional</sup> <a name="AuthorGroup" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.authorGroup"></a>

```go
AuthorGroup *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#author_group QuicksightAccountSubscription#author_group}.

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.awsAccountId"></a>

```go
AwsAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#aws_account_id QuicksightAccountSubscription#aws_account_id}.

---

##### `ContactNumber`<sup>Optional</sup> <a name="ContactNumber" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.contactNumber"></a>

```go
ContactNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#contact_number QuicksightAccountSubscription#contact_number}.

---

##### `DirectoryId`<sup>Optional</sup> <a name="DirectoryId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.directoryId"></a>

```go
DirectoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#directory_id QuicksightAccountSubscription#directory_id}.

---

##### `EmailAddress`<sup>Optional</sup> <a name="EmailAddress" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.emailAddress"></a>

```go
EmailAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#email_address QuicksightAccountSubscription#email_address}.

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.firstName"></a>

```go
FirstName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#first_name QuicksightAccountSubscription#first_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#id QuicksightAccountSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.lastName"></a>

```go
LastName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#last_name QuicksightAccountSubscription#last_name}.

---

##### `ReaderGroup`<sup>Optional</sup> <a name="ReaderGroup" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.readerGroup"></a>

```go
ReaderGroup *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#reader_group QuicksightAccountSubscription#reader_group}.

---

##### `Realm`<sup>Optional</sup> <a name="Realm" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.realm"></a>

```go
Realm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#realm QuicksightAccountSubscription#realm}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.timeouts"></a>

```go
Timeouts QuicksightAccountSubscriptionTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts">QuicksightAccountSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#timeouts QuicksightAccountSubscription#timeouts}

---

### QuicksightAccountSubscriptionTimeouts <a name="QuicksightAccountSubscriptionTimeouts" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightaccountsubscription"

&quicksightaccountsubscription.QuicksightAccountSubscriptionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#create QuicksightAccountSubscription#create}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#delete QuicksightAccountSubscription#delete}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#read QuicksightAccountSubscription#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#create QuicksightAccountSubscription#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#delete QuicksightAccountSubscription#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_account_subscription#read QuicksightAccountSubscription#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightAccountSubscriptionTimeoutsOutputReference <a name="QuicksightAccountSubscriptionTimeoutsOutputReference" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightaccountsubscription"

quicksightaccountsubscription.NewQuicksightAccountSubscriptionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightAccountSubscriptionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



