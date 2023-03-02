# `dataAwsIdentitystoreUser` Submodule <a name="`dataAwsIdentitystoreUser` Submodule" id="@cdktf/provider-aws.dataAwsIdentitystoreUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsIdentitystoreUser <a name="DataAwsIdentitystoreUser" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user aws_identitystore_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsidentitystoreuser"

dataawsidentitystoreuser.NewDataAwsIdentitystoreUser(scope Construct, id *string, config DataAwsIdentitystoreUserConfig) DataAwsIdentitystoreUser
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig">DataAwsIdentitystoreUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig">DataAwsIdentitystoreUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.putAlternateIdentifier">PutAlternateIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetAlternateIdentifier">ResetAlternateIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAlternateIdentifier` <a name="PutAlternateIdentifier" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.putAlternateIdentifier"></a>

```go
func PutAlternateIdentifier(value DataAwsIdentitystoreUserAlternateIdentifier)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.putAlternateIdentifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier">DataAwsIdentitystoreUserAlternateIdentifier</a>

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.putFilter"></a>

```go
func PutFilter(value DataAwsIdentitystoreUserFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter">DataAwsIdentitystoreUserFilter</a>

---

##### `ResetAlternateIdentifier` <a name="ResetAlternateIdentifier" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetAlternateIdentifier"></a>

```go
func ResetAlternateIdentifier()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetId"></a>

```go
func ResetId()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetUserId"></a>

```go
func ResetUserId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsidentitystoreuser"

dataawsidentitystoreuser.DataAwsIdentitystoreUser_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsidentitystoreuser"

dataawsidentitystoreuser.DataAwsIdentitystoreUser_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsidentitystoreuser"

dataawsidentitystoreuser.DataAwsIdentitystoreUser_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.addresses">Addresses</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList">DataAwsIdentitystoreUserAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.alternateIdentifier">AlternateIdentifier</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference">DataAwsIdentitystoreUserAlternateIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.emails">Emails</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList">DataAwsIdentitystoreUserEmailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.externalIds">ExternalIds</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList">DataAwsIdentitystoreUserExternalIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference">DataAwsIdentitystoreUserFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.locale">Locale</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.name">Name</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList">DataAwsIdentitystoreUserNameList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.nickname">Nickname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.phoneNumbers">PhoneNumbers</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList">DataAwsIdentitystoreUserPhoneNumbersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.preferredLanguage">PreferredLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.profileUrl">ProfileUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.userType">UserType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.alternateIdentifierInput">AlternateIdentifierInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier">DataAwsIdentitystoreUserAlternateIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter">DataAwsIdentitystoreUserFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.identityStoreIdInput">IdentityStoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.userIdInput">UserIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.identityStoreId">IdentityStoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.addresses"></a>

```go
func Addresses() DataAwsIdentitystoreUserAddressesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList">DataAwsIdentitystoreUserAddressesList</a>

---

##### `AlternateIdentifier`<sup>Required</sup> <a name="AlternateIdentifier" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.alternateIdentifier"></a>

```go
func AlternateIdentifier() DataAwsIdentitystoreUserAlternateIdentifierOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference">DataAwsIdentitystoreUserAlternateIdentifierOutputReference</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Emails`<sup>Required</sup> <a name="Emails" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.emails"></a>

```go
func Emails() DataAwsIdentitystoreUserEmailsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList">DataAwsIdentitystoreUserEmailsList</a>

---

##### `ExternalIds`<sup>Required</sup> <a name="ExternalIds" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.externalIds"></a>

```go
func ExternalIds() DataAwsIdentitystoreUserExternalIdsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList">DataAwsIdentitystoreUserExternalIdsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.filter"></a>

```go
func Filter() DataAwsIdentitystoreUserFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference">DataAwsIdentitystoreUserFilterOutputReference</a>

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.locale"></a>

```go
func Locale() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.name"></a>

```go
func Name() DataAwsIdentitystoreUserNameList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList">DataAwsIdentitystoreUserNameList</a>

---

##### `Nickname`<sup>Required</sup> <a name="Nickname" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.nickname"></a>

```go
func Nickname() *string
```

- *Type:* *string

---

##### `PhoneNumbers`<sup>Required</sup> <a name="PhoneNumbers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.phoneNumbers"></a>

```go
func PhoneNumbers() DataAwsIdentitystoreUserPhoneNumbersList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList">DataAwsIdentitystoreUserPhoneNumbersList</a>

---

##### `PreferredLanguage`<sup>Required</sup> <a name="PreferredLanguage" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.preferredLanguage"></a>

```go
func PreferredLanguage() *string
```

- *Type:* *string

---

##### `ProfileUrl`<sup>Required</sup> <a name="ProfileUrl" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.profileUrl"></a>

```go
func ProfileUrl() *string
```

- *Type:* *string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `UserType`<sup>Required</sup> <a name="UserType" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.userType"></a>

```go
func UserType() *string
```

- *Type:* *string

---

##### `AlternateIdentifierInput`<sup>Optional</sup> <a name="AlternateIdentifierInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.alternateIdentifierInput"></a>

```go
func AlternateIdentifierInput() DataAwsIdentitystoreUserAlternateIdentifier
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier">DataAwsIdentitystoreUserAlternateIdentifier</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.filterInput"></a>

```go
func FilterInput() DataAwsIdentitystoreUserFilter
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter">DataAwsIdentitystoreUserFilter</a>

---

##### `IdentityStoreIdInput`<sup>Optional</sup> <a name="IdentityStoreIdInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.identityStoreIdInput"></a>

```go
func IdentityStoreIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.userIdInput"></a>

```go
func UserIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdentityStoreId`<sup>Required</sup> <a name="IdentityStoreId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.identityStoreId"></a>

```go
func IdentityStoreId() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsIdentitystoreUserAddresses <a name="DataAwsIdentitystoreUserAddresses" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddresses.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsidentitystoreuser"

&dataawsidentitystoreuser.DataAwsIdentitystoreUserAddresses {

}
```


### DataAwsIdentitystoreUserAlternateIdentifier <a name="DataAwsIdentitystoreUserAlternateIdentifier" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsidentitystoreuser"

&dataawsidentitystoreuser.DataAwsIdentitystoreUserAlternateIdentifier {
	ExternalId: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId,
	UniqueAttribute: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier.property.externalId">ExternalId</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId">DataAwsIdentitystoreUserAlternateIdentifierExternalId</a></code> | external_id block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier.property.uniqueAttribute">UniqueAttribute</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute</a></code> | unique_attribute block. |

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier.property.externalId"></a>

```go
ExternalId DataAwsIdentitystoreUserAlternateIdentifierExternalId
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId">DataAwsIdentitystoreUserAlternateIdentifierExternalId</a>

external_id block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#external_id DataAwsIdentitystoreUser#external_id}

---

##### `UniqueAttribute`<sup>Optional</sup> <a name="UniqueAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier.property.uniqueAttribute"></a>

```go
UniqueAttribute DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute</a>

unique_attribute block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#unique_attribute DataAwsIdentitystoreUser#unique_attribute}

---

### DataAwsIdentitystoreUserAlternateIdentifierExternalId <a name="DataAwsIdentitystoreUserAlternateIdentifierExternalId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsidentitystoreuser"

&dataawsidentitystoreuser.DataAwsIdentitystoreUserAlternateIdentifierExternalId {
	Id: *string,
	Issuer: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#id DataAwsIdentitystoreUser#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId.property.issuer">Issuer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#issuer DataAwsIdentitystoreUser#issuer}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#id DataAwsIdentitystoreUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#issuer DataAwsIdentitystoreUser#issuer}.

---

### DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute <a name="DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsidentitystoreuser"

&dataawsidentitystoreuser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute {
	AttributePath: *string,
	AttributeValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute.property.attributePath">AttributePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_path DataAwsIdentitystoreUser#attribute_path}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute.property.attributeValue">AttributeValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_value DataAwsIdentitystoreUser#attribute_value}. |

---

##### `AttributePath`<sup>Required</sup> <a name="AttributePath" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute.property.attributePath"></a>

```go
AttributePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_path DataAwsIdentitystoreUser#attribute_path}.

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute.property.attributeValue"></a>

```go
AttributeValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_value DataAwsIdentitystoreUser#attribute_value}.

---

### DataAwsIdentitystoreUserConfig <a name="DataAwsIdentitystoreUserConfig" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsidentitystoreuser"

&dataawsidentitystoreuser.DataAwsIdentitystoreUserConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IdentityStoreId: *string,
	AlternateIdentifier: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier,
	Filter: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter,
	Id: *string,
	UserId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.identityStoreId">IdentityStoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#identity_store_id DataAwsIdentitystoreUser#identity_store_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.alternateIdentifier">AlternateIdentifier</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier">DataAwsIdentitystoreUserAlternateIdentifier</a></code> | alternate_identifier block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter">DataAwsIdentitystoreUserFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#id DataAwsIdentitystoreUser#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.userId">UserId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#user_id DataAwsIdentitystoreUser#user_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdentityStoreId`<sup>Required</sup> <a name="IdentityStoreId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.identityStoreId"></a>

```go
IdentityStoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#identity_store_id DataAwsIdentitystoreUser#identity_store_id}.

---

##### `AlternateIdentifier`<sup>Optional</sup> <a name="AlternateIdentifier" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.alternateIdentifier"></a>

```go
AlternateIdentifier DataAwsIdentitystoreUserAlternateIdentifier
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier">DataAwsIdentitystoreUserAlternateIdentifier</a>

alternate_identifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#alternate_identifier DataAwsIdentitystoreUser#alternate_identifier}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.filter"></a>

```go
Filter DataAwsIdentitystoreUserFilter
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter">DataAwsIdentitystoreUserFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#filter DataAwsIdentitystoreUser#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#id DataAwsIdentitystoreUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.userId"></a>

```go
UserId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#user_id DataAwsIdentitystoreUser#user_id}.

---

### DataAwsIdentitystoreUserEmails <a name="DataAwsIdentitystoreUserEmails" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsidentitystoreuser"

&dataawsidentitystoreuser.DataAwsIdentitystoreUserEmails {

}
```


### DataAwsIdentitystoreUserExternalIds <a name="DataAwsIdentitystoreUserExternalIds" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIds.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsidentitystoreuser"

&dataawsidentitystoreuser.DataAwsIdentitystoreUserExternalIds {

}
```


### DataAwsIdentitystoreUserFilter <a name="DataAwsIdentitystoreUserFilter" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsidentitystoreuser"

&dataawsidentitystoreuser.DataAwsIdentitystoreUserFilter {
	AttributePath: *string,
	AttributeValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter.property.attributePath">AttributePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_path DataAwsIdentitystoreUser#attribute_path}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter.property.attributeValue">AttributeValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_value DataAwsIdentitystoreUser#attribute_value}. |

---

##### `AttributePath`<sup>Required</sup> <a name="AttributePath" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter.property.attributePath"></a>

```go
AttributePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_path DataAwsIdentitystoreUser#attribute_path}.

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter.property.attributeValue"></a>

```go
AttributeValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_value DataAwsIdentitystoreUser#attribute_value}.

---

### DataAwsIdentitystoreUserName <a name="DataAwsIdentitystoreUserName" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserName.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsidentitystoreuser"

&dataawsidentitystoreuser.DataAwsIdentitystoreUserName {

}
```


### DataAwsIdentitystoreUserPhoneNumbers <a name="DataAwsIdentitystoreUserPhoneNumbers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsidentitystoreuser"

&dataawsidentitystoreuser.DataAwsIdentitystoreUserPhoneNumbers {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsIdentitystoreUserAddressesList <a name="DataAwsIdentitystoreUserAddressesList" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsidentitystoreuser"

dataawsidentitystoreuser.NewDataAwsIdentitystoreUserAddressesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsIdentitystoreUserAddressesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.get"></a>

```go
func Get(index *f64) DataAwsIdentitystoreUserAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsIdentitystoreUserAddressesOutputReference <a name="DataAwsIdentitystoreUserAddressesOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsidentitystoreuser"

dataawsidentitystoreuser.NewDataAwsIdentitystoreUserAddressesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsIdentitystoreUserAddressesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.formatted">Formatted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.locality">Locality</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.primary">Primary</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.streetAddress">StreetAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddresses">DataAwsIdentitystoreUserAddresses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `Formatted`<sup>Required</sup> <a name="Formatted" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.formatted"></a>

```go
func Formatted() *string
```

- *Type:* *string

---

##### `Locality`<sup>Required</sup> <a name="Locality" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.locality"></a>

```go
func Locality() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.primary"></a>

```go
func Primary() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `StreetAddress`<sup>Required</sup> <a name="StreetAddress" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.streetAddress"></a>

```go
func StreetAddress() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsIdentitystoreUserAddresses
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddresses">DataAwsIdentitystoreUserAddresses</a>

---


### DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference <a name="DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsidentitystoreuser"

dataawsidentitystoreuser.NewDataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId">DataAwsIdentitystoreUserAlternateIdentifierExternalId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsIdentitystoreUserAlternateIdentifierExternalId
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId">DataAwsIdentitystoreUserAlternateIdentifierExternalId</a>

---


### DataAwsIdentitystoreUserAlternateIdentifierOutputReference <a name="DataAwsIdentitystoreUserAlternateIdentifierOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsidentitystoreuser"

dataawsidentitystoreuser.NewDataAwsIdentitystoreUserAlternateIdentifierOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsIdentitystoreUserAlternateIdentifierOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.putExternalId">PutExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.putUniqueAttribute">PutUniqueAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.resetUniqueAttribute">ResetUniqueAttribute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExternalId` <a name="PutExternalId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.putExternalId"></a>

```go
func PutExternalId(value DataAwsIdentitystoreUserAlternateIdentifierExternalId)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.putExternalId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId">DataAwsIdentitystoreUserAlternateIdentifierExternalId</a>

---

##### `PutUniqueAttribute` <a name="PutUniqueAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.putUniqueAttribute"></a>

```go
func PutUniqueAttribute(value DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.putUniqueAttribute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute</a>

---

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.resetExternalId"></a>

```go
func ResetExternalId()
```

##### `ResetUniqueAttribute` <a name="ResetUniqueAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.resetUniqueAttribute"></a>

```go
func ResetUniqueAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.externalId">ExternalId</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference">DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.uniqueAttribute">UniqueAttribute</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId">DataAwsIdentitystoreUserAlternateIdentifierExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.uniqueAttributeInput">UniqueAttributeInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier">DataAwsIdentitystoreUserAlternateIdentifier</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.externalId"></a>

```go
func ExternalId() DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference">DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference</a>

---

##### `UniqueAttribute`<sup>Required</sup> <a name="UniqueAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.uniqueAttribute"></a>

```go
func UniqueAttribute() DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference</a>

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.externalIdInput"></a>

```go
func ExternalIdInput() DataAwsIdentitystoreUserAlternateIdentifierExternalId
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId">DataAwsIdentitystoreUserAlternateIdentifierExternalId</a>

---

##### `UniqueAttributeInput`<sup>Optional</sup> <a name="UniqueAttributeInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.uniqueAttributeInput"></a>

```go
func UniqueAttributeInput() DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsIdentitystoreUserAlternateIdentifier
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier">DataAwsIdentitystoreUserAlternateIdentifier</a>

---


### DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference <a name="DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsidentitystoreuser"

dataawsidentitystoreuser.NewDataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.attributePathInput">AttributePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.attributeValueInput">AttributeValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.attributePath">AttributePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.attributeValue">AttributeValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributePathInput`<sup>Optional</sup> <a name="AttributePathInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.attributePathInput"></a>

```go
func AttributePathInput() *string
```

- *Type:* *string

---

##### `AttributeValueInput`<sup>Optional</sup> <a name="AttributeValueInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.attributeValueInput"></a>

```go
func AttributeValueInput() *string
```

- *Type:* *string

---

##### `AttributePath`<sup>Required</sup> <a name="AttributePath" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.attributePath"></a>

```go
func AttributePath() *string
```

- *Type:* *string

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.attributeValue"></a>

```go
func AttributeValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute</a>

---


### DataAwsIdentitystoreUserEmailsList <a name="DataAwsIdentitystoreUserEmailsList" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsidentitystoreuser"

dataawsidentitystoreuser.NewDataAwsIdentitystoreUserEmailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsIdentitystoreUserEmailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.get"></a>

```go
func Get(index *f64) DataAwsIdentitystoreUserEmailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsIdentitystoreUserEmailsOutputReference <a name="DataAwsIdentitystoreUserEmailsOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsidentitystoreuser"

dataawsidentitystoreuser.NewDataAwsIdentitystoreUserEmailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsIdentitystoreUserEmailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.primary">Primary</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmails">DataAwsIdentitystoreUserEmails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.primary"></a>

```go
func Primary() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsIdentitystoreUserEmails
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmails">DataAwsIdentitystoreUserEmails</a>

---


### DataAwsIdentitystoreUserExternalIdsList <a name="DataAwsIdentitystoreUserExternalIdsList" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsidentitystoreuser"

dataawsidentitystoreuser.NewDataAwsIdentitystoreUserExternalIdsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsIdentitystoreUserExternalIdsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.get"></a>

```go
func Get(index *f64) DataAwsIdentitystoreUserExternalIdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsIdentitystoreUserExternalIdsOutputReference <a name="DataAwsIdentitystoreUserExternalIdsOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsidentitystoreuser"

dataawsidentitystoreuser.NewDataAwsIdentitystoreUserExternalIdsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsIdentitystoreUserExternalIdsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIds">DataAwsIdentitystoreUserExternalIds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsIdentitystoreUserExternalIds
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIds">DataAwsIdentitystoreUserExternalIds</a>

---


### DataAwsIdentitystoreUserFilterOutputReference <a name="DataAwsIdentitystoreUserFilterOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsidentitystoreuser"

dataawsidentitystoreuser.NewDataAwsIdentitystoreUserFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsIdentitystoreUserFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.attributePathInput">AttributePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.attributeValueInput">AttributeValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.attributePath">AttributePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.attributeValue">AttributeValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter">DataAwsIdentitystoreUserFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributePathInput`<sup>Optional</sup> <a name="AttributePathInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.attributePathInput"></a>

```go
func AttributePathInput() *string
```

- *Type:* *string

---

##### `AttributeValueInput`<sup>Optional</sup> <a name="AttributeValueInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.attributeValueInput"></a>

```go
func AttributeValueInput() *string
```

- *Type:* *string

---

##### `AttributePath`<sup>Required</sup> <a name="AttributePath" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.attributePath"></a>

```go
func AttributePath() *string
```

- *Type:* *string

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.attributeValue"></a>

```go
func AttributeValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsIdentitystoreUserFilter
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter">DataAwsIdentitystoreUserFilter</a>

---


### DataAwsIdentitystoreUserNameList <a name="DataAwsIdentitystoreUserNameList" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsidentitystoreuser"

dataawsidentitystoreuser.NewDataAwsIdentitystoreUserNameList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsIdentitystoreUserNameList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.get"></a>

```go
func Get(index *f64) DataAwsIdentitystoreUserNameOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsIdentitystoreUserNameOutputReference <a name="DataAwsIdentitystoreUserNameOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsidentitystoreuser"

dataawsidentitystoreuser.NewDataAwsIdentitystoreUserNameOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsIdentitystoreUserNameOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.familyName">FamilyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.formatted">Formatted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.givenName">GivenName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.honorificPrefix">HonorificPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.honorificSuffix">HonorificSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.middleName">MiddleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserName">DataAwsIdentitystoreUserName</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FamilyName`<sup>Required</sup> <a name="FamilyName" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.familyName"></a>

```go
func FamilyName() *string
```

- *Type:* *string

---

##### `Formatted`<sup>Required</sup> <a name="Formatted" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.formatted"></a>

```go
func Formatted() *string
```

- *Type:* *string

---

##### `GivenName`<sup>Required</sup> <a name="GivenName" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.givenName"></a>

```go
func GivenName() *string
```

- *Type:* *string

---

##### `HonorificPrefix`<sup>Required</sup> <a name="HonorificPrefix" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.honorificPrefix"></a>

```go
func HonorificPrefix() *string
```

- *Type:* *string

---

##### `HonorificSuffix`<sup>Required</sup> <a name="HonorificSuffix" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.honorificSuffix"></a>

```go
func HonorificSuffix() *string
```

- *Type:* *string

---

##### `MiddleName`<sup>Required</sup> <a name="MiddleName" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.middleName"></a>

```go
func MiddleName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsIdentitystoreUserName
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserName">DataAwsIdentitystoreUserName</a>

---


### DataAwsIdentitystoreUserPhoneNumbersList <a name="DataAwsIdentitystoreUserPhoneNumbersList" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsidentitystoreuser"

dataawsidentitystoreuser.NewDataAwsIdentitystoreUserPhoneNumbersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsIdentitystoreUserPhoneNumbersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.get"></a>

```go
func Get(index *f64) DataAwsIdentitystoreUserPhoneNumbersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsIdentitystoreUserPhoneNumbersOutputReference <a name="DataAwsIdentitystoreUserPhoneNumbersOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsidentitystoreuser"

dataawsidentitystoreuser.NewDataAwsIdentitystoreUserPhoneNumbersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsIdentitystoreUserPhoneNumbersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.primary">Primary</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbers">DataAwsIdentitystoreUserPhoneNumbers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.primary"></a>

```go
func Primary() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsIdentitystoreUserPhoneNumbers
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbers">DataAwsIdentitystoreUserPhoneNumbers</a>

---



