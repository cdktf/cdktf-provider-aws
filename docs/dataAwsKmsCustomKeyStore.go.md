# `dataAwsKmsCustomKeyStore` Submodule <a name="`dataAwsKmsCustomKeyStore` Submodule" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsKmsCustomKeyStore <a name="DataAwsKmsCustomKeyStore" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/kms_custom_key_store aws_kms_custom_key_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskmscustomkeystore"

dataawskmscustomkeystore.NewDataAwsKmsCustomKeyStore(scope Construct, id *string, config DataAwsKmsCustomKeyStoreConfig) DataAwsKmsCustomKeyStore
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig">DataAwsKmsCustomKeyStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig">DataAwsKmsCustomKeyStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.resetCustomKeyStoreId">ResetCustomKeyStoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.resetCustomKeyStoreName">ResetCustomKeyStoreName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCustomKeyStoreId` <a name="ResetCustomKeyStoreId" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.resetCustomKeyStoreId"></a>

```go
func ResetCustomKeyStoreId()
```

##### `ResetCustomKeyStoreName` <a name="ResetCustomKeyStoreName" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.resetCustomKeyStoreName"></a>

```go
func ResetCustomKeyStoreName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskmscustomkeystore"

dataawskmscustomkeystore.DataAwsKmsCustomKeyStore_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskmscustomkeystore"

dataawskmscustomkeystore.DataAwsKmsCustomKeyStore_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskmscustomkeystore"

dataawskmscustomkeystore.DataAwsKmsCustomKeyStore_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.cloudHsmClusterId">CloudHsmClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.connectionState">ConnectionState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.creationDate">CreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.trustAnchorCertificate">TrustAnchorCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.customKeyStoreIdInput">CustomKeyStoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.customKeyStoreNameInput">CustomKeyStoreNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.customKeyStoreId">CustomKeyStoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.customKeyStoreName">CustomKeyStoreName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CloudHsmClusterId`<sup>Required</sup> <a name="CloudHsmClusterId" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.cloudHsmClusterId"></a>

```go
func CloudHsmClusterId() *string
```

- *Type:* *string

---

##### `ConnectionState`<sup>Required</sup> <a name="ConnectionState" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.connectionState"></a>

```go
func ConnectionState() *string
```

- *Type:* *string

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.creationDate"></a>

```go
func CreationDate() *string
```

- *Type:* *string

---

##### `TrustAnchorCertificate`<sup>Required</sup> <a name="TrustAnchorCertificate" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.trustAnchorCertificate"></a>

```go
func TrustAnchorCertificate() *string
```

- *Type:* *string

---

##### `CustomKeyStoreIdInput`<sup>Optional</sup> <a name="CustomKeyStoreIdInput" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.customKeyStoreIdInput"></a>

```go
func CustomKeyStoreIdInput() *string
```

- *Type:* *string

---

##### `CustomKeyStoreNameInput`<sup>Optional</sup> <a name="CustomKeyStoreNameInput" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.customKeyStoreNameInput"></a>

```go
func CustomKeyStoreNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `CustomKeyStoreId`<sup>Required</sup> <a name="CustomKeyStoreId" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.customKeyStoreId"></a>

```go
func CustomKeyStoreId() *string
```

- *Type:* *string

---

##### `CustomKeyStoreName`<sup>Required</sup> <a name="CustomKeyStoreName" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.customKeyStoreName"></a>

```go
func CustomKeyStoreName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsKmsCustomKeyStoreConfig <a name="DataAwsKmsCustomKeyStoreConfig" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskmscustomkeystore"

&dataawskmscustomkeystore.DataAwsKmsCustomKeyStoreConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CustomKeyStoreId: *string,
	CustomKeyStoreName: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.customKeyStoreId">CustomKeyStoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_custom_key_store#custom_key_store_id DataAwsKmsCustomKeyStore#custom_key_store_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.customKeyStoreName">CustomKeyStoreName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_custom_key_store#custom_key_store_name DataAwsKmsCustomKeyStore#custom_key_store_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_custom_key_store#id DataAwsKmsCustomKeyStore#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomKeyStoreId`<sup>Optional</sup> <a name="CustomKeyStoreId" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.customKeyStoreId"></a>

```go
CustomKeyStoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_custom_key_store#custom_key_store_id DataAwsKmsCustomKeyStore#custom_key_store_id}.

---

##### `CustomKeyStoreName`<sup>Optional</sup> <a name="CustomKeyStoreName" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.customKeyStoreName"></a>

```go
CustomKeyStoreName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_custom_key_store#custom_key_store_name DataAwsKmsCustomKeyStore#custom_key_store_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_custom_key_store#id DataAwsKmsCustomKeyStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



