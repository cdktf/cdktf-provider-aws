# `dataAwsKmsKey` Submodule <a name="`dataAwsKmsKey` Submodule" id="@cdktf/provider-aws.dataAwsKmsKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsKmsKey <a name="DataAwsKmsKey" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/kms_key aws_kms_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskmskey"

dataawskmskey.NewDataAwsKmsKey(scope Construct, id *string, config DataAwsKmsKeyConfig) DataAwsKmsKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig">DataAwsKmsKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig">DataAwsKmsKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.resetGrantTokens">ResetGrantTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetGrantTokens` <a name="ResetGrantTokens" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.resetGrantTokens"></a>

```go
func ResetGrantTokens()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskmskey"

dataawskmskey.DataAwsKmsKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskmskey"

dataawskmskey.DataAwsKmsKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskmskey"

dataawskmskey.DataAwsKmsKey_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.creationDate">CreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.customerMasterKeySpec">CustomerMasterKeySpec</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.deletionDate">DeletionDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.expirationModel">ExpirationModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.keyManager">KeyManager</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.keyState">KeyState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.keyUsage">KeyUsage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.multiRegion">MultiRegion</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.multiRegionConfiguration">MultiRegionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList">DataAwsKmsKeyMultiRegionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.origin">Origin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.validTo">ValidTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.grantTokensInput">GrantTokensInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.keyIdInput">KeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.grantTokens">GrantTokens</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.creationDate"></a>

```go
func CreationDate() *string
```

- *Type:* *string

---

##### `CustomerMasterKeySpec`<sup>Required</sup> <a name="CustomerMasterKeySpec" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.customerMasterKeySpec"></a>

```go
func CustomerMasterKeySpec() *string
```

- *Type:* *string

---

##### `DeletionDate`<sup>Required</sup> <a name="DeletionDate" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.deletionDate"></a>

```go
func DeletionDate() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ExpirationModel`<sup>Required</sup> <a name="ExpirationModel" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.expirationModel"></a>

```go
func ExpirationModel() *string
```

- *Type:* *string

---

##### `KeyManager`<sup>Required</sup> <a name="KeyManager" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.keyManager"></a>

```go
func KeyManager() *string
```

- *Type:* *string

---

##### `KeyState`<sup>Required</sup> <a name="KeyState" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.keyState"></a>

```go
func KeyState() *string
```

- *Type:* *string

---

##### `KeyUsage`<sup>Required</sup> <a name="KeyUsage" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.keyUsage"></a>

```go
func KeyUsage() *string
```

- *Type:* *string

---

##### `MultiRegion`<sup>Required</sup> <a name="MultiRegion" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.multiRegion"></a>

```go
func MultiRegion() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MultiRegionConfiguration`<sup>Required</sup> <a name="MultiRegionConfiguration" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.multiRegionConfiguration"></a>

```go
func MultiRegionConfiguration() DataAwsKmsKeyMultiRegionConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList">DataAwsKmsKeyMultiRegionConfigurationList</a>

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.origin"></a>

```go
func Origin() *string
```

- *Type:* *string

---

##### `ValidTo`<sup>Required</sup> <a name="ValidTo" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.validTo"></a>

```go
func ValidTo() *string
```

- *Type:* *string

---

##### `GrantTokensInput`<sup>Optional</sup> <a name="GrantTokensInput" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.grantTokensInput"></a>

```go
func GrantTokensInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.keyIdInput"></a>

```go
func KeyIdInput() *string
```

- *Type:* *string

---

##### `GrantTokens`<sup>Required</sup> <a name="GrantTokens" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.grantTokens"></a>

```go
func GrantTokens() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsKmsKeyConfig <a name="DataAwsKmsKeyConfig" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskmskey"

&dataawskmskey.DataAwsKmsKeyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	KeyId: *string,
	GrantTokens: *[]*string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.keyId">KeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_key#key_id DataAwsKmsKey#key_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.grantTokens">GrantTokens</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_key#grant_tokens DataAwsKmsKey#grant_tokens}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_key#id DataAwsKmsKey#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.keyId"></a>

```go
KeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_key#key_id DataAwsKmsKey#key_id}.

---

##### `GrantTokens`<sup>Optional</sup> <a name="GrantTokens" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.grantTokens"></a>

```go
GrantTokens *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_key#grant_tokens DataAwsKmsKey#grant_tokens}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_key#id DataAwsKmsKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsKmsKeyMultiRegionConfiguration <a name="DataAwsKmsKeyMultiRegionConfiguration" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskmskey"

&dataawskmskey.DataAwsKmsKeyMultiRegionConfiguration {

}
```


### DataAwsKmsKeyMultiRegionConfigurationPrimaryKey <a name="DataAwsKmsKeyMultiRegionConfigurationPrimaryKey" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskmskey"

&dataawskmskey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKey {

}
```


### DataAwsKmsKeyMultiRegionConfigurationReplicaKeys <a name="DataAwsKmsKeyMultiRegionConfigurationReplicaKeys" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeys.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskmskey"

&dataawskmskey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeys {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsKmsKeyMultiRegionConfigurationList <a name="DataAwsKmsKeyMultiRegionConfigurationList" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskmskey"

dataawskmskey.NewDataAwsKmsKeyMultiRegionConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsKmsKeyMultiRegionConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.get"></a>

```go
func Get(index *f64) DataAwsKmsKeyMultiRegionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsKmsKeyMultiRegionConfigurationOutputReference <a name="DataAwsKmsKeyMultiRegionConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskmskey"

dataawskmskey.NewDataAwsKmsKeyMultiRegionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsKmsKeyMultiRegionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.multiRegionKeyType">MultiRegionKeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.primaryKey">PrimaryKey</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList">DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.replicaKeys">ReplicaKeys</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList">DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfiguration">DataAwsKmsKeyMultiRegionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MultiRegionKeyType`<sup>Required</sup> <a name="MultiRegionKeyType" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.multiRegionKeyType"></a>

```go
func MultiRegionKeyType() *string
```

- *Type:* *string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.primaryKey"></a>

```go
func PrimaryKey() DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList">DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList</a>

---

##### `ReplicaKeys`<sup>Required</sup> <a name="ReplicaKeys" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.replicaKeys"></a>

```go
func ReplicaKeys() DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList">DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsKmsKeyMultiRegionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfiguration">DataAwsKmsKeyMultiRegionConfiguration</a>

---


### DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList <a name="DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskmskey"

dataawskmskey.NewDataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.get"></a>

```go
func Get(index *f64) DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference <a name="DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskmskey"

dataawskmskey.NewDataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKey">DataAwsKmsKeyMultiRegionConfigurationPrimaryKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsKmsKeyMultiRegionConfigurationPrimaryKey
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKey">DataAwsKmsKeyMultiRegionConfigurationPrimaryKey</a>

---


### DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList <a name="DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskmskey"

dataawskmskey.NewDataAwsKmsKeyMultiRegionConfigurationReplicaKeysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.get"></a>

```go
func Get(index *f64) DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference <a name="DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskmskey"

dataawskmskey.NewDataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeys">DataAwsKmsKeyMultiRegionConfigurationReplicaKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsKmsKeyMultiRegionConfigurationReplicaKeys
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeys">DataAwsKmsKeyMultiRegionConfigurationReplicaKeys</a>

---



