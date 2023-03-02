# `kmsKey` Submodule <a name="`kmsKey` Submodule" id="@cdktf/provider-aws.kmsKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsKey <a name="KmsKey" id="@cdktf/provider-aws.kmsKey.KmsKey"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_key aws_kms_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kmskey"

kmskey.NewKmsKey(scope Construct, id *string, config KmsKeyConfig) KmsKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig">KmsKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig">KmsKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetBypassPolicyLockoutSafetyCheck">ResetBypassPolicyLockoutSafetyCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetCustomerMasterKeySpec">ResetCustomerMasterKeySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetCustomKeyStoreId">ResetCustomKeyStoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetDeletionWindowInDays">ResetDeletionWindowInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetEnableKeyRotation">ResetEnableKeyRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetKeyUsage">ResetKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetMultiRegion">ResetMultiRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kmsKey.KmsKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.kmsKey.KmsKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.kmsKey.KmsKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kmsKey.KmsKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.kmsKey.KmsKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.kmsKey.KmsKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.kmsKey.KmsKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.kmsKey.KmsKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.kmsKey.KmsKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBypassPolicyLockoutSafetyCheck` <a name="ResetBypassPolicyLockoutSafetyCheck" id="@cdktf/provider-aws.kmsKey.KmsKey.resetBypassPolicyLockoutSafetyCheck"></a>

```go
func ResetBypassPolicyLockoutSafetyCheck()
```

##### `ResetCustomerMasterKeySpec` <a name="ResetCustomerMasterKeySpec" id="@cdktf/provider-aws.kmsKey.KmsKey.resetCustomerMasterKeySpec"></a>

```go
func ResetCustomerMasterKeySpec()
```

##### `ResetCustomKeyStoreId` <a name="ResetCustomKeyStoreId" id="@cdktf/provider-aws.kmsKey.KmsKey.resetCustomKeyStoreId"></a>

```go
func ResetCustomKeyStoreId()
```

##### `ResetDeletionWindowInDays` <a name="ResetDeletionWindowInDays" id="@cdktf/provider-aws.kmsKey.KmsKey.resetDeletionWindowInDays"></a>

```go
func ResetDeletionWindowInDays()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.kmsKey.KmsKey.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnableKeyRotation` <a name="ResetEnableKeyRotation" id="@cdktf/provider-aws.kmsKey.KmsKey.resetEnableKeyRotation"></a>

```go
func ResetEnableKeyRotation()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.kmsKey.KmsKey.resetId"></a>

```go
func ResetId()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-aws.kmsKey.KmsKey.resetIsEnabled"></a>

```go
func ResetIsEnabled()
```

##### `ResetKeyUsage` <a name="ResetKeyUsage" id="@cdktf/provider-aws.kmsKey.KmsKey.resetKeyUsage"></a>

```go
func ResetKeyUsage()
```

##### `ResetMultiRegion` <a name="ResetMultiRegion" id="@cdktf/provider-aws.kmsKey.KmsKey.resetMultiRegion"></a>

```go
func ResetMultiRegion()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktf/provider-aws.kmsKey.KmsKey.resetPolicy"></a>

```go
func ResetPolicy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.kmsKey.KmsKey.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.kmsKey.KmsKey.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.kmsKey.KmsKey.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kmskey"

kmskey.KmsKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsKey.KmsKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.kmsKey.KmsKey.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kmskey"

kmskey.KmsKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsKey.KmsKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.kmsKey.KmsKey.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kmskey"

kmskey.KmsKey_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsKey.KmsKey.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.bypassPolicyLockoutSafetyCheckInput">BypassPolicyLockoutSafetyCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.customerMasterKeySpecInput">CustomerMasterKeySpecInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.customKeyStoreIdInput">CustomKeyStoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.deletionWindowInDaysInput">DeletionWindowInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.enableKeyRotationInput">EnableKeyRotationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.keyUsageInput">KeyUsageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.multiRegionInput">MultiRegionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.policyInput">PolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.bypassPolicyLockoutSafetyCheck">BypassPolicyLockoutSafetyCheck</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.customerMasterKeySpec">CustomerMasterKeySpec</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.customKeyStoreId">CustomKeyStoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.deletionWindowInDays">DeletionWindowInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.enableKeyRotation">EnableKeyRotation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.keyUsage">KeyUsage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.multiRegion">MultiRegion</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.kmsKey.KmsKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.kmsKey.KmsKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kmsKey.KmsKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.kmsKey.KmsKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.kmsKey.KmsKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.kmsKey.KmsKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.kmsKey.KmsKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.kmsKey.KmsKey.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.kmsKey.KmsKey.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.kmsKey.KmsKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.kmsKey.KmsKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.kmsKey.KmsKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.kmsKey.KmsKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.kmsKey.KmsKey.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.kmsKey.KmsKey.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-aws.kmsKey.KmsKey.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `BypassPolicyLockoutSafetyCheckInput`<sup>Optional</sup> <a name="BypassPolicyLockoutSafetyCheckInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.bypassPolicyLockoutSafetyCheckInput"></a>

```go
func BypassPolicyLockoutSafetyCheckInput() interface{}
```

- *Type:* interface{}

---

##### `CustomerMasterKeySpecInput`<sup>Optional</sup> <a name="CustomerMasterKeySpecInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.customerMasterKeySpecInput"></a>

```go
func CustomerMasterKeySpecInput() *string
```

- *Type:* *string

---

##### `CustomKeyStoreIdInput`<sup>Optional</sup> <a name="CustomKeyStoreIdInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.customKeyStoreIdInput"></a>

```go
func CustomKeyStoreIdInput() *string
```

- *Type:* *string

---

##### `DeletionWindowInDaysInput`<sup>Optional</sup> <a name="DeletionWindowInDaysInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.deletionWindowInDaysInput"></a>

```go
func DeletionWindowInDaysInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnableKeyRotationInput`<sup>Optional</sup> <a name="EnableKeyRotationInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.enableKeyRotationInput"></a>

```go
func EnableKeyRotationInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `KeyUsageInput`<sup>Optional</sup> <a name="KeyUsageInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.keyUsageInput"></a>

```go
func KeyUsageInput() *string
```

- *Type:* *string

---

##### `MultiRegionInput`<sup>Optional</sup> <a name="MultiRegionInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.multiRegionInput"></a>

```go
func MultiRegionInput() interface{}
```

- *Type:* interface{}

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.policyInput"></a>

```go
func PolicyInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BypassPolicyLockoutSafetyCheck`<sup>Required</sup> <a name="BypassPolicyLockoutSafetyCheck" id="@cdktf/provider-aws.kmsKey.KmsKey.property.bypassPolicyLockoutSafetyCheck"></a>

```go
func BypassPolicyLockoutSafetyCheck() interface{}
```

- *Type:* interface{}

---

##### `CustomerMasterKeySpec`<sup>Required</sup> <a name="CustomerMasterKeySpec" id="@cdktf/provider-aws.kmsKey.KmsKey.property.customerMasterKeySpec"></a>

```go
func CustomerMasterKeySpec() *string
```

- *Type:* *string

---

##### `CustomKeyStoreId`<sup>Required</sup> <a name="CustomKeyStoreId" id="@cdktf/provider-aws.kmsKey.KmsKey.property.customKeyStoreId"></a>

```go
func CustomKeyStoreId() *string
```

- *Type:* *string

---

##### `DeletionWindowInDays`<sup>Required</sup> <a name="DeletionWindowInDays" id="@cdktf/provider-aws.kmsKey.KmsKey.property.deletionWindowInDays"></a>

```go
func DeletionWindowInDays() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.kmsKey.KmsKey.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnableKeyRotation`<sup>Required</sup> <a name="EnableKeyRotation" id="@cdktf/provider-aws.kmsKey.KmsKey.property.enableKeyRotation"></a>

```go
func EnableKeyRotation() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.kmsKey.KmsKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-aws.kmsKey.KmsKey.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `KeyUsage`<sup>Required</sup> <a name="KeyUsage" id="@cdktf/provider-aws.kmsKey.KmsKey.property.keyUsage"></a>

```go
func KeyUsage() *string
```

- *Type:* *string

---

##### `MultiRegion`<sup>Required</sup> <a name="MultiRegion" id="@cdktf/provider-aws.kmsKey.KmsKey.property.multiRegion"></a>

```go
func MultiRegion() interface{}
```

- *Type:* interface{}

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-aws.kmsKey.KmsKey.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.kmsKey.KmsKey.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.kmsKey.KmsKey.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.kmsKey.KmsKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsKeyConfig <a name="KmsKeyConfig" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kmskey"

&kmskey.KmsKeyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BypassPolicyLockoutSafetyCheck: interface{},
	CustomerMasterKeySpec: *string,
	CustomKeyStoreId: *string,
	DeletionWindowInDays: *f64,
	Description: *string,
	EnableKeyRotation: interface{},
	Id: *string,
	IsEnabled: interface{},
	KeyUsage: *string,
	MultiRegion: interface{},
	Policy: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.bypassPolicyLockoutSafetyCheck">BypassPolicyLockoutSafetyCheck</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#bypass_policy_lockout_safety_check KmsKey#bypass_policy_lockout_safety_check}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.customerMasterKeySpec">CustomerMasterKeySpec</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#customer_master_key_spec KmsKey#customer_master_key_spec}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.customKeyStoreId">CustomKeyStoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#custom_key_store_id KmsKey#custom_key_store_id}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.deletionWindowInDays">DeletionWindowInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#deletion_window_in_days KmsKey#deletion_window_in_days}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#description KmsKey#description}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.enableKeyRotation">EnableKeyRotation</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#enable_key_rotation KmsKey#enable_key_rotation}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#id KmsKey#id}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#is_enabled KmsKey#is_enabled}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.keyUsage">KeyUsage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#key_usage KmsKey#key_usage}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.multiRegion">MultiRegion</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#multi_region KmsKey#multi_region}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.policy">Policy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#policy KmsKey#policy}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#tags KmsKey#tags}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#tags_all KmsKey#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BypassPolicyLockoutSafetyCheck`<sup>Optional</sup> <a name="BypassPolicyLockoutSafetyCheck" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.bypassPolicyLockoutSafetyCheck"></a>

```go
BypassPolicyLockoutSafetyCheck interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#bypass_policy_lockout_safety_check KmsKey#bypass_policy_lockout_safety_check}.

---

##### `CustomerMasterKeySpec`<sup>Optional</sup> <a name="CustomerMasterKeySpec" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.customerMasterKeySpec"></a>

```go
CustomerMasterKeySpec *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#customer_master_key_spec KmsKey#customer_master_key_spec}.

---

##### `CustomKeyStoreId`<sup>Optional</sup> <a name="CustomKeyStoreId" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.customKeyStoreId"></a>

```go
CustomKeyStoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#custom_key_store_id KmsKey#custom_key_store_id}.

---

##### `DeletionWindowInDays`<sup>Optional</sup> <a name="DeletionWindowInDays" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.deletionWindowInDays"></a>

```go
DeletionWindowInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#deletion_window_in_days KmsKey#deletion_window_in_days}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#description KmsKey#description}.

---

##### `EnableKeyRotation`<sup>Optional</sup> <a name="EnableKeyRotation" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.enableKeyRotation"></a>

```go
EnableKeyRotation interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#enable_key_rotation KmsKey#enable_key_rotation}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#id KmsKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#is_enabled KmsKey#is_enabled}.

---

##### `KeyUsage`<sup>Optional</sup> <a name="KeyUsage" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.keyUsage"></a>

```go
KeyUsage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#key_usage KmsKey#key_usage}.

---

##### `MultiRegion`<sup>Optional</sup> <a name="MultiRegion" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.multiRegion"></a>

```go
MultiRegion interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#multi_region KmsKey#multi_region}.

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.policy"></a>

```go
Policy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#policy KmsKey#policy}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#tags KmsKey#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#tags_all KmsKey#tags_all}.

---



