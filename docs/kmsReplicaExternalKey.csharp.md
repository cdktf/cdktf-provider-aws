# `kmsReplicaExternalKey` Submodule <a name="`kmsReplicaExternalKey` Submodule" id="@cdktf/provider-aws.kmsReplicaExternalKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsReplicaExternalKey <a name="KmsReplicaExternalKey" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key aws_kms_replica_external_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KmsReplicaExternalKey(Construct Scope, string Id, KmsReplicaExternalKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig">KmsReplicaExternalKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig">KmsReplicaExternalKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetBypassPolicyLockoutSafetyCheck">ResetBypassPolicyLockoutSafetyCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetDeletionWindowInDays">ResetDeletionWindowInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetKeyMaterialBase64">ResetKeyMaterialBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetValidTo">ResetValidTo</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetBypassPolicyLockoutSafetyCheck` <a name="ResetBypassPolicyLockoutSafetyCheck" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetBypassPolicyLockoutSafetyCheck"></a>

```csharp
private void ResetBypassPolicyLockoutSafetyCheck()
```

##### `ResetDeletionWindowInDays` <a name="ResetDeletionWindowInDays" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetDeletionWindowInDays"></a>

```csharp
private void ResetDeletionWindowInDays()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeyMaterialBase64` <a name="ResetKeyMaterialBase64" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetKeyMaterialBase64"></a>

```csharp
private void ResetKeyMaterialBase64()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetPolicy"></a>

```csharp
private void ResetPolicy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetValidTo` <a name="ResetValidTo" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetValidTo"></a>

```csharp
private void ResetValidTo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

KmsReplicaExternalKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

KmsReplicaExternalKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

KmsReplicaExternalKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.expirationModel">ExpirationModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.keyState">KeyState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.keyUsage">KeyUsage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.bypassPolicyLockoutSafetyCheckInput">BypassPolicyLockoutSafetyCheckInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.deletionWindowInDaysInput">DeletionWindowInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.keyMaterialBase64Input">KeyMaterialBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.primaryKeyArnInput">PrimaryKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.validToInput">ValidToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.bypassPolicyLockoutSafetyCheck">BypassPolicyLockoutSafetyCheck</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.deletionWindowInDays">DeletionWindowInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.keyMaterialBase64">KeyMaterialBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.primaryKeyArn">PrimaryKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.validTo">ValidTo</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ExpirationModel`<sup>Required</sup> <a name="ExpirationModel" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.expirationModel"></a>

```csharp
public string ExpirationModel { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `KeyState`<sup>Required</sup> <a name="KeyState" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.keyState"></a>

```csharp
public string KeyState { get; }
```

- *Type:* string

---

##### `KeyUsage`<sup>Required</sup> <a name="KeyUsage" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.keyUsage"></a>

```csharp
public string KeyUsage { get; }
```

- *Type:* string

---

##### `BypassPolicyLockoutSafetyCheckInput`<sup>Optional</sup> <a name="BypassPolicyLockoutSafetyCheckInput" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.bypassPolicyLockoutSafetyCheckInput"></a>

```csharp
public object BypassPolicyLockoutSafetyCheckInput { get; }
```

- *Type:* object

---

##### `DeletionWindowInDaysInput`<sup>Optional</sup> <a name="DeletionWindowInDaysInput" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.deletionWindowInDaysInput"></a>

```csharp
public double DeletionWindowInDaysInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyMaterialBase64Input`<sup>Optional</sup> <a name="KeyMaterialBase64Input" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.keyMaterialBase64Input"></a>

```csharp
public string KeyMaterialBase64Input { get; }
```

- *Type:* string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `PrimaryKeyArnInput`<sup>Optional</sup> <a name="PrimaryKeyArnInput" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.primaryKeyArnInput"></a>

```csharp
public string PrimaryKeyArnInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ValidToInput`<sup>Optional</sup> <a name="ValidToInput" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.validToInput"></a>

```csharp
public string ValidToInput { get; }
```

- *Type:* string

---

##### `BypassPolicyLockoutSafetyCheck`<sup>Required</sup> <a name="BypassPolicyLockoutSafetyCheck" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.bypassPolicyLockoutSafetyCheck"></a>

```csharp
public object BypassPolicyLockoutSafetyCheck { get; }
```

- *Type:* object

---

##### `DeletionWindowInDays`<sup>Required</sup> <a name="DeletionWindowInDays" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.deletionWindowInDays"></a>

```csharp
public double DeletionWindowInDays { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyMaterialBase64`<sup>Required</sup> <a name="KeyMaterialBase64" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.keyMaterialBase64"></a>

```csharp
public string KeyMaterialBase64 { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `PrimaryKeyArn`<sup>Required</sup> <a name="PrimaryKeyArn" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.primaryKeyArn"></a>

```csharp
public string PrimaryKeyArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ValidTo`<sup>Required</sup> <a name="ValidTo" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.validTo"></a>

```csharp
public string ValidTo { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsReplicaExternalKeyConfig <a name="KmsReplicaExternalKeyConfig" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KmsReplicaExternalKeyConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PrimaryKeyArn,
    object BypassPolicyLockoutSafetyCheck = null,
    double DeletionWindowInDays = null,
    string Description = null,
    object Enabled = null,
    string Id = null,
    string KeyMaterialBase64 = null,
    string Policy = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    string ValidTo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.primaryKeyArn">PrimaryKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#primary_key_arn KmsReplicaExternalKey#primary_key_arn}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.bypassPolicyLockoutSafetyCheck">BypassPolicyLockoutSafetyCheck</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#bypass_policy_lockout_safety_check KmsReplicaExternalKey#bypass_policy_lockout_safety_check}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.deletionWindowInDays">DeletionWindowInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#deletion_window_in_days KmsReplicaExternalKey#deletion_window_in_days}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#description KmsReplicaExternalKey#description}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#enabled KmsReplicaExternalKey#enabled}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#id KmsReplicaExternalKey#id}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.keyMaterialBase64">KeyMaterialBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#key_material_base64 KmsReplicaExternalKey#key_material_base64}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.policy">Policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#policy KmsReplicaExternalKey#policy}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#tags KmsReplicaExternalKey#tags}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#tags_all KmsReplicaExternalKey#tags_all}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.validTo">ValidTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#valid_to KmsReplicaExternalKey#valid_to}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PrimaryKeyArn`<sup>Required</sup> <a name="PrimaryKeyArn" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.primaryKeyArn"></a>

```csharp
public string PrimaryKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#primary_key_arn KmsReplicaExternalKey#primary_key_arn}.

---

##### `BypassPolicyLockoutSafetyCheck`<sup>Optional</sup> <a name="BypassPolicyLockoutSafetyCheck" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.bypassPolicyLockoutSafetyCheck"></a>

```csharp
public object BypassPolicyLockoutSafetyCheck { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#bypass_policy_lockout_safety_check KmsReplicaExternalKey#bypass_policy_lockout_safety_check}.

---

##### `DeletionWindowInDays`<sup>Optional</sup> <a name="DeletionWindowInDays" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.deletionWindowInDays"></a>

```csharp
public double DeletionWindowInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#deletion_window_in_days KmsReplicaExternalKey#deletion_window_in_days}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#description KmsReplicaExternalKey#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#enabled KmsReplicaExternalKey#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#id KmsReplicaExternalKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyMaterialBase64`<sup>Optional</sup> <a name="KeyMaterialBase64" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.keyMaterialBase64"></a>

```csharp
public string KeyMaterialBase64 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#key_material_base64 KmsReplicaExternalKey#key_material_base64}.

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#policy KmsReplicaExternalKey#policy}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#tags KmsReplicaExternalKey#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#tags_all KmsReplicaExternalKey#tags_all}.

---

##### `ValidTo`<sup>Optional</sup> <a name="ValidTo" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.validTo"></a>

```csharp
public string ValidTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#valid_to KmsReplicaExternalKey#valid_to}.

---



