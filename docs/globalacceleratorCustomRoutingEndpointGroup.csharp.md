# `aws_globalaccelerator_custom_routing_endpoint_group`

Refer to the Terraform Registory for docs: [`aws_globalaccelerator_custom_routing_endpoint_group`](https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/globalaccelerator_custom_routing_endpoint_group).

# `globalacceleratorCustomRoutingEndpointGroup` Submodule <a name="`globalacceleratorCustomRoutingEndpointGroup` Submodule" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalacceleratorCustomRoutingEndpointGroup <a name="GlobalacceleratorCustomRoutingEndpointGroup" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/globalaccelerator_custom_routing_endpoint_group aws_globalaccelerator_custom_routing_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorCustomRoutingEndpointGroup(Construct Scope, string Id, GlobalacceleratorCustomRoutingEndpointGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupConfig">GlobalacceleratorCustomRoutingEndpointGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupConfig">GlobalacceleratorCustomRoutingEndpointGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.putDestinationConfiguration">PutDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.putEndpointConfiguration">PutEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.resetEndpointConfiguration">ResetEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.resetEndpointGroupRegion">ResetEndpointGroupRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDestinationConfiguration` <a name="PutDestinationConfiguration" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.putDestinationConfiguration"></a>

```csharp
private void PutDestinationConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.putDestinationConfiguration.parameter.value"></a>

- *Type:* object

---

##### `PutEndpointConfiguration` <a name="PutEndpointConfiguration" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.putEndpointConfiguration"></a>

```csharp
private void PutEndpointConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.putEndpointConfiguration.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(GlobalacceleratorCustomRoutingEndpointGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeouts">GlobalacceleratorCustomRoutingEndpointGroupTimeouts</a>

---

##### `ResetEndpointConfiguration` <a name="ResetEndpointConfiguration" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.resetEndpointConfiguration"></a>

```csharp
private void ResetEndpointConfiguration()
```

##### `ResetEndpointGroupRegion` <a name="ResetEndpointGroupRegion" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.resetEndpointGroupRegion"></a>

```csharp
private void ResetEndpointGroupRegion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlobalacceleratorCustomRoutingEndpointGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlobalacceleratorCustomRoutingEndpointGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlobalacceleratorCustomRoutingEndpointGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.destinationConfiguration">DestinationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList">GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.endpointConfiguration">EndpointConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList">GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference">GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.destinationConfigurationInput">DestinationConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.endpointConfigurationInput">EndpointConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.endpointGroupRegionInput">EndpointGroupRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.listenerArnInput">ListenerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.endpointGroupRegion">EndpointGroupRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.listenerArn">ListenerArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DestinationConfiguration`<sup>Required</sup> <a name="DestinationConfiguration" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.destinationConfiguration"></a>

```csharp
public GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList DestinationConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList">GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList</a>

---

##### `EndpointConfiguration`<sup>Required</sup> <a name="EndpointConfiguration" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.endpointConfiguration"></a>

```csharp
public GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList EndpointConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList">GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.timeouts"></a>

```csharp
public GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference">GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference</a>

---

##### `DestinationConfigurationInput`<sup>Optional</sup> <a name="DestinationConfigurationInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.destinationConfigurationInput"></a>

```csharp
public object DestinationConfigurationInput { get; }
```

- *Type:* object

---

##### `EndpointConfigurationInput`<sup>Optional</sup> <a name="EndpointConfigurationInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.endpointConfigurationInput"></a>

```csharp
public object EndpointConfigurationInput { get; }
```

- *Type:* object

---

##### `EndpointGroupRegionInput`<sup>Optional</sup> <a name="EndpointGroupRegionInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.endpointGroupRegionInput"></a>

```csharp
public string EndpointGroupRegionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ListenerArnInput`<sup>Optional</sup> <a name="ListenerArnInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.listenerArnInput"></a>

```csharp
public string ListenerArnInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `EndpointGroupRegion`<sup>Required</sup> <a name="EndpointGroupRegion" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.endpointGroupRegion"></a>

```csharp
public string EndpointGroupRegion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ListenerArn`<sup>Required</sup> <a name="ListenerArn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.listenerArn"></a>

```csharp
public string ListenerArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalacceleratorCustomRoutingEndpointGroupConfig <a name="GlobalacceleratorCustomRoutingEndpointGroupConfig" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorCustomRoutingEndpointGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object DestinationConfiguration,
    string ListenerArn,
    object EndpointConfiguration = null,
    string EndpointGroupRegion = null,
    string Id = null,
    GlobalacceleratorCustomRoutingEndpointGroupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupConfig.property.destinationConfiguration">DestinationConfiguration</a></code> | <code>object</code> | destination_configuration block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupConfig.property.listenerArn">ListenerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#listener_arn GlobalacceleratorCustomRoutingEndpointGroup#listener_arn}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupConfig.property.endpointConfiguration">EndpointConfiguration</a></code> | <code>object</code> | endpoint_configuration block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupConfig.property.endpointGroupRegion">EndpointGroupRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#endpoint_group_region GlobalacceleratorCustomRoutingEndpointGroup#endpoint_group_region}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#id GlobalacceleratorCustomRoutingEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeouts">GlobalacceleratorCustomRoutingEndpointGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DestinationConfiguration`<sup>Required</sup> <a name="DestinationConfiguration" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupConfig.property.destinationConfiguration"></a>

```csharp
public object DestinationConfiguration { get; set; }
```

- *Type:* object

destination_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#destination_configuration GlobalacceleratorCustomRoutingEndpointGroup#destination_configuration}

---

##### `ListenerArn`<sup>Required</sup> <a name="ListenerArn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupConfig.property.listenerArn"></a>

```csharp
public string ListenerArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#listener_arn GlobalacceleratorCustomRoutingEndpointGroup#listener_arn}.

---

##### `EndpointConfiguration`<sup>Optional</sup> <a name="EndpointConfiguration" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupConfig.property.endpointConfiguration"></a>

```csharp
public object EndpointConfiguration { get; set; }
```

- *Type:* object

endpoint_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#endpoint_configuration GlobalacceleratorCustomRoutingEndpointGroup#endpoint_configuration}

---

##### `EndpointGroupRegion`<sup>Optional</sup> <a name="EndpointGroupRegion" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupConfig.property.endpointGroupRegion"></a>

```csharp
public string EndpointGroupRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#endpoint_group_region GlobalacceleratorCustomRoutingEndpointGroup#endpoint_group_region}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#id GlobalacceleratorCustomRoutingEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupConfig.property.timeouts"></a>

```csharp
public GlobalacceleratorCustomRoutingEndpointGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeouts">GlobalacceleratorCustomRoutingEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#timeouts GlobalacceleratorCustomRoutingEndpointGroup#timeouts}

---

### GlobalacceleratorCustomRoutingEndpointGroupDestinationConfiguration <a name="GlobalacceleratorCustomRoutingEndpointGroupDestinationConfiguration" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorCustomRoutingEndpointGroupDestinationConfiguration {
    double FromPort,
    string[] Protocols,
    double ToPort
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfiguration.property.fromPort">FromPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#from_port GlobalacceleratorCustomRoutingEndpointGroup#from_port}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfiguration.property.protocols">Protocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#protocols GlobalacceleratorCustomRoutingEndpointGroup#protocols}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfiguration.property.toPort">ToPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#to_port GlobalacceleratorCustomRoutingEndpointGroup#to_port}. |

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfiguration.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#from_port GlobalacceleratorCustomRoutingEndpointGroup#from_port}.

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfiguration.property.protocols"></a>

```csharp
public string[] Protocols { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#protocols GlobalacceleratorCustomRoutingEndpointGroup#protocols}.

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfiguration.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#to_port GlobalacceleratorCustomRoutingEndpointGroup#to_port}.

---

### GlobalacceleratorCustomRoutingEndpointGroupEndpointConfiguration <a name="GlobalacceleratorCustomRoutingEndpointGroupEndpointConfiguration" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorCustomRoutingEndpointGroupEndpointConfiguration {
    string EndpointId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfiguration.property.endpointId">EndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#endpoint_id GlobalacceleratorCustomRoutingEndpointGroup#endpoint_id}. |

---

##### `EndpointId`<sup>Optional</sup> <a name="EndpointId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfiguration.property.endpointId"></a>

```csharp
public string EndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#endpoint_id GlobalacceleratorCustomRoutingEndpointGroup#endpoint_id}.

---

### GlobalacceleratorCustomRoutingEndpointGroupTimeouts <a name="GlobalacceleratorCustomRoutingEndpointGroupTimeouts" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorCustomRoutingEndpointGroupTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#create GlobalacceleratorCustomRoutingEndpointGroup#create}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#delete GlobalacceleratorCustomRoutingEndpointGroup#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#create GlobalacceleratorCustomRoutingEndpointGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#delete GlobalacceleratorCustomRoutingEndpointGroup#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList <a name="GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList.get"></a>

```csharp
private GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference <a name="GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.property.protocolsInput">ProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.property.protocols">Protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.property.protocolsInput"></a>

```csharp
public string[] ProtocolsInput { get; }
```

- *Type:* string[]

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.property.protocols"></a>

```csharp
public string[] Protocols { get; }
```

- *Type:* string[]

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList <a name="GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList.get"></a>

```csharp
private GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference <a name="GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.resetEndpointId">ResetEndpointId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpointId` <a name="ResetEndpointId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.resetEndpointId"></a>

```csharp
private void ResetEndpointId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.property.endpointIdInput">EndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.property.endpointId">EndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointIdInput`<sup>Optional</sup> <a name="EndpointIdInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.property.endpointIdInput"></a>

```csharp
public string EndpointIdInput { get; }
```

- *Type:* string

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.property.endpointId"></a>

```csharp
public string EndpointId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference <a name="GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.globalacceleratorCustomRoutingEndpointGroup.GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



