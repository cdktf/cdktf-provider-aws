# `iamUserLoginProfile` Submodule <a name="`iamUserLoginProfile` Submodule" id="@cdktf/provider-aws.iamUserLoginProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamUserLoginProfile <a name="IamUserLoginProfile" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile aws_iam_user_login_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iamuserloginprofile"

iamuserloginprofile.NewIamUserLoginProfile(scope Construct, id *string, config IamUserLoginProfileConfig) IamUserLoginProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig">IamUserLoginProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig">IamUserLoginProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetPasswordLength">ResetPasswordLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetPasswordResetRequired">ResetPasswordResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetPgpKey">ResetPgpKey</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetId"></a>

```go
func ResetId()
```

##### `ResetPasswordLength` <a name="ResetPasswordLength" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetPasswordLength"></a>

```go
func ResetPasswordLength()
```

##### `ResetPasswordResetRequired` <a name="ResetPasswordResetRequired" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetPasswordResetRequired"></a>

```go
func ResetPasswordResetRequired()
```

##### `ResetPgpKey` <a name="ResetPgpKey" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetPgpKey"></a>

```go
func ResetPgpKey()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iamuserloginprofile"

iamuserloginprofile.IamUserLoginProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iamuserloginprofile"

iamuserloginprofile.IamUserLoginProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iamuserloginprofile"

iamuserloginprofile.IamUserLoginProfile_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.encryptedPassword">EncryptedPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.keyFingerprint">KeyFingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.passwordLengthInput">PasswordLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.passwordResetRequiredInput">PasswordResetRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.pgpKeyInput">PgpKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.userInput">UserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.passwordLength">PasswordLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.passwordResetRequired">PasswordResetRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.pgpKey">PgpKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.user">User</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EncryptedPassword`<sup>Required</sup> <a name="EncryptedPassword" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.encryptedPassword"></a>

```go
func EncryptedPassword() *string
```

- *Type:* *string

---

##### `KeyFingerprint`<sup>Required</sup> <a name="KeyFingerprint" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.keyFingerprint"></a>

```go
func KeyFingerprint() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PasswordLengthInput`<sup>Optional</sup> <a name="PasswordLengthInput" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.passwordLengthInput"></a>

```go
func PasswordLengthInput() *f64
```

- *Type:* *f64

---

##### `PasswordResetRequiredInput`<sup>Optional</sup> <a name="PasswordResetRequiredInput" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.passwordResetRequiredInput"></a>

```go
func PasswordResetRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `PgpKeyInput`<sup>Optional</sup> <a name="PgpKeyInput" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.pgpKeyInput"></a>

```go
func PgpKeyInput() *string
```

- *Type:* *string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.userInput"></a>

```go
func UserInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PasswordLength`<sup>Required</sup> <a name="PasswordLength" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.passwordLength"></a>

```go
func PasswordLength() *f64
```

- *Type:* *f64

---

##### `PasswordResetRequired`<sup>Required</sup> <a name="PasswordResetRequired" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.passwordResetRequired"></a>

```go
func PasswordResetRequired() interface{}
```

- *Type:* interface{}

---

##### `PgpKey`<sup>Required</sup> <a name="PgpKey" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.pgpKey"></a>

```go
func PgpKey() *string
```

- *Type:* *string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.user"></a>

```go
func User() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IamUserLoginProfileConfig <a name="IamUserLoginProfileConfig" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iamuserloginprofile"

&iamuserloginprofile.IamUserLoginProfileConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	User: *string,
	Id: *string,
	PasswordLength: *f64,
	PasswordResetRequired: interface{},
	PgpKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.user">User</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#user IamUserLoginProfile#user}. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#id IamUserLoginProfile#id}. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.passwordLength">PasswordLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#password_length IamUserLoginProfile#password_length}. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.passwordResetRequired">PasswordResetRequired</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#password_reset_required IamUserLoginProfile#password_reset_required}. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.pgpKey">PgpKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#pgp_key IamUserLoginProfile#pgp_key}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.user"></a>

```go
User *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#user IamUserLoginProfile#user}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#id IamUserLoginProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PasswordLength`<sup>Optional</sup> <a name="PasswordLength" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.passwordLength"></a>

```go
PasswordLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#password_length IamUserLoginProfile#password_length}.

---

##### `PasswordResetRequired`<sup>Optional</sup> <a name="PasswordResetRequired" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.passwordResetRequired"></a>

```go
PasswordResetRequired interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#password_reset_required IamUserLoginProfile#password_reset_required}.

---

##### `PgpKey`<sup>Optional</sup> <a name="PgpKey" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.pgpKey"></a>

```go
PgpKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#pgp_key IamUserLoginProfile#pgp_key}.

---



