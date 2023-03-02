# `kmsKey` Submodule <a name="`kmsKey` Submodule" id="@cdktf/provider-aws.kmsKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsKey <a name="KmsKey" id="@cdktf/provider-aws.kmsKey.KmsKey"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_key aws_kms_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KmsKey(Construct Scope, string Id, KmsKeyConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig">KmsKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.kmsKey.KmsKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.kmsKey.KmsKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kmsKey.KmsKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.kmsKey.KmsKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.kmsKey.KmsKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.kmsKey.KmsKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.kmsKey.KmsKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.kmsKey.KmsKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsKey.KmsKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetBypassPolicyLockoutSafetyCheck` <a name="ResetBypassPolicyLockoutSafetyCheck" id="@cdktf/provider-aws.kmsKey.KmsKey.resetBypassPolicyLockoutSafetyCheck"></a>

```csharp
private void ResetBypassPolicyLockoutSafetyCheck()
```

##### `ResetCustomerMasterKeySpec` <a name="ResetCustomerMasterKeySpec" id="@cdktf/provider-aws.kmsKey.KmsKey.resetCustomerMasterKeySpec"></a>

```csharp
private void ResetCustomerMasterKeySpec()
```

##### `ResetCustomKeyStoreId` <a name="ResetCustomKeyStoreId" id="@cdktf/provider-aws.kmsKey.KmsKey.resetCustomKeyStoreId"></a>

```csharp
private void ResetCustomKeyStoreId()
```

##### `ResetDeletionWindowInDays` <a name="ResetDeletionWindowInDays" id="@cdktf/provider-aws.kmsKey.KmsKey.resetDeletionWindowInDays"></a>

```csharp
private void ResetDeletionWindowInDays()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.kmsKey.KmsKey.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnableKeyRotation` <a name="ResetEnableKeyRotation" id="@cdktf/provider-aws.kmsKey.KmsKey.resetEnableKeyRotation"></a>

```csharp
private void ResetEnableKeyRotation()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.kmsKey.KmsKey.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-aws.kmsKey.KmsKey.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```

##### `ResetKeyUsage` <a name="ResetKeyUsage" id="@cdktf/provider-aws.kmsKey.KmsKey.resetKeyUsage"></a>

```csharp
private void ResetKeyUsage()
```

##### `ResetMultiRegion` <a name="ResetMultiRegion" id="@cdktf/provider-aws.kmsKey.KmsKey.resetMultiRegion"></a>

```csharp
private void ResetMultiRegion()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktf/provider-aws.kmsKey.KmsKey.resetPolicy"></a>

```csharp
private void ResetPolicy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.kmsKey.KmsKey.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.kmsKey.KmsKey.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.kmsKey.KmsKey.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

KmsKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.kmsKey.KmsKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.kmsKey.KmsKey.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

KmsKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.kmsKey.KmsKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.kmsKey.KmsKey.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

KmsKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.kmsKey.KmsKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.bypassPolicyLockoutSafetyCheckInput">BypassPolicyLockoutSafetyCheckInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.customerMasterKeySpecInput">CustomerMasterKeySpecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.customKeyStoreIdInput">CustomKeyStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.deletionWindowInDaysInput">DeletionWindowInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.enableKeyRotationInput">EnableKeyRotationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.keyUsageInput">KeyUsageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.multiRegionInput">MultiRegionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.bypassPolicyLockoutSafetyCheck">BypassPolicyLockoutSafetyCheck</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.customerMasterKeySpec">CustomerMasterKeySpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.customKeyStoreId">CustomKeyStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.deletionWindowInDays">DeletionWindowInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.enableKeyRotation">EnableKeyRotation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.keyUsage">KeyUsage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.multiRegion">MultiRegion</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.kmsKey.KmsKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.kmsKey.KmsKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kmsKey.KmsKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.kmsKey.KmsKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.kmsKey.KmsKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.kmsKey.KmsKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.kmsKey.KmsKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.kmsKey.KmsKey.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.kmsKey.KmsKey.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.kmsKey.KmsKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.kmsKey.KmsKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.kmsKey.KmsKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.kmsKey.KmsKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.kmsKey.KmsKey.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.kmsKey.KmsKey.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-aws.kmsKey.KmsKey.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `BypassPolicyLockoutSafetyCheckInput`<sup>Optional</sup> <a name="BypassPolicyLockoutSafetyCheckInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.bypassPolicyLockoutSafetyCheckInput"></a>

```csharp
public object BypassPolicyLockoutSafetyCheckInput { get; }
```

- *Type:* object

---

##### `CustomerMasterKeySpecInput`<sup>Optional</sup> <a name="CustomerMasterKeySpecInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.customerMasterKeySpecInput"></a>

```csharp
public string CustomerMasterKeySpecInput { get; }
```

- *Type:* string

---

##### `CustomKeyStoreIdInput`<sup>Optional</sup> <a name="CustomKeyStoreIdInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.customKeyStoreIdInput"></a>

```csharp
public string CustomKeyStoreIdInput { get; }
```

- *Type:* string

---

##### `DeletionWindowInDaysInput`<sup>Optional</sup> <a name="DeletionWindowInDaysInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.deletionWindowInDaysInput"></a>

```csharp
public double DeletionWindowInDaysInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnableKeyRotationInput`<sup>Optional</sup> <a name="EnableKeyRotationInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.enableKeyRotationInput"></a>

```csharp
public object EnableKeyRotationInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `KeyUsageInput`<sup>Optional</sup> <a name="KeyUsageInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.keyUsageInput"></a>

```csharp
public string KeyUsageInput { get; }
```

- *Type:* string

---

##### `MultiRegionInput`<sup>Optional</sup> <a name="MultiRegionInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.multiRegionInput"></a>

```csharp
public object MultiRegionInput { get; }
```

- *Type:* object

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.kmsKey.KmsKey.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BypassPolicyLockoutSafetyCheck`<sup>Required</sup> <a name="BypassPolicyLockoutSafetyCheck" id="@cdktf/provider-aws.kmsKey.KmsKey.property.bypassPolicyLockoutSafetyCheck"></a>

```csharp
public object BypassPolicyLockoutSafetyCheck { get; }
```

- *Type:* object

---

##### `CustomerMasterKeySpec`<sup>Required</sup> <a name="CustomerMasterKeySpec" id="@cdktf/provider-aws.kmsKey.KmsKey.property.customerMasterKeySpec"></a>

```csharp
public string CustomerMasterKeySpec { get; }
```

- *Type:* string

---

##### `CustomKeyStoreId`<sup>Required</sup> <a name="CustomKeyStoreId" id="@cdktf/provider-aws.kmsKey.KmsKey.property.customKeyStoreId"></a>

```csharp
public string CustomKeyStoreId { get; }
```

- *Type:* string

---

##### `DeletionWindowInDays`<sup>Required</sup> <a name="DeletionWindowInDays" id="@cdktf/provider-aws.kmsKey.KmsKey.property.deletionWindowInDays"></a>

```csharp
public double DeletionWindowInDays { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.kmsKey.KmsKey.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnableKeyRotation`<sup>Required</sup> <a name="EnableKeyRotation" id="@cdktf/provider-aws.kmsKey.KmsKey.property.enableKeyRotation"></a>

```csharp
public object EnableKeyRotation { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.kmsKey.KmsKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-aws.kmsKey.KmsKey.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `KeyUsage`<sup>Required</sup> <a name="KeyUsage" id="@cdktf/provider-aws.kmsKey.KmsKey.property.keyUsage"></a>

```csharp
public string KeyUsage { get; }
```

- *Type:* string

---

##### `MultiRegion`<sup>Required</sup> <a name="MultiRegion" id="@cdktf/provider-aws.kmsKey.KmsKey.property.multiRegion"></a>

```csharp
public object MultiRegion { get; }
```

- *Type:* object

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-aws.kmsKey.KmsKey.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.kmsKey.KmsKey.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.kmsKey.KmsKey.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.kmsKey.KmsKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsKeyConfig <a name="KmsKeyConfig" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KmsKeyConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object BypassPolicyLockoutSafetyCheck = null,
    string CustomerMasterKeySpec = null,
    string CustomKeyStoreId = null,
    double DeletionWindowInDays = null,
    string Description = null,
    object EnableKeyRotation = null,
    string Id = null,
    object IsEnabled = null,
    string KeyUsage = null,
    object MultiRegion = null,
    string Policy = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.bypassPolicyLockoutSafetyCheck">BypassPolicyLockoutSafetyCheck</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#bypass_policy_lockout_safety_check KmsKey#bypass_policy_lockout_safety_check}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.customerMasterKeySpec">CustomerMasterKeySpec</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#customer_master_key_spec KmsKey#customer_master_key_spec}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.customKeyStoreId">CustomKeyStoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#custom_key_store_id KmsKey#custom_key_store_id}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.deletionWindowInDays">DeletionWindowInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#deletion_window_in_days KmsKey#deletion_window_in_days}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#description KmsKey#description}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.enableKeyRotation">EnableKeyRotation</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#enable_key_rotation KmsKey#enable_key_rotation}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#id KmsKey#id}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#is_enabled KmsKey#is_enabled}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.keyUsage">KeyUsage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#key_usage KmsKey#key_usage}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.multiRegion">MultiRegion</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#multi_region KmsKey#multi_region}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.policy">Policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#policy KmsKey#policy}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#tags KmsKey#tags}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#tags_all KmsKey#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BypassPolicyLockoutSafetyCheck`<sup>Optional</sup> <a name="BypassPolicyLockoutSafetyCheck" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.bypassPolicyLockoutSafetyCheck"></a>

```csharp
public object BypassPolicyLockoutSafetyCheck { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#bypass_policy_lockout_safety_check KmsKey#bypass_policy_lockout_safety_check}.

---

##### `CustomerMasterKeySpec`<sup>Optional</sup> <a name="CustomerMasterKeySpec" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.customerMasterKeySpec"></a>

```csharp
public string CustomerMasterKeySpec { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#customer_master_key_spec KmsKey#customer_master_key_spec}.

---

##### `CustomKeyStoreId`<sup>Optional</sup> <a name="CustomKeyStoreId" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.customKeyStoreId"></a>

```csharp
public string CustomKeyStoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#custom_key_store_id KmsKey#custom_key_store_id}.

---

##### `DeletionWindowInDays`<sup>Optional</sup> <a name="DeletionWindowInDays" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.deletionWindowInDays"></a>

```csharp
public double DeletionWindowInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#deletion_window_in_days KmsKey#deletion_window_in_days}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#description KmsKey#description}.

---

##### `EnableKeyRotation`<sup>Optional</sup> <a name="EnableKeyRotation" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.enableKeyRotation"></a>

```csharp
public object EnableKeyRotation { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#enable_key_rotation KmsKey#enable_key_rotation}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#id KmsKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#is_enabled KmsKey#is_enabled}.

---

##### `KeyUsage`<sup>Optional</sup> <a name="KeyUsage" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.keyUsage"></a>

```csharp
public string KeyUsage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#key_usage KmsKey#key_usage}.

---

##### `MultiRegion`<sup>Optional</sup> <a name="MultiRegion" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.multiRegion"></a>

```csharp
public object MultiRegion { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#multi_region KmsKey#multi_region}.

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#policy KmsKey#policy}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#tags KmsKey#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#tags_all KmsKey#tags_all}.

---



