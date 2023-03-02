# `servicecatalogProvisioningArtifact` Submodule <a name="`servicecatalogProvisioningArtifact` Submodule" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogProvisioningArtifact <a name="ServicecatalogProvisioningArtifact" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact aws_servicecatalog_provisioning_artifact}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer"></a>

```typescript
import { servicecatalogProvisioningArtifact } from '@cdktf/provider-aws'

new servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact(scope: Construct, id: string, config: ServicecatalogProvisioningArtifactConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig">ServicecatalogProvisioningArtifactConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig">ServicecatalogProvisioningArtifactConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetAcceptLanguage">resetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetDisableTemplateValidation">resetDisableTemplateValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetGuidance">resetGuidance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetTemplatePhysicalId">resetTemplatePhysicalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetTemplateUrl">resetTemplateUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.putTimeouts"></a>

```typescript
public putTimeouts(value: ServicecatalogProvisioningArtifactTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts">ServicecatalogProvisioningArtifactTimeouts</a>

---

##### `resetAcceptLanguage` <a name="resetAcceptLanguage" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetAcceptLanguage"></a>

```typescript
public resetAcceptLanguage(): void
```

##### `resetActive` <a name="resetActive" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetActive"></a>

```typescript
public resetActive(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisableTemplateValidation` <a name="resetDisableTemplateValidation" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetDisableTemplateValidation"></a>

```typescript
public resetDisableTemplateValidation(): void
```

##### `resetGuidance` <a name="resetGuidance" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetGuidance"></a>

```typescript
public resetGuidance(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTemplatePhysicalId` <a name="resetTemplatePhysicalId" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetTemplatePhysicalId"></a>

```typescript
public resetTemplatePhysicalId(): void
```

##### `resetTemplateUrl` <a name="resetTemplateUrl" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetTemplateUrl"></a>

```typescript
public resetTemplateUrl(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isConstruct"></a>

```typescript
import { servicecatalogProvisioningArtifact } from '@cdktf/provider-aws'

servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isTerraformElement"></a>

```typescript
import { servicecatalogProvisioningArtifact } from '@cdktf/provider-aws'

servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isTerraformResource"></a>

```typescript
import { servicecatalogProvisioningArtifact } from '@cdktf/provider-aws'

servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference">ServicecatalogProvisioningArtifactTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.acceptLanguageInput">acceptLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.activeInput">activeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.disableTemplateValidationInput">disableTemplateValidationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.guidanceInput">guidanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.productIdInput">productIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.templatePhysicalIdInput">templatePhysicalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.templateUrlInput">templateUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts">ServicecatalogProvisioningArtifactTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.acceptLanguage">acceptLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.active">active</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.disableTemplateValidation">disableTemplateValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.guidance">guidance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.productId">productId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.templatePhysicalId">templatePhysicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.templateUrl">templateUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.timeouts"></a>

```typescript
public readonly timeouts: ServicecatalogProvisioningArtifactTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference">ServicecatalogProvisioningArtifactTimeoutsOutputReference</a>

---

##### `acceptLanguageInput`<sup>Optional</sup> <a name="acceptLanguageInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.acceptLanguageInput"></a>

```typescript
public readonly acceptLanguageInput: string;
```

- *Type:* string

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.activeInput"></a>

```typescript
public readonly activeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableTemplateValidationInput`<sup>Optional</sup> <a name="disableTemplateValidationInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.disableTemplateValidationInput"></a>

```typescript
public readonly disableTemplateValidationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `guidanceInput`<sup>Optional</sup> <a name="guidanceInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.guidanceInput"></a>

```typescript
public readonly guidanceInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `productIdInput`<sup>Optional</sup> <a name="productIdInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.productIdInput"></a>

```typescript
public readonly productIdInput: string;
```

- *Type:* string

---

##### `templatePhysicalIdInput`<sup>Optional</sup> <a name="templatePhysicalIdInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.templatePhysicalIdInput"></a>

```typescript
public readonly templatePhysicalIdInput: string;
```

- *Type:* string

---

##### `templateUrlInput`<sup>Optional</sup> <a name="templateUrlInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.templateUrlInput"></a>

```typescript
public readonly templateUrlInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ServicecatalogProvisioningArtifactTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts">ServicecatalogProvisioningArtifactTimeouts</a> | cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `acceptLanguage`<sup>Required</sup> <a name="acceptLanguage" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.acceptLanguage"></a>

```typescript
public readonly acceptLanguage: string;
```

- *Type:* string

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableTemplateValidation`<sup>Required</sup> <a name="disableTemplateValidation" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.disableTemplateValidation"></a>

```typescript
public readonly disableTemplateValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `guidance`<sup>Required</sup> <a name="guidance" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.guidance"></a>

```typescript
public readonly guidance: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

---

##### `templatePhysicalId`<sup>Required</sup> <a name="templatePhysicalId" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.templatePhysicalId"></a>

```typescript
public readonly templatePhysicalId: string;
```

- *Type:* string

---

##### `templateUrl`<sup>Required</sup> <a name="templateUrl" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.templateUrl"></a>

```typescript
public readonly templateUrl: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogProvisioningArtifactConfig <a name="ServicecatalogProvisioningArtifactConfig" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.Initializer"></a>

```typescript
import { servicecatalogProvisioningArtifact } from '@cdktf/provider-aws'

const servicecatalogProvisioningArtifactConfig: servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.productId">productId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#product_id ServicecatalogProvisioningArtifact#product_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.acceptLanguage">acceptLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#accept_language ServicecatalogProvisioningArtifact#accept_language}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.active">active</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#active ServicecatalogProvisioningArtifact#active}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#description ServicecatalogProvisioningArtifact#description}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.disableTemplateValidation">disableTemplateValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#disable_template_validation ServicecatalogProvisioningArtifact#disable_template_validation}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.guidance">guidance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#guidance ServicecatalogProvisioningArtifact#guidance}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#id ServicecatalogProvisioningArtifact#id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#name ServicecatalogProvisioningArtifact#name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.templatePhysicalId">templatePhysicalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#template_physical_id ServicecatalogProvisioningArtifact#template_physical_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.templateUrl">templateUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#template_url ServicecatalogProvisioningArtifact#template_url}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts">ServicecatalogProvisioningArtifactTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#type ServicecatalogProvisioningArtifact#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#product_id ServicecatalogProvisioningArtifact#product_id}.

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.acceptLanguage"></a>

```typescript
public readonly acceptLanguage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#accept_language ServicecatalogProvisioningArtifact#accept_language}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#active ServicecatalogProvisioningArtifact#active}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#description ServicecatalogProvisioningArtifact#description}.

---

##### `disableTemplateValidation`<sup>Optional</sup> <a name="disableTemplateValidation" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.disableTemplateValidation"></a>

```typescript
public readonly disableTemplateValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#disable_template_validation ServicecatalogProvisioningArtifact#disable_template_validation}.

---

##### `guidance`<sup>Optional</sup> <a name="guidance" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.guidance"></a>

```typescript
public readonly guidance: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#guidance ServicecatalogProvisioningArtifact#guidance}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#id ServicecatalogProvisioningArtifact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#name ServicecatalogProvisioningArtifact#name}.

---

##### `templatePhysicalId`<sup>Optional</sup> <a name="templatePhysicalId" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.templatePhysicalId"></a>

```typescript
public readonly templatePhysicalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#template_physical_id ServicecatalogProvisioningArtifact#template_physical_id}.

---

##### `templateUrl`<sup>Optional</sup> <a name="templateUrl" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.templateUrl"></a>

```typescript
public readonly templateUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#template_url ServicecatalogProvisioningArtifact#template_url}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ServicecatalogProvisioningArtifactTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts">ServicecatalogProvisioningArtifactTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#timeouts ServicecatalogProvisioningArtifact#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#type ServicecatalogProvisioningArtifact#type}.

---

### ServicecatalogProvisioningArtifactTimeouts <a name="ServicecatalogProvisioningArtifactTimeouts" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.Initializer"></a>

```typescript
import { servicecatalogProvisioningArtifact } from '@cdktf/provider-aws'

const servicecatalogProvisioningArtifactTimeouts: servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#create ServicecatalogProvisioningArtifact#create}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#delete ServicecatalogProvisioningArtifact#delete}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#read ServicecatalogProvisioningArtifact#read}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#update ServicecatalogProvisioningArtifact#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#create ServicecatalogProvisioningArtifact#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#delete ServicecatalogProvisioningArtifact#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#read ServicecatalogProvisioningArtifact#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#update ServicecatalogProvisioningArtifact#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogProvisioningArtifactTimeoutsOutputReference <a name="ServicecatalogProvisioningArtifactTimeoutsOutputReference" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.Initializer"></a>

```typescript
import { servicecatalogProvisioningArtifact } from '@cdktf/provider-aws'

new servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts">ServicecatalogProvisioningArtifactTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServicecatalogProvisioningArtifactTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts">ServicecatalogProvisioningArtifactTimeouts</a> | cdktf.IResolvable

---



