# `cloudsearchDomain` Submodule <a name="`cloudsearchDomain` Submodule" id="@cdktf/provider-aws.cloudsearchDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudsearchDomain <a name="CloudsearchDomain" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain aws_cloudsearch_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudsearchDomain(Construct Scope, string Id, CloudsearchDomainConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig">CloudsearchDomainConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig">CloudsearchDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putEndpointOptions">PutEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putIndexField">PutIndexField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putScalingParameters">PutScalingParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetEndpointOptions">ResetEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetIndexField">ResetIndexField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetMultiAz">ResetMultiAz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetScalingParameters">ResetScalingParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutEndpointOptions` <a name="PutEndpointOptions" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putEndpointOptions"></a>

```csharp
private void PutEndpointOptions(CloudsearchDomainEndpointOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putEndpointOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions">CloudsearchDomainEndpointOptions</a>

---

##### `PutIndexField` <a name="PutIndexField" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putIndexField"></a>

```csharp
private void PutIndexField(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putIndexField.parameter.value"></a>

- *Type:* object

---

##### `PutScalingParameters` <a name="PutScalingParameters" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putScalingParameters"></a>

```csharp
private void PutScalingParameters(CloudsearchDomainScalingParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putScalingParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters">CloudsearchDomainScalingParameters</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putTimeouts"></a>

```csharp
private void PutTimeouts(CloudsearchDomainTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts">CloudsearchDomainTimeouts</a>

---

##### `ResetEndpointOptions` <a name="ResetEndpointOptions" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetEndpointOptions"></a>

```csharp
private void ResetEndpointOptions()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIndexField` <a name="ResetIndexField" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetIndexField"></a>

```csharp
private void ResetIndexField()
```

##### `ResetMultiAz` <a name="ResetMultiAz" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetMultiAz"></a>

```csharp
private void ResetMultiAz()
```

##### `ResetScalingParameters` <a name="ResetScalingParameters" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetScalingParameters"></a>

```csharp
private void ResetScalingParameters()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudsearchDomain.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudsearchDomain.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudsearchDomain.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.documentServiceEndpoint">DocumentServiceEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.domainId">DomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.endpointOptions">EndpointOptions</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference">CloudsearchDomainEndpointOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.indexField">IndexField</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList">CloudsearchDomainIndexFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.scalingParameters">ScalingParameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference">CloudsearchDomainScalingParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.searchServiceEndpoint">SearchServiceEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference">CloudsearchDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.endpointOptionsInput">EndpointOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions">CloudsearchDomainEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.indexFieldInput">IndexFieldInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.multiAzInput">MultiAzInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.scalingParametersInput">ScalingParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters">CloudsearchDomainScalingParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.multiAz">MultiAz</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DocumentServiceEndpoint`<sup>Required</sup> <a name="DocumentServiceEndpoint" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.documentServiceEndpoint"></a>

```csharp
public string DocumentServiceEndpoint { get; }
```

- *Type:* string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.domainId"></a>

```csharp
public string DomainId { get; }
```

- *Type:* string

---

##### `EndpointOptions`<sup>Required</sup> <a name="EndpointOptions" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.endpointOptions"></a>

```csharp
public CloudsearchDomainEndpointOptionsOutputReference EndpointOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference">CloudsearchDomainEndpointOptionsOutputReference</a>

---

##### `IndexField`<sup>Required</sup> <a name="IndexField" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.indexField"></a>

```csharp
public CloudsearchDomainIndexFieldList IndexField { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList">CloudsearchDomainIndexFieldList</a>

---

##### `ScalingParameters`<sup>Required</sup> <a name="ScalingParameters" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.scalingParameters"></a>

```csharp
public CloudsearchDomainScalingParametersOutputReference ScalingParameters { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference">CloudsearchDomainScalingParametersOutputReference</a>

---

##### `SearchServiceEndpoint`<sup>Required</sup> <a name="SearchServiceEndpoint" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.searchServiceEndpoint"></a>

```csharp
public string SearchServiceEndpoint { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.timeouts"></a>

```csharp
public CloudsearchDomainTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference">CloudsearchDomainTimeoutsOutputReference</a>

---

##### `EndpointOptionsInput`<sup>Optional</sup> <a name="EndpointOptionsInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.endpointOptionsInput"></a>

```csharp
public CloudsearchDomainEndpointOptions EndpointOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions">CloudsearchDomainEndpointOptions</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IndexFieldInput`<sup>Optional</sup> <a name="IndexFieldInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.indexFieldInput"></a>

```csharp
public object IndexFieldInput { get; }
```

- *Type:* object

---

##### `MultiAzInput`<sup>Optional</sup> <a name="MultiAzInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.multiAzInput"></a>

```csharp
public object MultiAzInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ScalingParametersInput`<sup>Optional</sup> <a name="ScalingParametersInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.scalingParametersInput"></a>

```csharp
public CloudsearchDomainScalingParameters ScalingParametersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters">CloudsearchDomainScalingParameters</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MultiAz`<sup>Required</sup> <a name="MultiAz" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.multiAz"></a>

```csharp
public object MultiAz { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudsearchDomainConfig <a name="CloudsearchDomainConfig" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudsearchDomainConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    CloudsearchDomainEndpointOptions EndpointOptions = null,
    string Id = null,
    object IndexField = null,
    object MultiAz = null,
    CloudsearchDomainScalingParameters ScalingParameters = null,
    CloudsearchDomainTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#name CloudsearchDomain#name}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.endpointOptions">EndpointOptions</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions">CloudsearchDomainEndpointOptions</a></code> | endpoint_options block. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#id CloudsearchDomain#id}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.indexField">IndexField</a></code> | <code>object</code> | index_field block. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.multiAz">MultiAz</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#multi_az CloudsearchDomain#multi_az}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.scalingParameters">ScalingParameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters">CloudsearchDomainScalingParameters</a></code> | scaling_parameters block. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts">CloudsearchDomainTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#name CloudsearchDomain#name}.

---

##### `EndpointOptions`<sup>Optional</sup> <a name="EndpointOptions" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.endpointOptions"></a>

```csharp
public CloudsearchDomainEndpointOptions EndpointOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions">CloudsearchDomainEndpointOptions</a>

endpoint_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#endpoint_options CloudsearchDomain#endpoint_options}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#id CloudsearchDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IndexField`<sup>Optional</sup> <a name="IndexField" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.indexField"></a>

```csharp
public object IndexField { get; set; }
```

- *Type:* object

index_field block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#index_field CloudsearchDomain#index_field}

---

##### `MultiAz`<sup>Optional</sup> <a name="MultiAz" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.multiAz"></a>

```csharp
public object MultiAz { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#multi_az CloudsearchDomain#multi_az}.

---

##### `ScalingParameters`<sup>Optional</sup> <a name="ScalingParameters" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.scalingParameters"></a>

```csharp
public CloudsearchDomainScalingParameters ScalingParameters { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters">CloudsearchDomainScalingParameters</a>

scaling_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#scaling_parameters CloudsearchDomain#scaling_parameters}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.timeouts"></a>

```csharp
public CloudsearchDomainTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts">CloudsearchDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#timeouts CloudsearchDomain#timeouts}

---

### CloudsearchDomainEndpointOptions <a name="CloudsearchDomainEndpointOptions" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudsearchDomainEndpointOptions {
    object EnforceHttps = null,
    string TlsSecurityPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions.property.enforceHttps">EnforceHttps</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#enforce_https CloudsearchDomain#enforce_https}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions.property.tlsSecurityPolicy">TlsSecurityPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#tls_security_policy CloudsearchDomain#tls_security_policy}. |

---

##### `EnforceHttps`<sup>Optional</sup> <a name="EnforceHttps" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions.property.enforceHttps"></a>

```csharp
public object EnforceHttps { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#enforce_https CloudsearchDomain#enforce_https}.

---

##### `TlsSecurityPolicy`<sup>Optional</sup> <a name="TlsSecurityPolicy" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions.property.tlsSecurityPolicy"></a>

```csharp
public string TlsSecurityPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#tls_security_policy CloudsearchDomain#tls_security_policy}.

---

### CloudsearchDomainIndexField <a name="CloudsearchDomainIndexField" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudsearchDomainIndexField {
    string Name,
    string Type,
    string AnalysisScheme = null,
    string DefaultValue = null,
    object Facet = null,
    object Highlight = null,
    object Return = null,
    object Search = null,
    object Sort = null,
    string SourceFields = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#name CloudsearchDomain#name}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#type CloudsearchDomain#type}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.analysisScheme">AnalysisScheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#analysis_scheme CloudsearchDomain#analysis_scheme}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.defaultValue">DefaultValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#default_value CloudsearchDomain#default_value}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.facet">Facet</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#facet CloudsearchDomain#facet}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.highlight">Highlight</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#highlight CloudsearchDomain#highlight}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.return">Return</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#return CloudsearchDomain#return}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.search">Search</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#search CloudsearchDomain#search}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.sort">Sort</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#sort CloudsearchDomain#sort}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.sourceFields">SourceFields</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#source_fields CloudsearchDomain#source_fields}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#name CloudsearchDomain#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#type CloudsearchDomain#type}.

---

##### `AnalysisScheme`<sup>Optional</sup> <a name="AnalysisScheme" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.analysisScheme"></a>

```csharp
public string AnalysisScheme { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#analysis_scheme CloudsearchDomain#analysis_scheme}.

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.defaultValue"></a>

```csharp
public string DefaultValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#default_value CloudsearchDomain#default_value}.

---

##### `Facet`<sup>Optional</sup> <a name="Facet" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.facet"></a>

```csharp
public object Facet { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#facet CloudsearchDomain#facet}.

---

##### `Highlight`<sup>Optional</sup> <a name="Highlight" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.highlight"></a>

```csharp
public object Highlight { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#highlight CloudsearchDomain#highlight}.

---

##### `Return`<sup>Optional</sup> <a name="Return" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.return"></a>

```csharp
public object Return { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#return CloudsearchDomain#return}.

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.search"></a>

```csharp
public object Search { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#search CloudsearchDomain#search}.

---

##### `Sort`<sup>Optional</sup> <a name="Sort" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.sort"></a>

```csharp
public object Sort { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#sort CloudsearchDomain#sort}.

---

##### `SourceFields`<sup>Optional</sup> <a name="SourceFields" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.sourceFields"></a>

```csharp
public string SourceFields { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#source_fields CloudsearchDomain#source_fields}.

---

### CloudsearchDomainScalingParameters <a name="CloudsearchDomainScalingParameters" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudsearchDomainScalingParameters {
    string DesiredInstanceType = null,
    double DesiredPartitionCount = null,
    double DesiredReplicationCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters.property.desiredInstanceType">DesiredInstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#desired_instance_type CloudsearchDomain#desired_instance_type}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters.property.desiredPartitionCount">DesiredPartitionCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#desired_partition_count CloudsearchDomain#desired_partition_count}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters.property.desiredReplicationCount">DesiredReplicationCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#desired_replication_count CloudsearchDomain#desired_replication_count}. |

---

##### `DesiredInstanceType`<sup>Optional</sup> <a name="DesiredInstanceType" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters.property.desiredInstanceType"></a>

```csharp
public string DesiredInstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#desired_instance_type CloudsearchDomain#desired_instance_type}.

---

##### `DesiredPartitionCount`<sup>Optional</sup> <a name="DesiredPartitionCount" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters.property.desiredPartitionCount"></a>

```csharp
public double DesiredPartitionCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#desired_partition_count CloudsearchDomain#desired_partition_count}.

---

##### `DesiredReplicationCount`<sup>Optional</sup> <a name="DesiredReplicationCount" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters.property.desiredReplicationCount"></a>

```csharp
public double DesiredReplicationCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#desired_replication_count CloudsearchDomain#desired_replication_count}.

---

### CloudsearchDomainTimeouts <a name="CloudsearchDomainTimeouts" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudsearchDomainTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#create CloudsearchDomain#create}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#delete CloudsearchDomain#delete}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#update CloudsearchDomain#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#create CloudsearchDomain#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#delete CloudsearchDomain#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#update CloudsearchDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudsearchDomainEndpointOptionsOutputReference <a name="CloudsearchDomainEndpointOptionsOutputReference" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudsearchDomainEndpointOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.resetEnforceHttps">ResetEnforceHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.resetTlsSecurityPolicy">ResetTlsSecurityPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnforceHttps` <a name="ResetEnforceHttps" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.resetEnforceHttps"></a>

```csharp
private void ResetEnforceHttps()
```

##### `ResetTlsSecurityPolicy` <a name="ResetTlsSecurityPolicy" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.resetTlsSecurityPolicy"></a>

```csharp
private void ResetTlsSecurityPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.enforceHttpsInput">EnforceHttpsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.tlsSecurityPolicyInput">TlsSecurityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.enforceHttps">EnforceHttps</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy">TlsSecurityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions">CloudsearchDomainEndpointOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnforceHttpsInput`<sup>Optional</sup> <a name="EnforceHttpsInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.enforceHttpsInput"></a>

```csharp
public object EnforceHttpsInput { get; }
```

- *Type:* object

---

##### `TlsSecurityPolicyInput`<sup>Optional</sup> <a name="TlsSecurityPolicyInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.tlsSecurityPolicyInput"></a>

```csharp
public string TlsSecurityPolicyInput { get; }
```

- *Type:* string

---

##### `EnforceHttps`<sup>Required</sup> <a name="EnforceHttps" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.enforceHttps"></a>

```csharp
public object EnforceHttps { get; }
```

- *Type:* object

---

##### `TlsSecurityPolicy`<sup>Required</sup> <a name="TlsSecurityPolicy" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy"></a>

```csharp
public string TlsSecurityPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.internalValue"></a>

```csharp
public CloudsearchDomainEndpointOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions">CloudsearchDomainEndpointOptions</a>

---


### CloudsearchDomainIndexFieldList <a name="CloudsearchDomainIndexFieldList" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudsearchDomainIndexFieldList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.get"></a>

```csharp
private CloudsearchDomainIndexFieldOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudsearchDomainIndexFieldOutputReference <a name="CloudsearchDomainIndexFieldOutputReference" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudsearchDomainIndexFieldOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetAnalysisScheme">ResetAnalysisScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetFacet">ResetFacet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetHighlight">ResetHighlight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetReturn">ResetReturn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetSearch">ResetSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetSort">ResetSort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetSourceFields">ResetSourceFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnalysisScheme` <a name="ResetAnalysisScheme" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetAnalysisScheme"></a>

```csharp
private void ResetAnalysisScheme()
```

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetDefaultValue"></a>

```csharp
private void ResetDefaultValue()
```

##### `ResetFacet` <a name="ResetFacet" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetFacet"></a>

```csharp
private void ResetFacet()
```

##### `ResetHighlight` <a name="ResetHighlight" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetHighlight"></a>

```csharp
private void ResetHighlight()
```

##### `ResetReturn` <a name="ResetReturn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetReturn"></a>

```csharp
private void ResetReturn()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetSearch"></a>

```csharp
private void ResetSearch()
```

##### `ResetSort` <a name="ResetSort" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetSort"></a>

```csharp
private void ResetSort()
```

##### `ResetSourceFields` <a name="ResetSourceFields" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetSourceFields"></a>

```csharp
private void ResetSourceFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.analysisSchemeInput">AnalysisSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.facetInput">FacetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.highlightInput">HighlightInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.returnInput">ReturnInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.searchInput">SearchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.sortInput">SortInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.sourceFieldsInput">SourceFieldsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.analysisScheme">AnalysisScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.defaultValue">DefaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.facet">Facet</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.highlight">Highlight</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.return">Return</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.search">Search</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.sort">Sort</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.sourceFields">SourceFields</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnalysisSchemeInput`<sup>Optional</sup> <a name="AnalysisSchemeInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.analysisSchemeInput"></a>

```csharp
public string AnalysisSchemeInput { get; }
```

- *Type:* string

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.defaultValueInput"></a>

```csharp
public string DefaultValueInput { get; }
```

- *Type:* string

---

##### `FacetInput`<sup>Optional</sup> <a name="FacetInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.facetInput"></a>

```csharp
public object FacetInput { get; }
```

- *Type:* object

---

##### `HighlightInput`<sup>Optional</sup> <a name="HighlightInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.highlightInput"></a>

```csharp
public object HighlightInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ReturnInput`<sup>Optional</sup> <a name="ReturnInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.returnInput"></a>

```csharp
public object ReturnInput { get; }
```

- *Type:* object

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.searchInput"></a>

```csharp
public object SearchInput { get; }
```

- *Type:* object

---

##### `SortInput`<sup>Optional</sup> <a name="SortInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.sortInput"></a>

```csharp
public object SortInput { get; }
```

- *Type:* object

---

##### `SourceFieldsInput`<sup>Optional</sup> <a name="SourceFieldsInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.sourceFieldsInput"></a>

```csharp
public string SourceFieldsInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AnalysisScheme`<sup>Required</sup> <a name="AnalysisScheme" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.analysisScheme"></a>

```csharp
public string AnalysisScheme { get; }
```

- *Type:* string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.defaultValue"></a>

```csharp
public string DefaultValue { get; }
```

- *Type:* string

---

##### `Facet`<sup>Required</sup> <a name="Facet" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.facet"></a>

```csharp
public object Facet { get; }
```

- *Type:* object

---

##### `Highlight`<sup>Required</sup> <a name="Highlight" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.highlight"></a>

```csharp
public object Highlight { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Return`<sup>Required</sup> <a name="Return" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.return"></a>

```csharp
public object Return { get; }
```

- *Type:* object

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.search"></a>

```csharp
public object Search { get; }
```

- *Type:* object

---

##### `Sort`<sup>Required</sup> <a name="Sort" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.sort"></a>

```csharp
public object Sort { get; }
```

- *Type:* object

---

##### `SourceFields`<sup>Required</sup> <a name="SourceFields" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.sourceFields"></a>

```csharp
public string SourceFields { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudsearchDomainScalingParametersOutputReference <a name="CloudsearchDomainScalingParametersOutputReference" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudsearchDomainScalingParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resetDesiredInstanceType">ResetDesiredInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resetDesiredPartitionCount">ResetDesiredPartitionCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resetDesiredReplicationCount">ResetDesiredReplicationCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDesiredInstanceType` <a name="ResetDesiredInstanceType" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resetDesiredInstanceType"></a>

```csharp
private void ResetDesiredInstanceType()
```

##### `ResetDesiredPartitionCount` <a name="ResetDesiredPartitionCount" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resetDesiredPartitionCount"></a>

```csharp
private void ResetDesiredPartitionCount()
```

##### `ResetDesiredReplicationCount` <a name="ResetDesiredReplicationCount" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resetDesiredReplicationCount"></a>

```csharp
private void ResetDesiredReplicationCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredInstanceTypeInput">DesiredInstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredPartitionCountInput">DesiredPartitionCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredReplicationCountInput">DesiredReplicationCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredInstanceType">DesiredInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredPartitionCount">DesiredPartitionCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredReplicationCount">DesiredReplicationCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters">CloudsearchDomainScalingParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DesiredInstanceTypeInput`<sup>Optional</sup> <a name="DesiredInstanceTypeInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredInstanceTypeInput"></a>

```csharp
public string DesiredInstanceTypeInput { get; }
```

- *Type:* string

---

##### `DesiredPartitionCountInput`<sup>Optional</sup> <a name="DesiredPartitionCountInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredPartitionCountInput"></a>

```csharp
public double DesiredPartitionCountInput { get; }
```

- *Type:* double

---

##### `DesiredReplicationCountInput`<sup>Optional</sup> <a name="DesiredReplicationCountInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredReplicationCountInput"></a>

```csharp
public double DesiredReplicationCountInput { get; }
```

- *Type:* double

---

##### `DesiredInstanceType`<sup>Required</sup> <a name="DesiredInstanceType" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredInstanceType"></a>

```csharp
public string DesiredInstanceType { get; }
```

- *Type:* string

---

##### `DesiredPartitionCount`<sup>Required</sup> <a name="DesiredPartitionCount" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredPartitionCount"></a>

```csharp
public double DesiredPartitionCount { get; }
```

- *Type:* double

---

##### `DesiredReplicationCount`<sup>Required</sup> <a name="DesiredReplicationCount" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredReplicationCount"></a>

```csharp
public double DesiredReplicationCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.internalValue"></a>

```csharp
public CloudsearchDomainScalingParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters">CloudsearchDomainScalingParameters</a>

---


### CloudsearchDomainTimeoutsOutputReference <a name="CloudsearchDomainTimeoutsOutputReference" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudsearchDomainTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



