# `aws_chimesdkvoice_sip_media_application`

Refer to the Terraform Registory for docs: [`aws_chimesdkvoice_sip_media_application`](https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkvoice_sip_media_application).

# `chimesdkvoiceSipMediaApplication` Submodule <a name="`chimesdkvoiceSipMediaApplication` Submodule" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimesdkvoiceSipMediaApplication <a name="ChimesdkvoiceSipMediaApplication" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkvoice_sip_media_application aws_chimesdkvoice_sip_media_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ChimesdkvoiceSipMediaApplication(Construct Scope, string Id, ChimesdkvoiceSipMediaApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig">ChimesdkvoiceSipMediaApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig">ChimesdkvoiceSipMediaApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.putEndpoints">PutEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutEndpoints` <a name="PutEndpoints" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.putEndpoints"></a>

```csharp
private void PutEndpoints(ChimesdkvoiceSipMediaApplicationEndpoints Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.putEndpoints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints">ChimesdkvoiceSipMediaApplicationEndpoints</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ChimesdkvoiceSipMediaApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ChimesdkvoiceSipMediaApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ChimesdkvoiceSipMediaApplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference">ChimesdkvoiceSipMediaApplicationEndpointsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.awsRegionInput">AwsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.endpointsInput">EndpointsInput</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints">ChimesdkvoiceSipMediaApplicationEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.awsRegion">AwsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.endpoints"></a>

```csharp
public ChimesdkvoiceSipMediaApplicationEndpointsOutputReference Endpoints { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference">ChimesdkvoiceSipMediaApplicationEndpointsOutputReference</a>

---

##### `AwsRegionInput`<sup>Optional</sup> <a name="AwsRegionInput" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.awsRegionInput"></a>

```csharp
public string AwsRegionInput { get; }
```

- *Type:* string

---

##### `EndpointsInput`<sup>Optional</sup> <a name="EndpointsInput" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.endpointsInput"></a>

```csharp
public ChimesdkvoiceSipMediaApplicationEndpoints EndpointsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints">ChimesdkvoiceSipMediaApplicationEndpoints</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.awsRegion"></a>

```csharp
public string AwsRegion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimesdkvoiceSipMediaApplicationConfig <a name="ChimesdkvoiceSipMediaApplicationConfig" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ChimesdkvoiceSipMediaApplicationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AwsRegion,
    ChimesdkvoiceSipMediaApplicationEndpoints Endpoints,
    string Name,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.awsRegion">AwsRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkvoice_sip_media_application#aws_region ChimesdkvoiceSipMediaApplication#aws_region}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints">ChimesdkvoiceSipMediaApplicationEndpoints</a></code> | endpoints block. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkvoice_sip_media_application#name ChimesdkvoiceSipMediaApplication#name}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkvoice_sip_media_application#id ChimesdkvoiceSipMediaApplication#id}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkvoice_sip_media_application#tags ChimesdkvoiceSipMediaApplication#tags}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkvoice_sip_media_application#tags_all ChimesdkvoiceSipMediaApplication#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.awsRegion"></a>

```csharp
public string AwsRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkvoice_sip_media_application#aws_region ChimesdkvoiceSipMediaApplication#aws_region}.

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.endpoints"></a>

```csharp
public ChimesdkvoiceSipMediaApplicationEndpoints Endpoints { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints">ChimesdkvoiceSipMediaApplicationEndpoints</a>

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkvoice_sip_media_application#endpoints ChimesdkvoiceSipMediaApplication#endpoints}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkvoice_sip_media_application#name ChimesdkvoiceSipMediaApplication#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkvoice_sip_media_application#id ChimesdkvoiceSipMediaApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkvoice_sip_media_application#tags ChimesdkvoiceSipMediaApplication#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkvoice_sip_media_application#tags_all ChimesdkvoiceSipMediaApplication#tags_all}.

---

### ChimesdkvoiceSipMediaApplicationEndpoints <a name="ChimesdkvoiceSipMediaApplicationEndpoints" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ChimesdkvoiceSipMediaApplicationEndpoints {
    string LambdaArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints.property.lambdaArn">LambdaArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkvoice_sip_media_application#lambda_arn ChimesdkvoiceSipMediaApplication#lambda_arn}. |

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints.property.lambdaArn"></a>

```csharp
public string LambdaArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkvoice_sip_media_application#lambda_arn ChimesdkvoiceSipMediaApplication#lambda_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimesdkvoiceSipMediaApplicationEndpointsOutputReference <a name="ChimesdkvoiceSipMediaApplicationEndpointsOutputReference" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ChimesdkvoiceSipMediaApplicationEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.lambdaArnInput">LambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints">ChimesdkvoiceSipMediaApplicationEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LambdaArnInput`<sup>Optional</sup> <a name="LambdaArnInput" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.lambdaArnInput"></a>

```csharp
public string LambdaArnInput { get; }
```

- *Type:* string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.lambdaArn"></a>

```csharp
public string LambdaArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.internalValue"></a>

```csharp
public ChimesdkvoiceSipMediaApplicationEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints">ChimesdkvoiceSipMediaApplicationEndpoints</a>

---



