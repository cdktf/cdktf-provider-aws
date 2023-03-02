# `quicksightDataSource` Submodule <a name="`quicksightDataSource` Submodule" id="@cdktf/provider-aws.quicksightDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightDataSource <a name="QuicksightDataSource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source aws_quicksight_data_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSource(Construct Scope, string Id, QuicksightDataSourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig">QuicksightDataSourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig">QuicksightDataSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putPermission">PutPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putSslProperties">PutSslProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putVpcConnectionProperties">PutVpcConnectionProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetPermission">ResetPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetSslProperties">ResetSslProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetVpcConnectionProperties">ResetVpcConnectionProperties</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCredentials` <a name="PutCredentials" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putCredentials"></a>

```csharp
private void PutCredentials(QuicksightDataSourceCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials">QuicksightDataSourceCredentials</a>

---

##### `PutParameters` <a name="PutParameters" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putParameters"></a>

```csharp
private void PutParameters(QuicksightDataSourceParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters">QuicksightDataSourceParameters</a>

---

##### `PutPermission` <a name="PutPermission" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putPermission"></a>

```csharp
private void PutPermission(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putPermission.parameter.value"></a>

- *Type:* object

---

##### `PutSslProperties` <a name="PutSslProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putSslProperties"></a>

```csharp
private void PutSslProperties(QuicksightDataSourceSslProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putSslProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties">QuicksightDataSourceSslProperties</a>

---

##### `PutVpcConnectionProperties` <a name="PutVpcConnectionProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putVpcConnectionProperties"></a>

```csharp
private void PutVpcConnectionProperties(QuicksightDataSourceVpcConnectionProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putVpcConnectionProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties">QuicksightDataSourceVpcConnectionProperties</a>

---

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetAwsAccountId"></a>

```csharp
private void ResetAwsAccountId()
```

##### `ResetCredentials` <a name="ResetCredentials" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetCredentials"></a>

```csharp
private void ResetCredentials()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPermission` <a name="ResetPermission" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetPermission"></a>

```csharp
private void ResetPermission()
```

##### `ResetSslProperties` <a name="ResetSslProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetSslProperties"></a>

```csharp
private void ResetSslProperties()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetVpcConnectionProperties` <a name="ResetVpcConnectionProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetVpcConnectionProperties"></a>

```csharp
private void ResetVpcConnectionProperties()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

QuicksightDataSource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

QuicksightDataSource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

QuicksightDataSource.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.credentials">Credentials</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference">QuicksightDataSourceCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference">QuicksightDataSourceParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.permission">Permission</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList">QuicksightDataSourcePermissionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.sslProperties">SslProperties</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference">QuicksightDataSourceSslPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.vpcConnectionProperties">VpcConnectionProperties</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference">QuicksightDataSourceVpcConnectionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.credentialsInput">CredentialsInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials">QuicksightDataSourceCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.dataSourceIdInput">DataSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.parametersInput">ParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters">QuicksightDataSourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.permissionInput">PermissionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.sslPropertiesInput">SslPropertiesInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties">QuicksightDataSourceSslProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.vpcConnectionPropertiesInput">VpcConnectionPropertiesInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties">QuicksightDataSourceVpcConnectionProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.dataSourceId">DataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.credentials"></a>

```csharp
public QuicksightDataSourceCredentialsOutputReference Credentials { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference">QuicksightDataSourceCredentialsOutputReference</a>

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.parameters"></a>

```csharp
public QuicksightDataSourceParametersOutputReference Parameters { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference">QuicksightDataSourceParametersOutputReference</a>

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.permission"></a>

```csharp
public QuicksightDataSourcePermissionList Permission { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList">QuicksightDataSourcePermissionList</a>

---

##### `SslProperties`<sup>Required</sup> <a name="SslProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.sslProperties"></a>

```csharp
public QuicksightDataSourceSslPropertiesOutputReference SslProperties { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference">QuicksightDataSourceSslPropertiesOutputReference</a>

---

##### `VpcConnectionProperties`<sup>Required</sup> <a name="VpcConnectionProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.vpcConnectionProperties"></a>

```csharp
public QuicksightDataSourceVpcConnectionPropertiesOutputReference VpcConnectionProperties { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference">QuicksightDataSourceVpcConnectionPropertiesOutputReference</a>

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.awsAccountIdInput"></a>

```csharp
public string AwsAccountIdInput { get; }
```

- *Type:* string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.credentialsInput"></a>

```csharp
public QuicksightDataSourceCredentials CredentialsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials">QuicksightDataSourceCredentials</a>

---

##### `DataSourceIdInput`<sup>Optional</sup> <a name="DataSourceIdInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.dataSourceIdInput"></a>

```csharp
public string DataSourceIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.parametersInput"></a>

```csharp
public QuicksightDataSourceParameters ParametersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters">QuicksightDataSourceParameters</a>

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.permissionInput"></a>

```csharp
public object PermissionInput { get; }
```

- *Type:* object

---

##### `SslPropertiesInput`<sup>Optional</sup> <a name="SslPropertiesInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.sslPropertiesInput"></a>

```csharp
public QuicksightDataSourceSslProperties SslPropertiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties">QuicksightDataSourceSslProperties</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VpcConnectionPropertiesInput`<sup>Optional</sup> <a name="VpcConnectionPropertiesInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.vpcConnectionPropertiesInput"></a>

```csharp
public QuicksightDataSourceVpcConnectionProperties VpcConnectionPropertiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties">QuicksightDataSourceVpcConnectionProperties</a>

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.dataSourceId"></a>

```csharp
public string DataSourceId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightDataSourceConfig <a name="QuicksightDataSourceConfig" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DataSourceId,
    string Name,
    QuicksightDataSourceParameters Parameters,
    string Type,
    string AwsAccountId = null,
    QuicksightDataSourceCredentials Credentials = null,
    string Id = null,
    object Permission = null,
    QuicksightDataSourceSslProperties SslProperties = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    QuicksightDataSourceVpcConnectionProperties VpcConnectionProperties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.dataSourceId">DataSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#data_source_id QuicksightDataSource#data_source_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#name QuicksightDataSource#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters">QuicksightDataSourceParameters</a></code> | parameters block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#type QuicksightDataSource#type}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#aws_account_id QuicksightDataSource#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.credentials">Credentials</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials">QuicksightDataSourceCredentials</a></code> | credentials block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#id QuicksightDataSource#id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.permission">Permission</a></code> | <code>object</code> | permission block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.sslProperties">SslProperties</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties">QuicksightDataSourceSslProperties</a></code> | ssl_properties block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#tags QuicksightDataSource#tags}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#tags_all QuicksightDataSource#tags_all}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.vpcConnectionProperties">VpcConnectionProperties</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties">QuicksightDataSourceVpcConnectionProperties</a></code> | vpc_connection_properties block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.dataSourceId"></a>

```csharp
public string DataSourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#data_source_id QuicksightDataSource#data_source_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#name QuicksightDataSource#name}.

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.parameters"></a>

```csharp
public QuicksightDataSourceParameters Parameters { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters">QuicksightDataSourceParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#parameters QuicksightDataSource#parameters}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#type QuicksightDataSource#type}.

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#aws_account_id QuicksightDataSource#aws_account_id}.

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.credentials"></a>

```csharp
public QuicksightDataSourceCredentials Credentials { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials">QuicksightDataSourceCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#credentials QuicksightDataSource#credentials}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#id QuicksightDataSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Permission`<sup>Optional</sup> <a name="Permission" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.permission"></a>

```csharp
public object Permission { get; set; }
```

- *Type:* object

permission block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#permission QuicksightDataSource#permission}

---

##### `SslProperties`<sup>Optional</sup> <a name="SslProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.sslProperties"></a>

```csharp
public QuicksightDataSourceSslProperties SslProperties { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties">QuicksightDataSourceSslProperties</a>

ssl_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#ssl_properties QuicksightDataSource#ssl_properties}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#tags QuicksightDataSource#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#tags_all QuicksightDataSource#tags_all}.

---

##### `VpcConnectionProperties`<sup>Optional</sup> <a name="VpcConnectionProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.vpcConnectionProperties"></a>

```csharp
public QuicksightDataSourceVpcConnectionProperties VpcConnectionProperties { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties">QuicksightDataSourceVpcConnectionProperties</a>

vpc_connection_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#vpc_connection_properties QuicksightDataSource#vpc_connection_properties}

---

### QuicksightDataSourceCredentials <a name="QuicksightDataSourceCredentials" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceCredentials {
    string CopySourceArn = null,
    QuicksightDataSourceCredentialsCredentialPair CredentialPair = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials.property.copySourceArn">CopySourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#copy_source_arn QuicksightDataSource#copy_source_arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials.property.credentialPair">CredentialPair</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair">QuicksightDataSourceCredentialsCredentialPair</a></code> | credential_pair block. |

---

##### `CopySourceArn`<sup>Optional</sup> <a name="CopySourceArn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials.property.copySourceArn"></a>

```csharp
public string CopySourceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#copy_source_arn QuicksightDataSource#copy_source_arn}.

---

##### `CredentialPair`<sup>Optional</sup> <a name="CredentialPair" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials.property.credentialPair"></a>

```csharp
public QuicksightDataSourceCredentialsCredentialPair CredentialPair { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair">QuicksightDataSourceCredentialsCredentialPair</a>

credential_pair block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#credential_pair QuicksightDataSource#credential_pair}

---

### QuicksightDataSourceCredentialsCredentialPair <a name="QuicksightDataSourceCredentialsCredentialPair" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceCredentialsCredentialPair {
    string Password,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#password QuicksightDataSource#password}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#username QuicksightDataSource#username}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#password QuicksightDataSource#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#username QuicksightDataSource#username}.

---

### QuicksightDataSourceParameters <a name="QuicksightDataSourceParameters" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParameters {
    QuicksightDataSourceParametersAmazonElasticsearch AmazonElasticsearch = null,
    QuicksightDataSourceParametersAthena Athena = null,
    QuicksightDataSourceParametersAurora Aurora = null,
    QuicksightDataSourceParametersAuroraPostgresql AuroraPostgresql = null,
    QuicksightDataSourceParametersAwsIotAnalytics AwsIotAnalytics = null,
    QuicksightDataSourceParametersJira Jira = null,
    QuicksightDataSourceParametersMariaDb MariaDb = null,
    QuicksightDataSourceParametersMysql Mysql = null,
    QuicksightDataSourceParametersOracle Oracle = null,
    QuicksightDataSourceParametersPostgresql Postgresql = null,
    QuicksightDataSourceParametersPresto Presto = null,
    QuicksightDataSourceParametersRds Rds = null,
    QuicksightDataSourceParametersRedshift Redshift = null,
    QuicksightDataSourceParametersS3 S3 = null,
    QuicksightDataSourceParametersServiceNow ServiceNow = null,
    QuicksightDataSourceParametersSnowflake Snowflake = null,
    QuicksightDataSourceParametersSpark Spark = null,
    QuicksightDataSourceParametersSqlServer SqlServer = null,
    QuicksightDataSourceParametersTeradata Teradata = null,
    QuicksightDataSourceParametersTwitter Twitter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.amazonElasticsearch">AmazonElasticsearch</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch">QuicksightDataSourceParametersAmazonElasticsearch</a></code> | amazon_elasticsearch block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.athena">Athena</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena">QuicksightDataSourceParametersAthena</a></code> | athena block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.aurora">Aurora</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora">QuicksightDataSourceParametersAurora</a></code> | aurora block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.auroraPostgresql">AuroraPostgresql</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql">QuicksightDataSourceParametersAuroraPostgresql</a></code> | aurora_postgresql block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.awsIotAnalytics">AwsIotAnalytics</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics">QuicksightDataSourceParametersAwsIotAnalytics</a></code> | aws_iot_analytics block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.jira">Jira</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira">QuicksightDataSourceParametersJira</a></code> | jira block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.mariaDb">MariaDb</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb">QuicksightDataSourceParametersMariaDb</a></code> | maria_db block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.mysql">Mysql</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql">QuicksightDataSourceParametersMysql</a></code> | mysql block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.oracle">Oracle</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle">QuicksightDataSourceParametersOracle</a></code> | oracle block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.postgresql">Postgresql</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql">QuicksightDataSourceParametersPostgresql</a></code> | postgresql block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.presto">Presto</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto">QuicksightDataSourceParametersPresto</a></code> | presto block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.rds">Rds</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds">QuicksightDataSourceParametersRds</a></code> | rds block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.redshift">Redshift</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift">QuicksightDataSourceParametersRedshift</a></code> | redshift block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3">QuicksightDataSourceParametersS3</a></code> | s3 block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow">QuicksightDataSourceParametersServiceNow</a></code> | service_now block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.snowflake">Snowflake</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake">QuicksightDataSourceParametersSnowflake</a></code> | snowflake block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.spark">Spark</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark">QuicksightDataSourceParametersSpark</a></code> | spark block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.sqlServer">SqlServer</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer">QuicksightDataSourceParametersSqlServer</a></code> | sql_server block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.teradata">Teradata</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata">QuicksightDataSourceParametersTeradata</a></code> | teradata block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.twitter">Twitter</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter">QuicksightDataSourceParametersTwitter</a></code> | twitter block. |

---

##### `AmazonElasticsearch`<sup>Optional</sup> <a name="AmazonElasticsearch" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.amazonElasticsearch"></a>

```csharp
public QuicksightDataSourceParametersAmazonElasticsearch AmazonElasticsearch { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch">QuicksightDataSourceParametersAmazonElasticsearch</a>

amazon_elasticsearch block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#amazon_elasticsearch QuicksightDataSource#amazon_elasticsearch}

---

##### `Athena`<sup>Optional</sup> <a name="Athena" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.athena"></a>

```csharp
public QuicksightDataSourceParametersAthena Athena { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena">QuicksightDataSourceParametersAthena</a>

athena block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#athena QuicksightDataSource#athena}

---

##### `Aurora`<sup>Optional</sup> <a name="Aurora" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.aurora"></a>

```csharp
public QuicksightDataSourceParametersAurora Aurora { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora">QuicksightDataSourceParametersAurora</a>

aurora block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#aurora QuicksightDataSource#aurora}

---

##### `AuroraPostgresql`<sup>Optional</sup> <a name="AuroraPostgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.auroraPostgresql"></a>

```csharp
public QuicksightDataSourceParametersAuroraPostgresql AuroraPostgresql { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql">QuicksightDataSourceParametersAuroraPostgresql</a>

aurora_postgresql block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#aurora_postgresql QuicksightDataSource#aurora_postgresql}

---

##### `AwsIotAnalytics`<sup>Optional</sup> <a name="AwsIotAnalytics" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.awsIotAnalytics"></a>

```csharp
public QuicksightDataSourceParametersAwsIotAnalytics AwsIotAnalytics { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics">QuicksightDataSourceParametersAwsIotAnalytics</a>

aws_iot_analytics block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#aws_iot_analytics QuicksightDataSource#aws_iot_analytics}

---

##### `Jira`<sup>Optional</sup> <a name="Jira" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.jira"></a>

```csharp
public QuicksightDataSourceParametersJira Jira { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira">QuicksightDataSourceParametersJira</a>

jira block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#jira QuicksightDataSource#jira}

---

##### `MariaDb`<sup>Optional</sup> <a name="MariaDb" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.mariaDb"></a>

```csharp
public QuicksightDataSourceParametersMariaDb MariaDb { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb">QuicksightDataSourceParametersMariaDb</a>

maria_db block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#maria_db QuicksightDataSource#maria_db}

---

##### `Mysql`<sup>Optional</sup> <a name="Mysql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.mysql"></a>

```csharp
public QuicksightDataSourceParametersMysql Mysql { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql">QuicksightDataSourceParametersMysql</a>

mysql block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#mysql QuicksightDataSource#mysql}

---

##### `Oracle`<sup>Optional</sup> <a name="Oracle" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.oracle"></a>

```csharp
public QuicksightDataSourceParametersOracle Oracle { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle">QuicksightDataSourceParametersOracle</a>

oracle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#oracle QuicksightDataSource#oracle}

---

##### `Postgresql`<sup>Optional</sup> <a name="Postgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.postgresql"></a>

```csharp
public QuicksightDataSourceParametersPostgresql Postgresql { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql">QuicksightDataSourceParametersPostgresql</a>

postgresql block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#postgresql QuicksightDataSource#postgresql}

---

##### `Presto`<sup>Optional</sup> <a name="Presto" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.presto"></a>

```csharp
public QuicksightDataSourceParametersPresto Presto { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto">QuicksightDataSourceParametersPresto</a>

presto block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#presto QuicksightDataSource#presto}

---

##### `Rds`<sup>Optional</sup> <a name="Rds" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.rds"></a>

```csharp
public QuicksightDataSourceParametersRds Rds { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds">QuicksightDataSourceParametersRds</a>

rds block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#rds QuicksightDataSource#rds}

---

##### `Redshift`<sup>Optional</sup> <a name="Redshift" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.redshift"></a>

```csharp
public QuicksightDataSourceParametersRedshift Redshift { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift">QuicksightDataSourceParametersRedshift</a>

redshift block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#redshift QuicksightDataSource#redshift}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.s3"></a>

```csharp
public QuicksightDataSourceParametersS3 S3 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3">QuicksightDataSourceParametersS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#s3 QuicksightDataSource#s3}

---

##### `ServiceNow`<sup>Optional</sup> <a name="ServiceNow" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.serviceNow"></a>

```csharp
public QuicksightDataSourceParametersServiceNow ServiceNow { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow">QuicksightDataSourceParametersServiceNow</a>

service_now block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#service_now QuicksightDataSource#service_now}

---

##### `Snowflake`<sup>Optional</sup> <a name="Snowflake" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.snowflake"></a>

```csharp
public QuicksightDataSourceParametersSnowflake Snowflake { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake">QuicksightDataSourceParametersSnowflake</a>

snowflake block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#snowflake QuicksightDataSource#snowflake}

---

##### `Spark`<sup>Optional</sup> <a name="Spark" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.spark"></a>

```csharp
public QuicksightDataSourceParametersSpark Spark { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark">QuicksightDataSourceParametersSpark</a>

spark block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#spark QuicksightDataSource#spark}

---

##### `SqlServer`<sup>Optional</sup> <a name="SqlServer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.sqlServer"></a>

```csharp
public QuicksightDataSourceParametersSqlServer SqlServer { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer">QuicksightDataSourceParametersSqlServer</a>

sql_server block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#sql_server QuicksightDataSource#sql_server}

---

##### `Teradata`<sup>Optional</sup> <a name="Teradata" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.teradata"></a>

```csharp
public QuicksightDataSourceParametersTeradata Teradata { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata">QuicksightDataSourceParametersTeradata</a>

teradata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#teradata QuicksightDataSource#teradata}

---

##### `Twitter`<sup>Optional</sup> <a name="Twitter" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.twitter"></a>

```csharp
public QuicksightDataSourceParametersTwitter Twitter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter">QuicksightDataSourceParametersTwitter</a>

twitter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#twitter QuicksightDataSource#twitter}

---

### QuicksightDataSourceParametersAmazonElasticsearch <a name="QuicksightDataSourceParametersAmazonElasticsearch" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersAmazonElasticsearch {
    string Domain
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch.property.domain">Domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#domain QuicksightDataSource#domain}. |

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#domain QuicksightDataSource#domain}.

---

### QuicksightDataSourceParametersAthena <a name="QuicksightDataSourceParametersAthena" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersAthena {
    string WorkGroup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena.property.workGroup">WorkGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#work_group QuicksightDataSource#work_group}. |

---

##### `WorkGroup`<sup>Optional</sup> <a name="WorkGroup" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena.property.workGroup"></a>

```csharp
public string WorkGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#work_group QuicksightDataSource#work_group}.

---

### QuicksightDataSourceParametersAurora <a name="QuicksightDataSourceParametersAurora" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersAurora {
    string Database,
    string Host,
    double Port
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora.property.database">Database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora.property.host">Host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersAuroraPostgresql <a name="QuicksightDataSourceParametersAuroraPostgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersAuroraPostgresql {
    string Database,
    string Host,
    double Port
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql.property.database">Database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql.property.host">Host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersAwsIotAnalytics <a name="QuicksightDataSourceParametersAwsIotAnalytics" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersAwsIotAnalytics {
    string DataSetName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics.property.dataSetName">DataSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#data_set_name QuicksightDataSource#data_set_name}. |

---

##### `DataSetName`<sup>Required</sup> <a name="DataSetName" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics.property.dataSetName"></a>

```csharp
public string DataSetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#data_set_name QuicksightDataSource#data_set_name}.

---

### QuicksightDataSourceParametersJira <a name="QuicksightDataSourceParametersJira" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersJira {
    string SiteBaseUrl
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira.property.siteBaseUrl">SiteBaseUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#site_base_url QuicksightDataSource#site_base_url}. |

---

##### `SiteBaseUrl`<sup>Required</sup> <a name="SiteBaseUrl" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira.property.siteBaseUrl"></a>

```csharp
public string SiteBaseUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#site_base_url QuicksightDataSource#site_base_url}.

---

### QuicksightDataSourceParametersMariaDb <a name="QuicksightDataSourceParametersMariaDb" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersMariaDb {
    string Database,
    string Host,
    double Port
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb.property.database">Database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb.property.host">Host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersMysql <a name="QuicksightDataSourceParametersMysql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersMysql {
    string Database,
    string Host,
    double Port
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql.property.database">Database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql.property.host">Host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersOracle <a name="QuicksightDataSourceParametersOracle" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersOracle {
    string Database,
    string Host,
    double Port
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle.property.database">Database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle.property.host">Host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersPostgresql <a name="QuicksightDataSourceParametersPostgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersPostgresql {
    string Database,
    string Host,
    double Port
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql.property.database">Database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql.property.host">Host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersPresto <a name="QuicksightDataSourceParametersPresto" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersPresto {
    string Catalog,
    string Host,
    double Port
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto.property.catalog">Catalog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#catalog QuicksightDataSource#catalog}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto.property.host">Host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto.property.catalog"></a>

```csharp
public string Catalog { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#catalog QuicksightDataSource#catalog}.

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersRds <a name="QuicksightDataSourceParametersRds" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersRds {
    string Database,
    string InstanceId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds.property.database">Database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#instance_id QuicksightDataSource#instance_id}. |

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#instance_id QuicksightDataSource#instance_id}.

---

### QuicksightDataSourceParametersRedshift <a name="QuicksightDataSourceParametersRedshift" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersRedshift {
    string Database,
    string ClusterId = null,
    string Host = null,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.property.database">Database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#cluster_id QuicksightDataSource#cluster_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.property.host">Host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `ClusterId`<sup>Optional</sup> <a name="ClusterId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#cluster_id QuicksightDataSource#cluster_id}.

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersS3 <a name="QuicksightDataSourceParametersS3" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersS3 {
    QuicksightDataSourceParametersS3ManifestFileLocation ManifestFileLocation
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3.property.manifestFileLocation">ManifestFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation">QuicksightDataSourceParametersS3ManifestFileLocation</a></code> | manifest_file_location block. |

---

##### `ManifestFileLocation`<sup>Required</sup> <a name="ManifestFileLocation" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3.property.manifestFileLocation"></a>

```csharp
public QuicksightDataSourceParametersS3ManifestFileLocation ManifestFileLocation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation">QuicksightDataSourceParametersS3ManifestFileLocation</a>

manifest_file_location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#manifest_file_location QuicksightDataSource#manifest_file_location}

---

### QuicksightDataSourceParametersS3ManifestFileLocation <a name="QuicksightDataSourceParametersS3ManifestFileLocation" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersS3ManifestFileLocation {
    string Bucket,
    string Key
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#bucket QuicksightDataSource#bucket}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#key QuicksightDataSource#key}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#bucket QuicksightDataSource#bucket}.

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#key QuicksightDataSource#key}.

---

### QuicksightDataSourceParametersServiceNow <a name="QuicksightDataSourceParametersServiceNow" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersServiceNow {
    string SiteBaseUrl
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow.property.siteBaseUrl">SiteBaseUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#site_base_url QuicksightDataSource#site_base_url}. |

---

##### `SiteBaseUrl`<sup>Required</sup> <a name="SiteBaseUrl" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow.property.siteBaseUrl"></a>

```csharp
public string SiteBaseUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#site_base_url QuicksightDataSource#site_base_url}.

---

### QuicksightDataSourceParametersSnowflake <a name="QuicksightDataSourceParametersSnowflake" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersSnowflake {
    string Database,
    string Host,
    string Warehouse
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake.property.database">Database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake.property.host">Host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake.property.warehouse">Warehouse</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#warehouse QuicksightDataSource#warehouse}. |

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `Warehouse`<sup>Required</sup> <a name="Warehouse" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake.property.warehouse"></a>

```csharp
public string Warehouse { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#warehouse QuicksightDataSource#warehouse}.

---

### QuicksightDataSourceParametersSpark <a name="QuicksightDataSourceParametersSpark" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersSpark {
    string Host,
    double Port
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark.property.host">Host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersSqlServer <a name="QuicksightDataSourceParametersSqlServer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersSqlServer {
    string Database,
    string Host,
    double Port
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer.property.database">Database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer.property.host">Host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersTeradata <a name="QuicksightDataSourceParametersTeradata" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersTeradata {
    string Database,
    string Host,
    double Port
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata.property.database">Database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata.property.host">Host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersTwitter <a name="QuicksightDataSourceParametersTwitter" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersTwitter {
    double MaxRows,
    string Query
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter.property.maxRows">MaxRows</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#max_rows QuicksightDataSource#max_rows}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter.property.query">Query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#query QuicksightDataSource#query}. |

---

##### `MaxRows`<sup>Required</sup> <a name="MaxRows" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter.property.maxRows"></a>

```csharp
public double MaxRows { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#max_rows QuicksightDataSource#max_rows}.

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#query QuicksightDataSource#query}.

---

### QuicksightDataSourcePermission <a name="QuicksightDataSourcePermission" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourcePermission {
    string[] Actions,
    string Principal
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission.property.actions">Actions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#actions QuicksightDataSource#actions}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission.property.principal">Principal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#principal QuicksightDataSource#principal}. |

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission.property.actions"></a>

```csharp
public string[] Actions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#actions QuicksightDataSource#actions}.

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission.property.principal"></a>

```csharp
public string Principal { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#principal QuicksightDataSource#principal}.

---

### QuicksightDataSourceSslProperties <a name="QuicksightDataSourceSslProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceSslProperties {
    object DisableSsl
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties.property.disableSsl">DisableSsl</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#disable_ssl QuicksightDataSource#disable_ssl}. |

---

##### `DisableSsl`<sup>Required</sup> <a name="DisableSsl" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties.property.disableSsl"></a>

```csharp
public object DisableSsl { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#disable_ssl QuicksightDataSource#disable_ssl}.

---

### QuicksightDataSourceVpcConnectionProperties <a name="QuicksightDataSourceVpcConnectionProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceVpcConnectionProperties {
    string VpcConnectionArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties.property.vpcConnectionArn">VpcConnectionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#vpc_connection_arn QuicksightDataSource#vpc_connection_arn}. |

---

##### `VpcConnectionArn`<sup>Required</sup> <a name="VpcConnectionArn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties.property.vpcConnectionArn"></a>

```csharp
public string VpcConnectionArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#vpc_connection_arn QuicksightDataSource#vpc_connection_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightDataSourceCredentialsCredentialPairOutputReference <a name="QuicksightDataSourceCredentialsCredentialPairOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceCredentialsCredentialPairOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair">QuicksightDataSourceCredentialsCredentialPair</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSourceCredentialsCredentialPair InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair">QuicksightDataSourceCredentialsCredentialPair</a>

---


### QuicksightDataSourceCredentialsOutputReference <a name="QuicksightDataSourceCredentialsOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.putCredentialPair">PutCredentialPair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.resetCopySourceArn">ResetCopySourceArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.resetCredentialPair">ResetCredentialPair</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCredentialPair` <a name="PutCredentialPair" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.putCredentialPair"></a>

```csharp
private void PutCredentialPair(QuicksightDataSourceCredentialsCredentialPair Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.putCredentialPair.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair">QuicksightDataSourceCredentialsCredentialPair</a>

---

##### `ResetCopySourceArn` <a name="ResetCopySourceArn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.resetCopySourceArn"></a>

```csharp
private void ResetCopySourceArn()
```

##### `ResetCredentialPair` <a name="ResetCredentialPair" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.resetCredentialPair"></a>

```csharp
private void ResetCredentialPair()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.credentialPair">CredentialPair</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference">QuicksightDataSourceCredentialsCredentialPairOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.copySourceArnInput">CopySourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.credentialPairInput">CredentialPairInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair">QuicksightDataSourceCredentialsCredentialPair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.copySourceArn">CopySourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials">QuicksightDataSourceCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CredentialPair`<sup>Required</sup> <a name="CredentialPair" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.credentialPair"></a>

```csharp
public QuicksightDataSourceCredentialsCredentialPairOutputReference CredentialPair { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference">QuicksightDataSourceCredentialsCredentialPairOutputReference</a>

---

##### `CopySourceArnInput`<sup>Optional</sup> <a name="CopySourceArnInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.copySourceArnInput"></a>

```csharp
public string CopySourceArnInput { get; }
```

- *Type:* string

---

##### `CredentialPairInput`<sup>Optional</sup> <a name="CredentialPairInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.credentialPairInput"></a>

```csharp
public QuicksightDataSourceCredentialsCredentialPair CredentialPairInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair">QuicksightDataSourceCredentialsCredentialPair</a>

---

##### `CopySourceArn`<sup>Required</sup> <a name="CopySourceArn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.copySourceArn"></a>

```csharp
public string CopySourceArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSourceCredentials InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials">QuicksightDataSourceCredentials</a>

---


### QuicksightDataSourceParametersAmazonElasticsearchOutputReference <a name="QuicksightDataSourceParametersAmazonElasticsearchOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersAmazonElasticsearchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch">QuicksightDataSourceParametersAmazonElasticsearch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSourceParametersAmazonElasticsearch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch">QuicksightDataSourceParametersAmazonElasticsearch</a>

---


### QuicksightDataSourceParametersAthenaOutputReference <a name="QuicksightDataSourceParametersAthenaOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersAthenaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.resetWorkGroup">ResetWorkGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkGroup` <a name="ResetWorkGroup" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.resetWorkGroup"></a>

```csharp
private void ResetWorkGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.workGroupInput">WorkGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.workGroup">WorkGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena">QuicksightDataSourceParametersAthena</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkGroupInput`<sup>Optional</sup> <a name="WorkGroupInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.workGroupInput"></a>

```csharp
public string WorkGroupInput { get; }
```

- *Type:* string

---

##### `WorkGroup`<sup>Required</sup> <a name="WorkGroup" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.workGroup"></a>

```csharp
public string WorkGroup { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSourceParametersAthena InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena">QuicksightDataSourceParametersAthena</a>

---


### QuicksightDataSourceParametersAuroraOutputReference <a name="QuicksightDataSourceParametersAuroraOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersAuroraOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora">QuicksightDataSourceParametersAurora</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSourceParametersAurora InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora">QuicksightDataSourceParametersAurora</a>

---


### QuicksightDataSourceParametersAuroraPostgresqlOutputReference <a name="QuicksightDataSourceParametersAuroraPostgresqlOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersAuroraPostgresqlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql">QuicksightDataSourceParametersAuroraPostgresql</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSourceParametersAuroraPostgresql InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql">QuicksightDataSourceParametersAuroraPostgresql</a>

---


### QuicksightDataSourceParametersAwsIotAnalyticsOutputReference <a name="QuicksightDataSourceParametersAwsIotAnalyticsOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersAwsIotAnalyticsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.dataSetNameInput">DataSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.dataSetName">DataSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics">QuicksightDataSourceParametersAwsIotAnalytics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataSetNameInput`<sup>Optional</sup> <a name="DataSetNameInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.dataSetNameInput"></a>

```csharp
public string DataSetNameInput { get; }
```

- *Type:* string

---

##### `DataSetName`<sup>Required</sup> <a name="DataSetName" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.dataSetName"></a>

```csharp
public string DataSetName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSourceParametersAwsIotAnalytics InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics">QuicksightDataSourceParametersAwsIotAnalytics</a>

---


### QuicksightDataSourceParametersJiraOutputReference <a name="QuicksightDataSourceParametersJiraOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersJiraOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.siteBaseUrlInput">SiteBaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.siteBaseUrl">SiteBaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira">QuicksightDataSourceParametersJira</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SiteBaseUrlInput`<sup>Optional</sup> <a name="SiteBaseUrlInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.siteBaseUrlInput"></a>

```csharp
public string SiteBaseUrlInput { get; }
```

- *Type:* string

---

##### `SiteBaseUrl`<sup>Required</sup> <a name="SiteBaseUrl" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.siteBaseUrl"></a>

```csharp
public string SiteBaseUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSourceParametersJira InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira">QuicksightDataSourceParametersJira</a>

---


### QuicksightDataSourceParametersMariaDbOutputReference <a name="QuicksightDataSourceParametersMariaDbOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersMariaDbOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb">QuicksightDataSourceParametersMariaDb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSourceParametersMariaDb InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb">QuicksightDataSourceParametersMariaDb</a>

---


### QuicksightDataSourceParametersMysqlOutputReference <a name="QuicksightDataSourceParametersMysqlOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersMysqlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql">QuicksightDataSourceParametersMysql</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSourceParametersMysql InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql">QuicksightDataSourceParametersMysql</a>

---


### QuicksightDataSourceParametersOracleOutputReference <a name="QuicksightDataSourceParametersOracleOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersOracleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle">QuicksightDataSourceParametersOracle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSourceParametersOracle InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle">QuicksightDataSourceParametersOracle</a>

---


### QuicksightDataSourceParametersOutputReference <a name="QuicksightDataSourceParametersOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAmazonElasticsearch">PutAmazonElasticsearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAthena">PutAthena</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAurora">PutAurora</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAuroraPostgresql">PutAuroraPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAwsIotAnalytics">PutAwsIotAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putJira">PutJira</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putMariaDb">PutMariaDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putMysql">PutMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putOracle">PutOracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putPostgresql">PutPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putPresto">PutPresto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putRds">PutRds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putRedshift">PutRedshift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putServiceNow">PutServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSnowflake">PutSnowflake</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSpark">PutSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSqlServer">PutSqlServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putTeradata">PutTeradata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putTwitter">PutTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAmazonElasticsearch">ResetAmazonElasticsearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAthena">ResetAthena</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAurora">ResetAurora</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAuroraPostgresql">ResetAuroraPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAwsIotAnalytics">ResetAwsIotAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetJira">ResetJira</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetMariaDb">ResetMariaDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetMysql">ResetMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetOracle">ResetOracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetPostgresql">ResetPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetPresto">ResetPresto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetRds">ResetRds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetRedshift">ResetRedshift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetS3">ResetS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetServiceNow">ResetServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetSnowflake">ResetSnowflake</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetSpark">ResetSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetSqlServer">ResetSqlServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetTeradata">ResetTeradata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetTwitter">ResetTwitter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAmazonElasticsearch` <a name="PutAmazonElasticsearch" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAmazonElasticsearch"></a>

```csharp
private void PutAmazonElasticsearch(QuicksightDataSourceParametersAmazonElasticsearch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAmazonElasticsearch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch">QuicksightDataSourceParametersAmazonElasticsearch</a>

---

##### `PutAthena` <a name="PutAthena" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAthena"></a>

```csharp
private void PutAthena(QuicksightDataSourceParametersAthena Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAthena.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena">QuicksightDataSourceParametersAthena</a>

---

##### `PutAurora` <a name="PutAurora" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAurora"></a>

```csharp
private void PutAurora(QuicksightDataSourceParametersAurora Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAurora.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora">QuicksightDataSourceParametersAurora</a>

---

##### `PutAuroraPostgresql` <a name="PutAuroraPostgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAuroraPostgresql"></a>

```csharp
private void PutAuroraPostgresql(QuicksightDataSourceParametersAuroraPostgresql Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAuroraPostgresql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql">QuicksightDataSourceParametersAuroraPostgresql</a>

---

##### `PutAwsIotAnalytics` <a name="PutAwsIotAnalytics" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAwsIotAnalytics"></a>

```csharp
private void PutAwsIotAnalytics(QuicksightDataSourceParametersAwsIotAnalytics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAwsIotAnalytics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics">QuicksightDataSourceParametersAwsIotAnalytics</a>

---

##### `PutJira` <a name="PutJira" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putJira"></a>

```csharp
private void PutJira(QuicksightDataSourceParametersJira Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putJira.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira">QuicksightDataSourceParametersJira</a>

---

##### `PutMariaDb` <a name="PutMariaDb" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putMariaDb"></a>

```csharp
private void PutMariaDb(QuicksightDataSourceParametersMariaDb Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putMariaDb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb">QuicksightDataSourceParametersMariaDb</a>

---

##### `PutMysql` <a name="PutMysql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putMysql"></a>

```csharp
private void PutMysql(QuicksightDataSourceParametersMysql Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putMysql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql">QuicksightDataSourceParametersMysql</a>

---

##### `PutOracle` <a name="PutOracle" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putOracle"></a>

```csharp
private void PutOracle(QuicksightDataSourceParametersOracle Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putOracle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle">QuicksightDataSourceParametersOracle</a>

---

##### `PutPostgresql` <a name="PutPostgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putPostgresql"></a>

```csharp
private void PutPostgresql(QuicksightDataSourceParametersPostgresql Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putPostgresql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql">QuicksightDataSourceParametersPostgresql</a>

---

##### `PutPresto` <a name="PutPresto" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putPresto"></a>

```csharp
private void PutPresto(QuicksightDataSourceParametersPresto Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putPresto.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto">QuicksightDataSourceParametersPresto</a>

---

##### `PutRds` <a name="PutRds" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putRds"></a>

```csharp
private void PutRds(QuicksightDataSourceParametersRds Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putRds.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds">QuicksightDataSourceParametersRds</a>

---

##### `PutRedshift` <a name="PutRedshift" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putRedshift"></a>

```csharp
private void PutRedshift(QuicksightDataSourceParametersRedshift Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putRedshift.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift">QuicksightDataSourceParametersRedshift</a>

---

##### `PutS3` <a name="PutS3" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putS3"></a>

```csharp
private void PutS3(QuicksightDataSourceParametersS3 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3">QuicksightDataSourceParametersS3</a>

---

##### `PutServiceNow` <a name="PutServiceNow" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putServiceNow"></a>

```csharp
private void PutServiceNow(QuicksightDataSourceParametersServiceNow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putServiceNow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow">QuicksightDataSourceParametersServiceNow</a>

---

##### `PutSnowflake` <a name="PutSnowflake" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSnowflake"></a>

```csharp
private void PutSnowflake(QuicksightDataSourceParametersSnowflake Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSnowflake.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake">QuicksightDataSourceParametersSnowflake</a>

---

##### `PutSpark` <a name="PutSpark" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSpark"></a>

```csharp
private void PutSpark(QuicksightDataSourceParametersSpark Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSpark.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark">QuicksightDataSourceParametersSpark</a>

---

##### `PutSqlServer` <a name="PutSqlServer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSqlServer"></a>

```csharp
private void PutSqlServer(QuicksightDataSourceParametersSqlServer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSqlServer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer">QuicksightDataSourceParametersSqlServer</a>

---

##### `PutTeradata` <a name="PutTeradata" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putTeradata"></a>

```csharp
private void PutTeradata(QuicksightDataSourceParametersTeradata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putTeradata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata">QuicksightDataSourceParametersTeradata</a>

---

##### `PutTwitter` <a name="PutTwitter" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putTwitter"></a>

```csharp
private void PutTwitter(QuicksightDataSourceParametersTwitter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putTwitter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter">QuicksightDataSourceParametersTwitter</a>

---

##### `ResetAmazonElasticsearch` <a name="ResetAmazonElasticsearch" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAmazonElasticsearch"></a>

```csharp
private void ResetAmazonElasticsearch()
```

##### `ResetAthena` <a name="ResetAthena" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAthena"></a>

```csharp
private void ResetAthena()
```

##### `ResetAurora` <a name="ResetAurora" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAurora"></a>

```csharp
private void ResetAurora()
```

##### `ResetAuroraPostgresql` <a name="ResetAuroraPostgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAuroraPostgresql"></a>

```csharp
private void ResetAuroraPostgresql()
```

##### `ResetAwsIotAnalytics` <a name="ResetAwsIotAnalytics" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAwsIotAnalytics"></a>

```csharp
private void ResetAwsIotAnalytics()
```

##### `ResetJira` <a name="ResetJira" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetJira"></a>

```csharp
private void ResetJira()
```

##### `ResetMariaDb` <a name="ResetMariaDb" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetMariaDb"></a>

```csharp
private void ResetMariaDb()
```

##### `ResetMysql` <a name="ResetMysql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetMysql"></a>

```csharp
private void ResetMysql()
```

##### `ResetOracle` <a name="ResetOracle" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetOracle"></a>

```csharp
private void ResetOracle()
```

##### `ResetPostgresql` <a name="ResetPostgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetPostgresql"></a>

```csharp
private void ResetPostgresql()
```

##### `ResetPresto` <a name="ResetPresto" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetPresto"></a>

```csharp
private void ResetPresto()
```

##### `ResetRds` <a name="ResetRds" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetRds"></a>

```csharp
private void ResetRds()
```

##### `ResetRedshift` <a name="ResetRedshift" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetRedshift"></a>

```csharp
private void ResetRedshift()
```

##### `ResetS3` <a name="ResetS3" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetS3"></a>

```csharp
private void ResetS3()
```

##### `ResetServiceNow` <a name="ResetServiceNow" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetServiceNow"></a>

```csharp
private void ResetServiceNow()
```

##### `ResetSnowflake` <a name="ResetSnowflake" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetSnowflake"></a>

```csharp
private void ResetSnowflake()
```

##### `ResetSpark` <a name="ResetSpark" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetSpark"></a>

```csharp
private void ResetSpark()
```

##### `ResetSqlServer` <a name="ResetSqlServer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetSqlServer"></a>

```csharp
private void ResetSqlServer()
```

##### `ResetTeradata` <a name="ResetTeradata" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetTeradata"></a>

```csharp
private void ResetTeradata()
```

##### `ResetTwitter` <a name="ResetTwitter" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetTwitter"></a>

```csharp
private void ResetTwitter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.amazonElasticsearch">AmazonElasticsearch</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference">QuicksightDataSourceParametersAmazonElasticsearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.athena">Athena</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference">QuicksightDataSourceParametersAthenaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.aurora">Aurora</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference">QuicksightDataSourceParametersAuroraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.auroraPostgresql">AuroraPostgresql</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference">QuicksightDataSourceParametersAuroraPostgresqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.awsIotAnalytics">AwsIotAnalytics</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference">QuicksightDataSourceParametersAwsIotAnalyticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.jira">Jira</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference">QuicksightDataSourceParametersJiraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.mariaDb">MariaDb</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference">QuicksightDataSourceParametersMariaDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.mysql">Mysql</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference">QuicksightDataSourceParametersMysqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.oracle">Oracle</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference">QuicksightDataSourceParametersOracleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.postgresql">Postgresql</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference">QuicksightDataSourceParametersPostgresqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.presto">Presto</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference">QuicksightDataSourceParametersPrestoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.rds">Rds</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference">QuicksightDataSourceParametersRdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.redshift">Redshift</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference">QuicksightDataSourceParametersRedshiftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference">QuicksightDataSourceParametersS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference">QuicksightDataSourceParametersServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.snowflake">Snowflake</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference">QuicksightDataSourceParametersSnowflakeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.spark">Spark</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference">QuicksightDataSourceParametersSparkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.sqlServer">SqlServer</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference">QuicksightDataSourceParametersSqlServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.teradata">Teradata</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference">QuicksightDataSourceParametersTeradataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.twitter">Twitter</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference">QuicksightDataSourceParametersTwitterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.amazonElasticsearchInput">AmazonElasticsearchInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch">QuicksightDataSourceParametersAmazonElasticsearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.athenaInput">AthenaInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena">QuicksightDataSourceParametersAthena</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.auroraInput">AuroraInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora">QuicksightDataSourceParametersAurora</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.auroraPostgresqlInput">AuroraPostgresqlInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql">QuicksightDataSourceParametersAuroraPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.awsIotAnalyticsInput">AwsIotAnalyticsInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics">QuicksightDataSourceParametersAwsIotAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.jiraInput">JiraInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira">QuicksightDataSourceParametersJira</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.mariaDbInput">MariaDbInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb">QuicksightDataSourceParametersMariaDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.mysqlInput">MysqlInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql">QuicksightDataSourceParametersMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.oracleInput">OracleInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle">QuicksightDataSourceParametersOracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.postgresqlInput">PostgresqlInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql">QuicksightDataSourceParametersPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.prestoInput">PrestoInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto">QuicksightDataSourceParametersPresto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.rdsInput">RdsInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds">QuicksightDataSourceParametersRds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.redshiftInput">RedshiftInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift">QuicksightDataSourceParametersRedshift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.s3Input">S3Input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3">QuicksightDataSourceParametersS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.serviceNowInput">ServiceNowInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow">QuicksightDataSourceParametersServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.snowflakeInput">SnowflakeInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake">QuicksightDataSourceParametersSnowflake</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.sparkInput">SparkInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark">QuicksightDataSourceParametersSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.sqlServerInput">SqlServerInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer">QuicksightDataSourceParametersSqlServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.teradataInput">TeradataInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata">QuicksightDataSourceParametersTeradata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.twitterInput">TwitterInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter">QuicksightDataSourceParametersTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters">QuicksightDataSourceParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AmazonElasticsearch`<sup>Required</sup> <a name="AmazonElasticsearch" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.amazonElasticsearch"></a>

```csharp
public QuicksightDataSourceParametersAmazonElasticsearchOutputReference AmazonElasticsearch { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference">QuicksightDataSourceParametersAmazonElasticsearchOutputReference</a>

---

##### `Athena`<sup>Required</sup> <a name="Athena" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.athena"></a>

```csharp
public QuicksightDataSourceParametersAthenaOutputReference Athena { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference">QuicksightDataSourceParametersAthenaOutputReference</a>

---

##### `Aurora`<sup>Required</sup> <a name="Aurora" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.aurora"></a>

```csharp
public QuicksightDataSourceParametersAuroraOutputReference Aurora { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference">QuicksightDataSourceParametersAuroraOutputReference</a>

---

##### `AuroraPostgresql`<sup>Required</sup> <a name="AuroraPostgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.auroraPostgresql"></a>

```csharp
public QuicksightDataSourceParametersAuroraPostgresqlOutputReference AuroraPostgresql { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference">QuicksightDataSourceParametersAuroraPostgresqlOutputReference</a>

---

##### `AwsIotAnalytics`<sup>Required</sup> <a name="AwsIotAnalytics" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.awsIotAnalytics"></a>

```csharp
public QuicksightDataSourceParametersAwsIotAnalyticsOutputReference AwsIotAnalytics { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference">QuicksightDataSourceParametersAwsIotAnalyticsOutputReference</a>

---

##### `Jira`<sup>Required</sup> <a name="Jira" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.jira"></a>

```csharp
public QuicksightDataSourceParametersJiraOutputReference Jira { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference">QuicksightDataSourceParametersJiraOutputReference</a>

---

##### `MariaDb`<sup>Required</sup> <a name="MariaDb" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.mariaDb"></a>

```csharp
public QuicksightDataSourceParametersMariaDbOutputReference MariaDb { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference">QuicksightDataSourceParametersMariaDbOutputReference</a>

---

##### `Mysql`<sup>Required</sup> <a name="Mysql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.mysql"></a>

```csharp
public QuicksightDataSourceParametersMysqlOutputReference Mysql { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference">QuicksightDataSourceParametersMysqlOutputReference</a>

---

##### `Oracle`<sup>Required</sup> <a name="Oracle" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.oracle"></a>

```csharp
public QuicksightDataSourceParametersOracleOutputReference Oracle { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference">QuicksightDataSourceParametersOracleOutputReference</a>

---

##### `Postgresql`<sup>Required</sup> <a name="Postgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.postgresql"></a>

```csharp
public QuicksightDataSourceParametersPostgresqlOutputReference Postgresql { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference">QuicksightDataSourceParametersPostgresqlOutputReference</a>

---

##### `Presto`<sup>Required</sup> <a name="Presto" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.presto"></a>

```csharp
public QuicksightDataSourceParametersPrestoOutputReference Presto { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference">QuicksightDataSourceParametersPrestoOutputReference</a>

---

##### `Rds`<sup>Required</sup> <a name="Rds" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.rds"></a>

```csharp
public QuicksightDataSourceParametersRdsOutputReference Rds { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference">QuicksightDataSourceParametersRdsOutputReference</a>

---

##### `Redshift`<sup>Required</sup> <a name="Redshift" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.redshift"></a>

```csharp
public QuicksightDataSourceParametersRedshiftOutputReference Redshift { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference">QuicksightDataSourceParametersRedshiftOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.s3"></a>

```csharp
public QuicksightDataSourceParametersS3OutputReference S3 { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference">QuicksightDataSourceParametersS3OutputReference</a>

---

##### `ServiceNow`<sup>Required</sup> <a name="ServiceNow" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.serviceNow"></a>

```csharp
public QuicksightDataSourceParametersServiceNowOutputReference ServiceNow { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference">QuicksightDataSourceParametersServiceNowOutputReference</a>

---

##### `Snowflake`<sup>Required</sup> <a name="Snowflake" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.snowflake"></a>

```csharp
public QuicksightDataSourceParametersSnowflakeOutputReference Snowflake { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference">QuicksightDataSourceParametersSnowflakeOutputReference</a>

---

##### `Spark`<sup>Required</sup> <a name="Spark" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.spark"></a>

```csharp
public QuicksightDataSourceParametersSparkOutputReference Spark { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference">QuicksightDataSourceParametersSparkOutputReference</a>

---

##### `SqlServer`<sup>Required</sup> <a name="SqlServer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.sqlServer"></a>

```csharp
public QuicksightDataSourceParametersSqlServerOutputReference SqlServer { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference">QuicksightDataSourceParametersSqlServerOutputReference</a>

---

##### `Teradata`<sup>Required</sup> <a name="Teradata" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.teradata"></a>

```csharp
public QuicksightDataSourceParametersTeradataOutputReference Teradata { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference">QuicksightDataSourceParametersTeradataOutputReference</a>

---

##### `Twitter`<sup>Required</sup> <a name="Twitter" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.twitter"></a>

```csharp
public QuicksightDataSourceParametersTwitterOutputReference Twitter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference">QuicksightDataSourceParametersTwitterOutputReference</a>

---

##### `AmazonElasticsearchInput`<sup>Optional</sup> <a name="AmazonElasticsearchInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.amazonElasticsearchInput"></a>

```csharp
public QuicksightDataSourceParametersAmazonElasticsearch AmazonElasticsearchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch">QuicksightDataSourceParametersAmazonElasticsearch</a>

---

##### `AthenaInput`<sup>Optional</sup> <a name="AthenaInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.athenaInput"></a>

```csharp
public QuicksightDataSourceParametersAthena AthenaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena">QuicksightDataSourceParametersAthena</a>

---

##### `AuroraInput`<sup>Optional</sup> <a name="AuroraInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.auroraInput"></a>

```csharp
public QuicksightDataSourceParametersAurora AuroraInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora">QuicksightDataSourceParametersAurora</a>

---

##### `AuroraPostgresqlInput`<sup>Optional</sup> <a name="AuroraPostgresqlInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.auroraPostgresqlInput"></a>

```csharp
public QuicksightDataSourceParametersAuroraPostgresql AuroraPostgresqlInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql">QuicksightDataSourceParametersAuroraPostgresql</a>

---

##### `AwsIotAnalyticsInput`<sup>Optional</sup> <a name="AwsIotAnalyticsInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.awsIotAnalyticsInput"></a>

```csharp
public QuicksightDataSourceParametersAwsIotAnalytics AwsIotAnalyticsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics">QuicksightDataSourceParametersAwsIotAnalytics</a>

---

##### `JiraInput`<sup>Optional</sup> <a name="JiraInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.jiraInput"></a>

```csharp
public QuicksightDataSourceParametersJira JiraInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira">QuicksightDataSourceParametersJira</a>

---

##### `MariaDbInput`<sup>Optional</sup> <a name="MariaDbInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.mariaDbInput"></a>

```csharp
public QuicksightDataSourceParametersMariaDb MariaDbInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb">QuicksightDataSourceParametersMariaDb</a>

---

##### `MysqlInput`<sup>Optional</sup> <a name="MysqlInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.mysqlInput"></a>

```csharp
public QuicksightDataSourceParametersMysql MysqlInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql">QuicksightDataSourceParametersMysql</a>

---

##### `OracleInput`<sup>Optional</sup> <a name="OracleInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.oracleInput"></a>

```csharp
public QuicksightDataSourceParametersOracle OracleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle">QuicksightDataSourceParametersOracle</a>

---

##### `PostgresqlInput`<sup>Optional</sup> <a name="PostgresqlInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.postgresqlInput"></a>

```csharp
public QuicksightDataSourceParametersPostgresql PostgresqlInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql">QuicksightDataSourceParametersPostgresql</a>

---

##### `PrestoInput`<sup>Optional</sup> <a name="PrestoInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.prestoInput"></a>

```csharp
public QuicksightDataSourceParametersPresto PrestoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto">QuicksightDataSourceParametersPresto</a>

---

##### `RdsInput`<sup>Optional</sup> <a name="RdsInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.rdsInput"></a>

```csharp
public QuicksightDataSourceParametersRds RdsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds">QuicksightDataSourceParametersRds</a>

---

##### `RedshiftInput`<sup>Optional</sup> <a name="RedshiftInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.redshiftInput"></a>

```csharp
public QuicksightDataSourceParametersRedshift RedshiftInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift">QuicksightDataSourceParametersRedshift</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.s3Input"></a>

```csharp
public QuicksightDataSourceParametersS3 S3Input { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3">QuicksightDataSourceParametersS3</a>

---

##### `ServiceNowInput`<sup>Optional</sup> <a name="ServiceNowInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.serviceNowInput"></a>

```csharp
public QuicksightDataSourceParametersServiceNow ServiceNowInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow">QuicksightDataSourceParametersServiceNow</a>

---

##### `SnowflakeInput`<sup>Optional</sup> <a name="SnowflakeInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.snowflakeInput"></a>

```csharp
public QuicksightDataSourceParametersSnowflake SnowflakeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake">QuicksightDataSourceParametersSnowflake</a>

---

##### `SparkInput`<sup>Optional</sup> <a name="SparkInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.sparkInput"></a>

```csharp
public QuicksightDataSourceParametersSpark SparkInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark">QuicksightDataSourceParametersSpark</a>

---

##### `SqlServerInput`<sup>Optional</sup> <a name="SqlServerInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.sqlServerInput"></a>

```csharp
public QuicksightDataSourceParametersSqlServer SqlServerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer">QuicksightDataSourceParametersSqlServer</a>

---

##### `TeradataInput`<sup>Optional</sup> <a name="TeradataInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.teradataInput"></a>

```csharp
public QuicksightDataSourceParametersTeradata TeradataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata">QuicksightDataSourceParametersTeradata</a>

---

##### `TwitterInput`<sup>Optional</sup> <a name="TwitterInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.twitterInput"></a>

```csharp
public QuicksightDataSourceParametersTwitter TwitterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter">QuicksightDataSourceParametersTwitter</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSourceParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters">QuicksightDataSourceParameters</a>

---


### QuicksightDataSourceParametersPostgresqlOutputReference <a name="QuicksightDataSourceParametersPostgresqlOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersPostgresqlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql">QuicksightDataSourceParametersPostgresql</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSourceParametersPostgresql InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql">QuicksightDataSourceParametersPostgresql</a>

---


### QuicksightDataSourceParametersPrestoOutputReference <a name="QuicksightDataSourceParametersPrestoOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersPrestoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.catalogInput">CatalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.catalog">Catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto">QuicksightDataSourceParametersPresto</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.catalogInput"></a>

```csharp
public string CatalogInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.catalog"></a>

```csharp
public string Catalog { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSourceParametersPresto InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto">QuicksightDataSourceParametersPresto</a>

---


### QuicksightDataSourceParametersRdsOutputReference <a name="QuicksightDataSourceParametersRdsOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersRdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds">QuicksightDataSourceParametersRds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSourceParametersRds InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds">QuicksightDataSourceParametersRds</a>

---


### QuicksightDataSourceParametersRedshiftOutputReference <a name="QuicksightDataSourceParametersRedshiftOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersRedshiftOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resetClusterId">ResetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClusterId` <a name="ResetClusterId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resetClusterId"></a>

```csharp
private void ResetClusterId()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift">QuicksightDataSourceParametersRedshift</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSourceParametersRedshift InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift">QuicksightDataSourceParametersRedshift</a>

---


### QuicksightDataSourceParametersS3ManifestFileLocationOutputReference <a name="QuicksightDataSourceParametersS3ManifestFileLocationOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersS3ManifestFileLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation">QuicksightDataSourceParametersS3ManifestFileLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSourceParametersS3ManifestFileLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation">QuicksightDataSourceParametersS3ManifestFileLocation</a>

---


### QuicksightDataSourceParametersS3OutputReference <a name="QuicksightDataSourceParametersS3OutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.putManifestFileLocation">PutManifestFileLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutManifestFileLocation` <a name="PutManifestFileLocation" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.putManifestFileLocation"></a>

```csharp
private void PutManifestFileLocation(QuicksightDataSourceParametersS3ManifestFileLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.putManifestFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation">QuicksightDataSourceParametersS3ManifestFileLocation</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.manifestFileLocation">ManifestFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference">QuicksightDataSourceParametersS3ManifestFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.manifestFileLocationInput">ManifestFileLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation">QuicksightDataSourceParametersS3ManifestFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3">QuicksightDataSourceParametersS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManifestFileLocation`<sup>Required</sup> <a name="ManifestFileLocation" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.manifestFileLocation"></a>

```csharp
public QuicksightDataSourceParametersS3ManifestFileLocationOutputReference ManifestFileLocation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference">QuicksightDataSourceParametersS3ManifestFileLocationOutputReference</a>

---

##### `ManifestFileLocationInput`<sup>Optional</sup> <a name="ManifestFileLocationInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.manifestFileLocationInput"></a>

```csharp
public QuicksightDataSourceParametersS3ManifestFileLocation ManifestFileLocationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation">QuicksightDataSourceParametersS3ManifestFileLocation</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSourceParametersS3 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3">QuicksightDataSourceParametersS3</a>

---


### QuicksightDataSourceParametersServiceNowOutputReference <a name="QuicksightDataSourceParametersServiceNowOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersServiceNowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.siteBaseUrlInput">SiteBaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.siteBaseUrl">SiteBaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow">QuicksightDataSourceParametersServiceNow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SiteBaseUrlInput`<sup>Optional</sup> <a name="SiteBaseUrlInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.siteBaseUrlInput"></a>

```csharp
public string SiteBaseUrlInput { get; }
```

- *Type:* string

---

##### `SiteBaseUrl`<sup>Required</sup> <a name="SiteBaseUrl" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.siteBaseUrl"></a>

```csharp
public string SiteBaseUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSourceParametersServiceNow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow">QuicksightDataSourceParametersServiceNow</a>

---


### QuicksightDataSourceParametersSnowflakeOutputReference <a name="QuicksightDataSourceParametersSnowflakeOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersSnowflakeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.warehouseInput">WarehouseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.warehouse">Warehouse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake">QuicksightDataSourceParametersSnowflake</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `WarehouseInput`<sup>Optional</sup> <a name="WarehouseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.warehouseInput"></a>

```csharp
public string WarehouseInput { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Warehouse`<sup>Required</sup> <a name="Warehouse" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.warehouse"></a>

```csharp
public string Warehouse { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSourceParametersSnowflake InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake">QuicksightDataSourceParametersSnowflake</a>

---


### QuicksightDataSourceParametersSparkOutputReference <a name="QuicksightDataSourceParametersSparkOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersSparkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark">QuicksightDataSourceParametersSpark</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSourceParametersSpark InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark">QuicksightDataSourceParametersSpark</a>

---


### QuicksightDataSourceParametersSqlServerOutputReference <a name="QuicksightDataSourceParametersSqlServerOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersSqlServerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer">QuicksightDataSourceParametersSqlServer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSourceParametersSqlServer InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer">QuicksightDataSourceParametersSqlServer</a>

---


### QuicksightDataSourceParametersTeradataOutputReference <a name="QuicksightDataSourceParametersTeradataOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersTeradataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata">QuicksightDataSourceParametersTeradata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSourceParametersTeradata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata">QuicksightDataSourceParametersTeradata</a>

---


### QuicksightDataSourceParametersTwitterOutputReference <a name="QuicksightDataSourceParametersTwitterOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceParametersTwitterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.maxRowsInput">MaxRowsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.maxRows">MaxRows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter">QuicksightDataSourceParametersTwitter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxRowsInput`<sup>Optional</sup> <a name="MaxRowsInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.maxRowsInput"></a>

```csharp
public double MaxRowsInput { get; }
```

- *Type:* double

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `MaxRows`<sup>Required</sup> <a name="MaxRows" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.maxRows"></a>

```csharp
public double MaxRows { get; }
```

- *Type:* double

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSourceParametersTwitter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter">QuicksightDataSourceParametersTwitter</a>

---


### QuicksightDataSourcePermissionList <a name="QuicksightDataSourcePermissionList" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourcePermissionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.get"></a>

```csharp
private QuicksightDataSourcePermissionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QuicksightDataSourcePermissionOutputReference <a name="QuicksightDataSourcePermissionOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourcePermissionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.actionsInput">ActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.principalInput">PrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.actions">Actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.principal">Principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.actionsInput"></a>

```csharp
public string[] ActionsInput { get; }
```

- *Type:* string[]

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.principalInput"></a>

```csharp
public string PrincipalInput { get; }
```

- *Type:* string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.actions"></a>

```csharp
public string[] Actions { get; }
```

- *Type:* string[]

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.principal"></a>

```csharp
public string Principal { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QuicksightDataSourceSslPropertiesOutputReference <a name="QuicksightDataSourceSslPropertiesOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceSslPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.disableSslInput">DisableSslInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.disableSsl">DisableSsl</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties">QuicksightDataSourceSslProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisableSslInput`<sup>Optional</sup> <a name="DisableSslInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.disableSslInput"></a>

```csharp
public object DisableSslInput { get; }
```

- *Type:* object

---

##### `DisableSsl`<sup>Required</sup> <a name="DisableSsl" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.disableSsl"></a>

```csharp
public object DisableSsl { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSourceSslProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties">QuicksightDataSourceSslProperties</a>

---


### QuicksightDataSourceVpcConnectionPropertiesOutputReference <a name="QuicksightDataSourceVpcConnectionPropertiesOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSourceVpcConnectionPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.vpcConnectionArnInput">VpcConnectionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.vpcConnectionArn">VpcConnectionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties">QuicksightDataSourceVpcConnectionProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VpcConnectionArnInput`<sup>Optional</sup> <a name="VpcConnectionArnInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.vpcConnectionArnInput"></a>

```csharp
public string VpcConnectionArnInput { get; }
```

- *Type:* string

---

##### `VpcConnectionArn`<sup>Required</sup> <a name="VpcConnectionArn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.vpcConnectionArn"></a>

```csharp
public string VpcConnectionArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSourceVpcConnectionProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties">QuicksightDataSourceVpcConnectionProperties</a>

---



