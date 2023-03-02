# `dataAwsSecretsmanagerRandomPassword` Submodule <a name="`dataAwsSecretsmanagerRandomPassword` Submodule" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSecretsmanagerRandomPassword <a name="DataAwsSecretsmanagerRandomPassword" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password aws_secretsmanager_random_password}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawssecretsmanagerrandompassword"

dataawssecretsmanagerrandompassword.NewDataAwsSecretsmanagerRandomPassword(scope Construct, id *string, config DataAwsSecretsmanagerRandomPasswordConfig) DataAwsSecretsmanagerRandomPassword
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig">DataAwsSecretsmanagerRandomPasswordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig">DataAwsSecretsmanagerRandomPasswordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludeCharacters">ResetExcludeCharacters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludeLowercase">ResetExcludeLowercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludeNumbers">ResetExcludeNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludePunctuation">ResetExcludePunctuation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludeUppercase">ResetExcludeUppercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetIncludeSpace">ResetIncludeSpace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetPasswordLength">ResetPasswordLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetRandomPassword">ResetRandomPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetRequireEachIncludedType">ResetRequireEachIncludedType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetExcludeCharacters` <a name="ResetExcludeCharacters" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludeCharacters"></a>

```go
func ResetExcludeCharacters()
```

##### `ResetExcludeLowercase` <a name="ResetExcludeLowercase" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludeLowercase"></a>

```go
func ResetExcludeLowercase()
```

##### `ResetExcludeNumbers` <a name="ResetExcludeNumbers" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludeNumbers"></a>

```go
func ResetExcludeNumbers()
```

##### `ResetExcludePunctuation` <a name="ResetExcludePunctuation" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludePunctuation"></a>

```go
func ResetExcludePunctuation()
```

##### `ResetExcludeUppercase` <a name="ResetExcludeUppercase" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludeUppercase"></a>

```go
func ResetExcludeUppercase()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetId"></a>

```go
func ResetId()
```

##### `ResetIncludeSpace` <a name="ResetIncludeSpace" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetIncludeSpace"></a>

```go
func ResetIncludeSpace()
```

##### `ResetPasswordLength` <a name="ResetPasswordLength" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetPasswordLength"></a>

```go
func ResetPasswordLength()
```

##### `ResetRandomPassword` <a name="ResetRandomPassword" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetRandomPassword"></a>

```go
func ResetRandomPassword()
```

##### `ResetRequireEachIncludedType` <a name="ResetRequireEachIncludedType" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetRequireEachIncludedType"></a>

```go
func ResetRequireEachIncludedType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawssecretsmanagerrandompassword"

dataawssecretsmanagerrandompassword.DataAwsSecretsmanagerRandomPassword_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawssecretsmanagerrandompassword"

dataawssecretsmanagerrandompassword.DataAwsSecretsmanagerRandomPassword_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawssecretsmanagerrandompassword"

dataawssecretsmanagerrandompassword.DataAwsSecretsmanagerRandomPassword_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeCharactersInput">ExcludeCharactersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeLowercaseInput">ExcludeLowercaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeNumbersInput">ExcludeNumbersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludePunctuationInput">ExcludePunctuationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeUppercaseInput">ExcludeUppercaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.includeSpaceInput">IncludeSpaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.passwordLengthInput">PasswordLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.randomPasswordInput">RandomPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.requireEachIncludedTypeInput">RequireEachIncludedTypeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeCharacters">ExcludeCharacters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeLowercase">ExcludeLowercase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeNumbers">ExcludeNumbers</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludePunctuation">ExcludePunctuation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeUppercase">ExcludeUppercase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.includeSpace">IncludeSpace</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.passwordLength">PasswordLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.randomPassword">RandomPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.requireEachIncludedType">RequireEachIncludedType</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ExcludeCharactersInput`<sup>Optional</sup> <a name="ExcludeCharactersInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeCharactersInput"></a>

```go
func ExcludeCharactersInput() *string
```

- *Type:* *string

---

##### `ExcludeLowercaseInput`<sup>Optional</sup> <a name="ExcludeLowercaseInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeLowercaseInput"></a>

```go
func ExcludeLowercaseInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludeNumbersInput`<sup>Optional</sup> <a name="ExcludeNumbersInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeNumbersInput"></a>

```go
func ExcludeNumbersInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludePunctuationInput`<sup>Optional</sup> <a name="ExcludePunctuationInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludePunctuationInput"></a>

```go
func ExcludePunctuationInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludeUppercaseInput`<sup>Optional</sup> <a name="ExcludeUppercaseInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeUppercaseInput"></a>

```go
func ExcludeUppercaseInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludeSpaceInput`<sup>Optional</sup> <a name="IncludeSpaceInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.includeSpaceInput"></a>

```go
func IncludeSpaceInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordLengthInput`<sup>Optional</sup> <a name="PasswordLengthInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.passwordLengthInput"></a>

```go
func PasswordLengthInput() *f64
```

- *Type:* *f64

---

##### `RandomPasswordInput`<sup>Optional</sup> <a name="RandomPasswordInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.randomPasswordInput"></a>

```go
func RandomPasswordInput() *string
```

- *Type:* *string

---

##### `RequireEachIncludedTypeInput`<sup>Optional</sup> <a name="RequireEachIncludedTypeInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.requireEachIncludedTypeInput"></a>

```go
func RequireEachIncludedTypeInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludeCharacters`<sup>Required</sup> <a name="ExcludeCharacters" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeCharacters"></a>

```go
func ExcludeCharacters() *string
```

- *Type:* *string

---

##### `ExcludeLowercase`<sup>Required</sup> <a name="ExcludeLowercase" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeLowercase"></a>

```go
func ExcludeLowercase() interface{}
```

- *Type:* interface{}

---

##### `ExcludeNumbers`<sup>Required</sup> <a name="ExcludeNumbers" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeNumbers"></a>

```go
func ExcludeNumbers() interface{}
```

- *Type:* interface{}

---

##### `ExcludePunctuation`<sup>Required</sup> <a name="ExcludePunctuation" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludePunctuation"></a>

```go
func ExcludePunctuation() interface{}
```

- *Type:* interface{}

---

##### `ExcludeUppercase`<sup>Required</sup> <a name="ExcludeUppercase" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeUppercase"></a>

```go
func ExcludeUppercase() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncludeSpace`<sup>Required</sup> <a name="IncludeSpace" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.includeSpace"></a>

```go
func IncludeSpace() interface{}
```

- *Type:* interface{}

---

##### `PasswordLength`<sup>Required</sup> <a name="PasswordLength" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.passwordLength"></a>

```go
func PasswordLength() *f64
```

- *Type:* *f64

---

##### `RandomPassword`<sup>Required</sup> <a name="RandomPassword" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.randomPassword"></a>

```go
func RandomPassword() *string
```

- *Type:* *string

---

##### `RequireEachIncludedType`<sup>Required</sup> <a name="RequireEachIncludedType" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.requireEachIncludedType"></a>

```go
func RequireEachIncludedType() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSecretsmanagerRandomPasswordConfig <a name="DataAwsSecretsmanagerRandomPasswordConfig" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawssecretsmanagerrandompassword"

&dataawssecretsmanagerrandompassword.DataAwsSecretsmanagerRandomPasswordConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ExcludeCharacters: *string,
	ExcludeLowercase: interface{},
	ExcludeNumbers: interface{},
	ExcludePunctuation: interface{},
	ExcludeUppercase: interface{},
	Id: *string,
	IncludeSpace: interface{},
	PasswordLength: *f64,
	RandomPassword: *string,
	RequireEachIncludedType: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludeCharacters">ExcludeCharacters</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_characters DataAwsSecretsmanagerRandomPassword#exclude_characters}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludeLowercase">ExcludeLowercase</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_lowercase DataAwsSecretsmanagerRandomPassword#exclude_lowercase}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludeNumbers">ExcludeNumbers</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_numbers DataAwsSecretsmanagerRandomPassword#exclude_numbers}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludePunctuation">ExcludePunctuation</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_punctuation DataAwsSecretsmanagerRandomPassword#exclude_punctuation}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludeUppercase">ExcludeUppercase</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_uppercase DataAwsSecretsmanagerRandomPassword#exclude_uppercase}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#id DataAwsSecretsmanagerRandomPassword#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.includeSpace">IncludeSpace</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#include_space DataAwsSecretsmanagerRandomPassword#include_space}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.passwordLength">PasswordLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#password_length DataAwsSecretsmanagerRandomPassword#password_length}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.randomPassword">RandomPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#random_password DataAwsSecretsmanagerRandomPassword#random_password}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.requireEachIncludedType">RequireEachIncludedType</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#require_each_included_type DataAwsSecretsmanagerRandomPassword#require_each_included_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExcludeCharacters`<sup>Optional</sup> <a name="ExcludeCharacters" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludeCharacters"></a>

```go
ExcludeCharacters *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_characters DataAwsSecretsmanagerRandomPassword#exclude_characters}.

---

##### `ExcludeLowercase`<sup>Optional</sup> <a name="ExcludeLowercase" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludeLowercase"></a>

```go
ExcludeLowercase interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_lowercase DataAwsSecretsmanagerRandomPassword#exclude_lowercase}.

---

##### `ExcludeNumbers`<sup>Optional</sup> <a name="ExcludeNumbers" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludeNumbers"></a>

```go
ExcludeNumbers interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_numbers DataAwsSecretsmanagerRandomPassword#exclude_numbers}.

---

##### `ExcludePunctuation`<sup>Optional</sup> <a name="ExcludePunctuation" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludePunctuation"></a>

```go
ExcludePunctuation interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_punctuation DataAwsSecretsmanagerRandomPassword#exclude_punctuation}.

---

##### `ExcludeUppercase`<sup>Optional</sup> <a name="ExcludeUppercase" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludeUppercase"></a>

```go
ExcludeUppercase interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_uppercase DataAwsSecretsmanagerRandomPassword#exclude_uppercase}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#id DataAwsSecretsmanagerRandomPassword#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeSpace`<sup>Optional</sup> <a name="IncludeSpace" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.includeSpace"></a>

```go
IncludeSpace interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#include_space DataAwsSecretsmanagerRandomPassword#include_space}.

---

##### `PasswordLength`<sup>Optional</sup> <a name="PasswordLength" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.passwordLength"></a>

```go
PasswordLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#password_length DataAwsSecretsmanagerRandomPassword#password_length}.

---

##### `RandomPassword`<sup>Optional</sup> <a name="RandomPassword" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.randomPassword"></a>

```go
RandomPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#random_password DataAwsSecretsmanagerRandomPassword#random_password}.

---

##### `RequireEachIncludedType`<sup>Optional</sup> <a name="RequireEachIncludedType" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.requireEachIncludedType"></a>

```go
RequireEachIncludedType interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#require_each_included_type DataAwsSecretsmanagerRandomPassword#require_each_included_type}.

---



