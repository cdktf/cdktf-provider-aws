# `iamAccountPasswordPolicy` Submodule <a name="`iamAccountPasswordPolicy` Submodule" id="@cdktf/provider-aws.iamAccountPasswordPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamAccountPasswordPolicy <a name="IamAccountPasswordPolicy" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy aws_iam_account_password_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iamaccountpasswordpolicy"

iamaccountpasswordpolicy.NewIamAccountPasswordPolicy(scope Construct, id *string, config IamAccountPasswordPolicyConfig) IamAccountPasswordPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig">IamAccountPasswordPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig">IamAccountPasswordPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetAllowUsersToChangePassword">ResetAllowUsersToChangePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetHardExpiry">ResetHardExpiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetMaxPasswordAge">ResetMaxPasswordAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetMinimumPasswordLength">ResetMinimumPasswordLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetPasswordReusePrevention">ResetPasswordReusePrevention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireLowercaseCharacters">ResetRequireLowercaseCharacters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireNumbers">ResetRequireNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireSymbols">ResetRequireSymbols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireUppercaseCharacters">ResetRequireUppercaseCharacters</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAllowUsersToChangePassword` <a name="ResetAllowUsersToChangePassword" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetAllowUsersToChangePassword"></a>

```go
func ResetAllowUsersToChangePassword()
```

##### `ResetHardExpiry` <a name="ResetHardExpiry" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetHardExpiry"></a>

```go
func ResetHardExpiry()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetMaxPasswordAge` <a name="ResetMaxPasswordAge" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetMaxPasswordAge"></a>

```go
func ResetMaxPasswordAge()
```

##### `ResetMinimumPasswordLength` <a name="ResetMinimumPasswordLength" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetMinimumPasswordLength"></a>

```go
func ResetMinimumPasswordLength()
```

##### `ResetPasswordReusePrevention` <a name="ResetPasswordReusePrevention" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetPasswordReusePrevention"></a>

```go
func ResetPasswordReusePrevention()
```

##### `ResetRequireLowercaseCharacters` <a name="ResetRequireLowercaseCharacters" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireLowercaseCharacters"></a>

```go
func ResetRequireLowercaseCharacters()
```

##### `ResetRequireNumbers` <a name="ResetRequireNumbers" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireNumbers"></a>

```go
func ResetRequireNumbers()
```

##### `ResetRequireSymbols` <a name="ResetRequireSymbols" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireSymbols"></a>

```go
func ResetRequireSymbols()
```

##### `ResetRequireUppercaseCharacters` <a name="ResetRequireUppercaseCharacters" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireUppercaseCharacters"></a>

```go
func ResetRequireUppercaseCharacters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iamaccountpasswordpolicy"

iamaccountpasswordpolicy.IamAccountPasswordPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iamaccountpasswordpolicy"

iamaccountpasswordpolicy.IamAccountPasswordPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iamaccountpasswordpolicy"

iamaccountpasswordpolicy.IamAccountPasswordPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.expirePasswords">ExpirePasswords</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.allowUsersToChangePasswordInput">AllowUsersToChangePasswordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.hardExpiryInput">HardExpiryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.maxPasswordAgeInput">MaxPasswordAgeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.minimumPasswordLengthInput">MinimumPasswordLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.passwordReusePreventionInput">PasswordReusePreventionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireLowercaseCharactersInput">RequireLowercaseCharactersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireNumbersInput">RequireNumbersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireSymbolsInput">RequireSymbolsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireUppercaseCharactersInput">RequireUppercaseCharactersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.allowUsersToChangePassword">AllowUsersToChangePassword</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.hardExpiry">HardExpiry</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.maxPasswordAge">MaxPasswordAge</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.minimumPasswordLength">MinimumPasswordLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.passwordReusePrevention">PasswordReusePrevention</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireLowercaseCharacters">RequireLowercaseCharacters</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireNumbers">RequireNumbers</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireSymbols">RequireSymbols</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireUppercaseCharacters">RequireUppercaseCharacters</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExpirePasswords`<sup>Required</sup> <a name="ExpirePasswords" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.expirePasswords"></a>

```go
func ExpirePasswords() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AllowUsersToChangePasswordInput`<sup>Optional</sup> <a name="AllowUsersToChangePasswordInput" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.allowUsersToChangePasswordInput"></a>

```go
func AllowUsersToChangePasswordInput() interface{}
```

- *Type:* interface{}

---

##### `HardExpiryInput`<sup>Optional</sup> <a name="HardExpiryInput" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.hardExpiryInput"></a>

```go
func HardExpiryInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaxPasswordAgeInput`<sup>Optional</sup> <a name="MaxPasswordAgeInput" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.maxPasswordAgeInput"></a>

```go
func MaxPasswordAgeInput() *f64
```

- *Type:* *f64

---

##### `MinimumPasswordLengthInput`<sup>Optional</sup> <a name="MinimumPasswordLengthInput" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.minimumPasswordLengthInput"></a>

```go
func MinimumPasswordLengthInput() *f64
```

- *Type:* *f64

---

##### `PasswordReusePreventionInput`<sup>Optional</sup> <a name="PasswordReusePreventionInput" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.passwordReusePreventionInput"></a>

```go
func PasswordReusePreventionInput() *f64
```

- *Type:* *f64

---

##### `RequireLowercaseCharactersInput`<sup>Optional</sup> <a name="RequireLowercaseCharactersInput" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireLowercaseCharactersInput"></a>

```go
func RequireLowercaseCharactersInput() interface{}
```

- *Type:* interface{}

---

##### `RequireNumbersInput`<sup>Optional</sup> <a name="RequireNumbersInput" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireNumbersInput"></a>

```go
func RequireNumbersInput() interface{}
```

- *Type:* interface{}

---

##### `RequireSymbolsInput`<sup>Optional</sup> <a name="RequireSymbolsInput" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireSymbolsInput"></a>

```go
func RequireSymbolsInput() interface{}
```

- *Type:* interface{}

---

##### `RequireUppercaseCharactersInput`<sup>Optional</sup> <a name="RequireUppercaseCharactersInput" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireUppercaseCharactersInput"></a>

```go
func RequireUppercaseCharactersInput() interface{}
```

- *Type:* interface{}

---

##### `AllowUsersToChangePassword`<sup>Required</sup> <a name="AllowUsersToChangePassword" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.allowUsersToChangePassword"></a>

```go
func AllowUsersToChangePassword() interface{}
```

- *Type:* interface{}

---

##### `HardExpiry`<sup>Required</sup> <a name="HardExpiry" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.hardExpiry"></a>

```go
func HardExpiry() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxPasswordAge`<sup>Required</sup> <a name="MaxPasswordAge" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.maxPasswordAge"></a>

```go
func MaxPasswordAge() *f64
```

- *Type:* *f64

---

##### `MinimumPasswordLength`<sup>Required</sup> <a name="MinimumPasswordLength" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.minimumPasswordLength"></a>

```go
func MinimumPasswordLength() *f64
```

- *Type:* *f64

---

##### `PasswordReusePrevention`<sup>Required</sup> <a name="PasswordReusePrevention" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.passwordReusePrevention"></a>

```go
func PasswordReusePrevention() *f64
```

- *Type:* *f64

---

##### `RequireLowercaseCharacters`<sup>Required</sup> <a name="RequireLowercaseCharacters" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireLowercaseCharacters"></a>

```go
func RequireLowercaseCharacters() interface{}
```

- *Type:* interface{}

---

##### `RequireNumbers`<sup>Required</sup> <a name="RequireNumbers" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireNumbers"></a>

```go
func RequireNumbers() interface{}
```

- *Type:* interface{}

---

##### `RequireSymbols`<sup>Required</sup> <a name="RequireSymbols" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireSymbols"></a>

```go
func RequireSymbols() interface{}
```

- *Type:* interface{}

---

##### `RequireUppercaseCharacters`<sup>Required</sup> <a name="RequireUppercaseCharacters" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireUppercaseCharacters"></a>

```go
func RequireUppercaseCharacters() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IamAccountPasswordPolicyConfig <a name="IamAccountPasswordPolicyConfig" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iamaccountpasswordpolicy"

&iamaccountpasswordpolicy.IamAccountPasswordPolicyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AllowUsersToChangePassword: interface{},
	HardExpiry: interface{},
	Id: *string,
	MaxPasswordAge: *f64,
	MinimumPasswordLength: *f64,
	PasswordReusePrevention: *f64,
	RequireLowercaseCharacters: interface{},
	RequireNumbers: interface{},
	RequireSymbols: interface{},
	RequireUppercaseCharacters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.allowUsersToChangePassword">AllowUsersToChangePassword</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#allow_users_to_change_password IamAccountPasswordPolicy#allow_users_to_change_password}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.hardExpiry">HardExpiry</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#hard_expiry IamAccountPasswordPolicy#hard_expiry}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#id IamAccountPasswordPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.maxPasswordAge">MaxPasswordAge</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#max_password_age IamAccountPasswordPolicy#max_password_age}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.minimumPasswordLength">MinimumPasswordLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#minimum_password_length IamAccountPasswordPolicy#minimum_password_length}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.passwordReusePrevention">PasswordReusePrevention</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#password_reuse_prevention IamAccountPasswordPolicy#password_reuse_prevention}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireLowercaseCharacters">RequireLowercaseCharacters</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_lowercase_characters IamAccountPasswordPolicy#require_lowercase_characters}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireNumbers">RequireNumbers</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_numbers IamAccountPasswordPolicy#require_numbers}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireSymbols">RequireSymbols</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_symbols IamAccountPasswordPolicy#require_symbols}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireUppercaseCharacters">RequireUppercaseCharacters</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_uppercase_characters IamAccountPasswordPolicy#require_uppercase_characters}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowUsersToChangePassword`<sup>Optional</sup> <a name="AllowUsersToChangePassword" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.allowUsersToChangePassword"></a>

```go
AllowUsersToChangePassword interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#allow_users_to_change_password IamAccountPasswordPolicy#allow_users_to_change_password}.

---

##### `HardExpiry`<sup>Optional</sup> <a name="HardExpiry" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.hardExpiry"></a>

```go
HardExpiry interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#hard_expiry IamAccountPasswordPolicy#hard_expiry}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#id IamAccountPasswordPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxPasswordAge`<sup>Optional</sup> <a name="MaxPasswordAge" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.maxPasswordAge"></a>

```go
MaxPasswordAge *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#max_password_age IamAccountPasswordPolicy#max_password_age}.

---

##### `MinimumPasswordLength`<sup>Optional</sup> <a name="MinimumPasswordLength" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.minimumPasswordLength"></a>

```go
MinimumPasswordLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#minimum_password_length IamAccountPasswordPolicy#minimum_password_length}.

---

##### `PasswordReusePrevention`<sup>Optional</sup> <a name="PasswordReusePrevention" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.passwordReusePrevention"></a>

```go
PasswordReusePrevention *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#password_reuse_prevention IamAccountPasswordPolicy#password_reuse_prevention}.

---

##### `RequireLowercaseCharacters`<sup>Optional</sup> <a name="RequireLowercaseCharacters" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireLowercaseCharacters"></a>

```go
RequireLowercaseCharacters interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_lowercase_characters IamAccountPasswordPolicy#require_lowercase_characters}.

---

##### `RequireNumbers`<sup>Optional</sup> <a name="RequireNumbers" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireNumbers"></a>

```go
RequireNumbers interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_numbers IamAccountPasswordPolicy#require_numbers}.

---

##### `RequireSymbols`<sup>Optional</sup> <a name="RequireSymbols" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireSymbols"></a>

```go
RequireSymbols interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_symbols IamAccountPasswordPolicy#require_symbols}.

---

##### `RequireUppercaseCharacters`<sup>Optional</sup> <a name="RequireUppercaseCharacters" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireUppercaseCharacters"></a>

```go
RequireUppercaseCharacters interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_uppercase_characters IamAccountPasswordPolicy#require_uppercase_characters}.

---



