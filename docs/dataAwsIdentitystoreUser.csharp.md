# `dataAwsIdentitystoreUser` Submodule <a name="`dataAwsIdentitystoreUser` Submodule" id="@cdktf/provider-aws.dataAwsIdentitystoreUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsIdentitystoreUser <a name="DataAwsIdentitystoreUser" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user aws_identitystore_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreUser(Construct Scope, string Id, DataAwsIdentitystoreUserConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig">DataAwsIdentitystoreUserConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAlternateIdentifier` <a name="PutAlternateIdentifier" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.putAlternateIdentifier"></a>

```csharp
private void PutAlternateIdentifier(DataAwsIdentitystoreUserAlternateIdentifier Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.putAlternateIdentifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier">DataAwsIdentitystoreUserAlternateIdentifier</a>

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.putFilter"></a>

```csharp
private void PutFilter(DataAwsIdentitystoreUserFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter">DataAwsIdentitystoreUserFilter</a>

---

##### `ResetAlternateIdentifier` <a name="ResetAlternateIdentifier" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetAlternateIdentifier"></a>

```csharp
private void ResetAlternateIdentifier()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetUserId"></a>

```csharp
private void ResetUserId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsIdentitystoreUser.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsIdentitystoreUser.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsIdentitystoreUser.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.addresses">Addresses</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList">DataAwsIdentitystoreUserAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.alternateIdentifier">AlternateIdentifier</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference">DataAwsIdentitystoreUserAlternateIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.emails">Emails</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList">DataAwsIdentitystoreUserEmailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.externalIds">ExternalIds</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList">DataAwsIdentitystoreUserExternalIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference">DataAwsIdentitystoreUserFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.name">Name</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList">DataAwsIdentitystoreUserNameList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.nickname">Nickname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.phoneNumbers">PhoneNumbers</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList">DataAwsIdentitystoreUserPhoneNumbersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.preferredLanguage">PreferredLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.profileUrl">ProfileUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.userType">UserType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.alternateIdentifierInput">AlternateIdentifierInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier">DataAwsIdentitystoreUserAlternateIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter">DataAwsIdentitystoreUserFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.identityStoreIdInput">IdentityStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.identityStoreId">IdentityStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.userId">UserId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.addresses"></a>

```csharp
public DataAwsIdentitystoreUserAddressesList Addresses { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList">DataAwsIdentitystoreUserAddressesList</a>

---

##### `AlternateIdentifier`<sup>Required</sup> <a name="AlternateIdentifier" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.alternateIdentifier"></a>

```csharp
public DataAwsIdentitystoreUserAlternateIdentifierOutputReference AlternateIdentifier { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference">DataAwsIdentitystoreUserAlternateIdentifierOutputReference</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Emails`<sup>Required</sup> <a name="Emails" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.emails"></a>

```csharp
public DataAwsIdentitystoreUserEmailsList Emails { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList">DataAwsIdentitystoreUserEmailsList</a>

---

##### `ExternalIds`<sup>Required</sup> <a name="ExternalIds" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.externalIds"></a>

```csharp
public DataAwsIdentitystoreUserExternalIdsList ExternalIds { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList">DataAwsIdentitystoreUserExternalIdsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.filter"></a>

```csharp
public DataAwsIdentitystoreUserFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference">DataAwsIdentitystoreUserFilterOutputReference</a>

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.name"></a>

```csharp
public DataAwsIdentitystoreUserNameList Name { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList">DataAwsIdentitystoreUserNameList</a>

---

##### `Nickname`<sup>Required</sup> <a name="Nickname" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.nickname"></a>

```csharp
public string Nickname { get; }
```

- *Type:* string

---

##### `PhoneNumbers`<sup>Required</sup> <a name="PhoneNumbers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.phoneNumbers"></a>

```csharp
public DataAwsIdentitystoreUserPhoneNumbersList PhoneNumbers { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList">DataAwsIdentitystoreUserPhoneNumbersList</a>

---

##### `PreferredLanguage`<sup>Required</sup> <a name="PreferredLanguage" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.preferredLanguage"></a>

```csharp
public string PreferredLanguage { get; }
```

- *Type:* string

---

##### `ProfileUrl`<sup>Required</sup> <a name="ProfileUrl" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.profileUrl"></a>

```csharp
public string ProfileUrl { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `UserType`<sup>Required</sup> <a name="UserType" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.userType"></a>

```csharp
public string UserType { get; }
```

- *Type:* string

---

##### `AlternateIdentifierInput`<sup>Optional</sup> <a name="AlternateIdentifierInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.alternateIdentifierInput"></a>

```csharp
public DataAwsIdentitystoreUserAlternateIdentifier AlternateIdentifierInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier">DataAwsIdentitystoreUserAlternateIdentifier</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.filterInput"></a>

```csharp
public DataAwsIdentitystoreUserFilter FilterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter">DataAwsIdentitystoreUserFilter</a>

---

##### `IdentityStoreIdInput`<sup>Optional</sup> <a name="IdentityStoreIdInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.identityStoreIdInput"></a>

```csharp
public string IdentityStoreIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityStoreId`<sup>Required</sup> <a name="IdentityStoreId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.identityStoreId"></a>

```csharp
public string IdentityStoreId { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsIdentitystoreUserAddresses <a name="DataAwsIdentitystoreUserAddresses" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddresses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreUserAddresses {

};
```


### DataAwsIdentitystoreUserAlternateIdentifier <a name="DataAwsIdentitystoreUserAlternateIdentifier" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreUserAlternateIdentifier {
    DataAwsIdentitystoreUserAlternateIdentifierExternalId ExternalId = null,
    DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute UniqueAttribute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier.property.externalId">ExternalId</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId">DataAwsIdentitystoreUserAlternateIdentifierExternalId</a></code> | external_id block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier.property.uniqueAttribute">UniqueAttribute</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute</a></code> | unique_attribute block. |

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier.property.externalId"></a>

```csharp
public DataAwsIdentitystoreUserAlternateIdentifierExternalId ExternalId { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId">DataAwsIdentitystoreUserAlternateIdentifierExternalId</a>

external_id block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#external_id DataAwsIdentitystoreUser#external_id}

---

##### `UniqueAttribute`<sup>Optional</sup> <a name="UniqueAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier.property.uniqueAttribute"></a>

```csharp
public DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute UniqueAttribute { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute</a>

unique_attribute block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#unique_attribute DataAwsIdentitystoreUser#unique_attribute}

---

### DataAwsIdentitystoreUserAlternateIdentifierExternalId <a name="DataAwsIdentitystoreUserAlternateIdentifierExternalId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreUserAlternateIdentifierExternalId {
    string Id,
    string Issuer
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#id DataAwsIdentitystoreUser#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId.property.issuer">Issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#issuer DataAwsIdentitystoreUser#issuer}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#id DataAwsIdentitystoreUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#issuer DataAwsIdentitystoreUser#issuer}.

---

### DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute <a name="DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute {
    string AttributePath,
    string AttributeValue
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute.property.attributePath">AttributePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_path DataAwsIdentitystoreUser#attribute_path}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute.property.attributeValue">AttributeValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_value DataAwsIdentitystoreUser#attribute_value}. |

---

##### `AttributePath`<sup>Required</sup> <a name="AttributePath" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute.property.attributePath"></a>

```csharp
public string AttributePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_path DataAwsIdentitystoreUser#attribute_path}.

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute.property.attributeValue"></a>

```csharp
public string AttributeValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_value DataAwsIdentitystoreUser#attribute_value}.

---

### DataAwsIdentitystoreUserConfig <a name="DataAwsIdentitystoreUserConfig" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreUserConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IdentityStoreId,
    DataAwsIdentitystoreUserAlternateIdentifier AlternateIdentifier = null,
    DataAwsIdentitystoreUserFilter Filter = null,
    string Id = null,
    string UserId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.identityStoreId">IdentityStoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#identity_store_id DataAwsIdentitystoreUser#identity_store_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.alternateIdentifier">AlternateIdentifier</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier">DataAwsIdentitystoreUserAlternateIdentifier</a></code> | alternate_identifier block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter">DataAwsIdentitystoreUserFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#id DataAwsIdentitystoreUser#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.userId">UserId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#user_id DataAwsIdentitystoreUser#user_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IdentityStoreId`<sup>Required</sup> <a name="IdentityStoreId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.identityStoreId"></a>

```csharp
public string IdentityStoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#identity_store_id DataAwsIdentitystoreUser#identity_store_id}.

---

##### `AlternateIdentifier`<sup>Optional</sup> <a name="AlternateIdentifier" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.alternateIdentifier"></a>

```csharp
public DataAwsIdentitystoreUserAlternateIdentifier AlternateIdentifier { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier">DataAwsIdentitystoreUserAlternateIdentifier</a>

alternate_identifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#alternate_identifier DataAwsIdentitystoreUser#alternate_identifier}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.filter"></a>

```csharp
public DataAwsIdentitystoreUserFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter">DataAwsIdentitystoreUserFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#filter DataAwsIdentitystoreUser#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#id DataAwsIdentitystoreUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#user_id DataAwsIdentitystoreUser#user_id}.

---

### DataAwsIdentitystoreUserEmails <a name="DataAwsIdentitystoreUserEmails" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreUserEmails {

};
```


### DataAwsIdentitystoreUserExternalIds <a name="DataAwsIdentitystoreUserExternalIds" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIds.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreUserExternalIds {

};
```


### DataAwsIdentitystoreUserFilter <a name="DataAwsIdentitystoreUserFilter" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreUserFilter {
    string AttributePath,
    string AttributeValue
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter.property.attributePath">AttributePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_path DataAwsIdentitystoreUser#attribute_path}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter.property.attributeValue">AttributeValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_value DataAwsIdentitystoreUser#attribute_value}. |

---

##### `AttributePath`<sup>Required</sup> <a name="AttributePath" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter.property.attributePath"></a>

```csharp
public string AttributePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_path DataAwsIdentitystoreUser#attribute_path}.

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter.property.attributeValue"></a>

```csharp
public string AttributeValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_value DataAwsIdentitystoreUser#attribute_value}.

---

### DataAwsIdentitystoreUserName <a name="DataAwsIdentitystoreUserName" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserName.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreUserName {

};
```


### DataAwsIdentitystoreUserPhoneNumbers <a name="DataAwsIdentitystoreUserPhoneNumbers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreUserPhoneNumbers {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsIdentitystoreUserAddressesList <a name="DataAwsIdentitystoreUserAddressesList" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreUserAddressesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.get"></a>

```csharp
private DataAwsIdentitystoreUserAddressesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsIdentitystoreUserAddressesOutputReference <a name="DataAwsIdentitystoreUserAddressesOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreUserAddressesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.formatted">Formatted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.locality">Locality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.primary">Primary</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.streetAddress">StreetAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddresses">DataAwsIdentitystoreUserAddresses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `Formatted`<sup>Required</sup> <a name="Formatted" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.formatted"></a>

```csharp
public string Formatted { get; }
```

- *Type:* string

---

##### `Locality`<sup>Required</sup> <a name="Locality" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.locality"></a>

```csharp
public string Locality { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.primary"></a>

```csharp
public IResolvable Primary { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `StreetAddress`<sup>Required</sup> <a name="StreetAddress" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.streetAddress"></a>

```csharp
public string StreetAddress { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.internalValue"></a>

```csharp
public DataAwsIdentitystoreUserAddresses InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddresses">DataAwsIdentitystoreUserAddresses</a>

---


### DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference <a name="DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId">DataAwsIdentitystoreUserAlternateIdentifierExternalId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.internalValue"></a>

```csharp
public DataAwsIdentitystoreUserAlternateIdentifierExternalId InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId">DataAwsIdentitystoreUserAlternateIdentifierExternalId</a>

---


### DataAwsIdentitystoreUserAlternateIdentifierOutputReference <a name="DataAwsIdentitystoreUserAlternateIdentifierOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreUserAlternateIdentifierOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExternalId` <a name="PutExternalId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.putExternalId"></a>

```csharp
private void PutExternalId(DataAwsIdentitystoreUserAlternateIdentifierExternalId Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.putExternalId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId">DataAwsIdentitystoreUserAlternateIdentifierExternalId</a>

---

##### `PutUniqueAttribute` <a name="PutUniqueAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.putUniqueAttribute"></a>

```csharp
private void PutUniqueAttribute(DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.putUniqueAttribute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute</a>

---

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.resetExternalId"></a>

```csharp
private void ResetExternalId()
```

##### `ResetUniqueAttribute` <a name="ResetUniqueAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.resetUniqueAttribute"></a>

```csharp
private void ResetUniqueAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.externalId">ExternalId</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference">DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.uniqueAttribute">UniqueAttribute</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId">DataAwsIdentitystoreUserAlternateIdentifierExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.uniqueAttributeInput">UniqueAttributeInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier">DataAwsIdentitystoreUserAlternateIdentifier</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.externalId"></a>

```csharp
public DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference ExternalId { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference">DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference</a>

---

##### `UniqueAttribute`<sup>Required</sup> <a name="UniqueAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.uniqueAttribute"></a>

```csharp
public DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference UniqueAttribute { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference</a>

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.externalIdInput"></a>

```csharp
public DataAwsIdentitystoreUserAlternateIdentifierExternalId ExternalIdInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId">DataAwsIdentitystoreUserAlternateIdentifierExternalId</a>

---

##### `UniqueAttributeInput`<sup>Optional</sup> <a name="UniqueAttributeInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.uniqueAttributeInput"></a>

```csharp
public DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute UniqueAttributeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.internalValue"></a>

```csharp
public DataAwsIdentitystoreUserAlternateIdentifier InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier">DataAwsIdentitystoreUserAlternateIdentifier</a>

---


### DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference <a name="DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.attributePathInput">AttributePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.attributeValueInput">AttributeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.attributePath">AttributePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.attributeValue">AttributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributePathInput`<sup>Optional</sup> <a name="AttributePathInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.attributePathInput"></a>

```csharp
public string AttributePathInput { get; }
```

- *Type:* string

---

##### `AttributeValueInput`<sup>Optional</sup> <a name="AttributeValueInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.attributeValueInput"></a>

```csharp
public string AttributeValueInput { get; }
```

- *Type:* string

---

##### `AttributePath`<sup>Required</sup> <a name="AttributePath" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.attributePath"></a>

```csharp
public string AttributePath { get; }
```

- *Type:* string

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.attributeValue"></a>

```csharp
public string AttributeValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.internalValue"></a>

```csharp
public DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute</a>

---


### DataAwsIdentitystoreUserEmailsList <a name="DataAwsIdentitystoreUserEmailsList" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreUserEmailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.get"></a>

```csharp
private DataAwsIdentitystoreUserEmailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsIdentitystoreUserEmailsOutputReference <a name="DataAwsIdentitystoreUserEmailsOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreUserEmailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.primary">Primary</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmails">DataAwsIdentitystoreUserEmails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.primary"></a>

```csharp
public IResolvable Primary { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.internalValue"></a>

```csharp
public DataAwsIdentitystoreUserEmails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmails">DataAwsIdentitystoreUserEmails</a>

---


### DataAwsIdentitystoreUserExternalIdsList <a name="DataAwsIdentitystoreUserExternalIdsList" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreUserExternalIdsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.get"></a>

```csharp
private DataAwsIdentitystoreUserExternalIdsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsIdentitystoreUserExternalIdsOutputReference <a name="DataAwsIdentitystoreUserExternalIdsOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreUserExternalIdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIds">DataAwsIdentitystoreUserExternalIds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.internalValue"></a>

```csharp
public DataAwsIdentitystoreUserExternalIds InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIds">DataAwsIdentitystoreUserExternalIds</a>

---


### DataAwsIdentitystoreUserFilterOutputReference <a name="DataAwsIdentitystoreUserFilterOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreUserFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.attributePathInput">AttributePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.attributeValueInput">AttributeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.attributePath">AttributePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.attributeValue">AttributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter">DataAwsIdentitystoreUserFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributePathInput`<sup>Optional</sup> <a name="AttributePathInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.attributePathInput"></a>

```csharp
public string AttributePathInput { get; }
```

- *Type:* string

---

##### `AttributeValueInput`<sup>Optional</sup> <a name="AttributeValueInput" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.attributeValueInput"></a>

```csharp
public string AttributeValueInput { get; }
```

- *Type:* string

---

##### `AttributePath`<sup>Required</sup> <a name="AttributePath" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.attributePath"></a>

```csharp
public string AttributePath { get; }
```

- *Type:* string

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.attributeValue"></a>

```csharp
public string AttributeValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.internalValue"></a>

```csharp
public DataAwsIdentitystoreUserFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter">DataAwsIdentitystoreUserFilter</a>

---


### DataAwsIdentitystoreUserNameList <a name="DataAwsIdentitystoreUserNameList" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreUserNameList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.get"></a>

```csharp
private DataAwsIdentitystoreUserNameOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsIdentitystoreUserNameOutputReference <a name="DataAwsIdentitystoreUserNameOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreUserNameOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.familyName">FamilyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.formatted">Formatted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.givenName">GivenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.honorificPrefix">HonorificPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.honorificSuffix">HonorificSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.middleName">MiddleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserName">DataAwsIdentitystoreUserName</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FamilyName`<sup>Required</sup> <a name="FamilyName" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.familyName"></a>

```csharp
public string FamilyName { get; }
```

- *Type:* string

---

##### `Formatted`<sup>Required</sup> <a name="Formatted" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.formatted"></a>

```csharp
public string Formatted { get; }
```

- *Type:* string

---

##### `GivenName`<sup>Required</sup> <a name="GivenName" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.givenName"></a>

```csharp
public string GivenName { get; }
```

- *Type:* string

---

##### `HonorificPrefix`<sup>Required</sup> <a name="HonorificPrefix" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.honorificPrefix"></a>

```csharp
public string HonorificPrefix { get; }
```

- *Type:* string

---

##### `HonorificSuffix`<sup>Required</sup> <a name="HonorificSuffix" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.honorificSuffix"></a>

```csharp
public string HonorificSuffix { get; }
```

- *Type:* string

---

##### `MiddleName`<sup>Required</sup> <a name="MiddleName" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.middleName"></a>

```csharp
public string MiddleName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.internalValue"></a>

```csharp
public DataAwsIdentitystoreUserName InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserName">DataAwsIdentitystoreUserName</a>

---


### DataAwsIdentitystoreUserPhoneNumbersList <a name="DataAwsIdentitystoreUserPhoneNumbersList" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreUserPhoneNumbersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.get"></a>

```csharp
private DataAwsIdentitystoreUserPhoneNumbersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsIdentitystoreUserPhoneNumbersOutputReference <a name="DataAwsIdentitystoreUserPhoneNumbersOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreUserPhoneNumbersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.primary">Primary</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbers">DataAwsIdentitystoreUserPhoneNumbers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.primary"></a>

```csharp
public IResolvable Primary { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.internalValue"></a>

```csharp
public DataAwsIdentitystoreUserPhoneNumbers InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbers">DataAwsIdentitystoreUserPhoneNumbers</a>

---



