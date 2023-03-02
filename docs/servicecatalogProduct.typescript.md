# `servicecatalogProduct` Submodule <a name="`servicecatalogProduct` Submodule" id="@cdktf/provider-aws.servicecatalogProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogProduct <a name="ServicecatalogProduct" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product aws_servicecatalog_product}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer"></a>

```typescript
import { servicecatalogProduct } from '@cdktf/provider-aws'

new servicecatalogProduct.ServicecatalogProduct(scope: Construct, id: string, config: ServicecatalogProductConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig">ServicecatalogProductConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig">ServicecatalogProductConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.putProvisioningArtifactParameters">putProvisioningArtifactParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetAcceptLanguage">resetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetDistributor">resetDistributor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetSupportDescription">resetSupportDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetSupportEmail">resetSupportEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetSupportUrl">resetSupportUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProvisioningArtifactParameters` <a name="putProvisioningArtifactParameters" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.putProvisioningArtifactParameters"></a>

```typescript
public putProvisioningArtifactParameters(value: ServicecatalogProductProvisioningArtifactParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.putProvisioningArtifactParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters">ServicecatalogProductProvisioningArtifactParameters</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.putTimeouts"></a>

```typescript
public putTimeouts(value: ServicecatalogProductTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts">ServicecatalogProductTimeouts</a>

---

##### `resetAcceptLanguage` <a name="resetAcceptLanguage" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetAcceptLanguage"></a>

```typescript
public resetAcceptLanguage(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDistributor` <a name="resetDistributor" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetDistributor"></a>

```typescript
public resetDistributor(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSupportDescription` <a name="resetSupportDescription" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetSupportDescription"></a>

```typescript
public resetSupportDescription(): void
```

##### `resetSupportEmail` <a name="resetSupportEmail" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetSupportEmail"></a>

```typescript
public resetSupportEmail(): void
```

##### `resetSupportUrl` <a name="resetSupportUrl" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetSupportUrl"></a>

```typescript
public resetSupportUrl(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.isConstruct"></a>

```typescript
import { servicecatalogProduct } from '@cdktf/provider-aws'

servicecatalogProduct.ServicecatalogProduct.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.isTerraformElement"></a>

```typescript
import { servicecatalogProduct } from '@cdktf/provider-aws'

servicecatalogProduct.ServicecatalogProduct.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.isTerraformResource"></a>

```typescript
import { servicecatalogProduct } from '@cdktf/provider-aws'

servicecatalogProduct.ServicecatalogProduct.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.hasDefaultPath">hasDefaultPath</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.provisioningArtifactParameters">provisioningArtifactParameters</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference">ServicecatalogProductProvisioningArtifactParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference">ServicecatalogProductTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.acceptLanguageInput">acceptLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.distributorInput">distributorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.provisioningArtifactParametersInput">provisioningArtifactParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters">ServicecatalogProductProvisioningArtifactParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.supportDescriptionInput">supportDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.supportEmailInput">supportEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.supportUrlInput">supportUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts">ServicecatalogProductTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.acceptLanguage">acceptLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.distributor">distributor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.supportDescription">supportDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.supportEmail">supportEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.supportUrl">supportUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `hasDefaultPath`<sup>Required</sup> <a name="hasDefaultPath" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.hasDefaultPath"></a>

```typescript
public readonly hasDefaultPath: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `provisioningArtifactParameters`<sup>Required</sup> <a name="provisioningArtifactParameters" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.provisioningArtifactParameters"></a>

```typescript
public readonly provisioningArtifactParameters: ServicecatalogProductProvisioningArtifactParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference">ServicecatalogProductProvisioningArtifactParametersOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.timeouts"></a>

```typescript
public readonly timeouts: ServicecatalogProductTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference">ServicecatalogProductTimeoutsOutputReference</a>

---

##### `acceptLanguageInput`<sup>Optional</sup> <a name="acceptLanguageInput" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.acceptLanguageInput"></a>

```typescript
public readonly acceptLanguageInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `distributorInput`<sup>Optional</sup> <a name="distributorInput" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.distributorInput"></a>

```typescript
public readonly distributorInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `provisioningArtifactParametersInput`<sup>Optional</sup> <a name="provisioningArtifactParametersInput" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.provisioningArtifactParametersInput"></a>

```typescript
public readonly provisioningArtifactParametersInput: ServicecatalogProductProvisioningArtifactParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters">ServicecatalogProductProvisioningArtifactParameters</a>

---

##### `supportDescriptionInput`<sup>Optional</sup> <a name="supportDescriptionInput" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.supportDescriptionInput"></a>

```typescript
public readonly supportDescriptionInput: string;
```

- *Type:* string

---

##### `supportEmailInput`<sup>Optional</sup> <a name="supportEmailInput" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.supportEmailInput"></a>

```typescript
public readonly supportEmailInput: string;
```

- *Type:* string

---

##### `supportUrlInput`<sup>Optional</sup> <a name="supportUrlInput" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.supportUrlInput"></a>

```typescript
public readonly supportUrlInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ServicecatalogProductTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts">ServicecatalogProductTimeouts</a> | cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `acceptLanguage`<sup>Required</sup> <a name="acceptLanguage" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.acceptLanguage"></a>

```typescript
public readonly acceptLanguage: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `distributor`<sup>Required</sup> <a name="distributor" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.distributor"></a>

```typescript
public readonly distributor: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `supportDescription`<sup>Required</sup> <a name="supportDescription" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.supportDescription"></a>

```typescript
public readonly supportDescription: string;
```

- *Type:* string

---

##### `supportEmail`<sup>Required</sup> <a name="supportEmail" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.supportEmail"></a>

```typescript
public readonly supportEmail: string;
```

- *Type:* string

---

##### `supportUrl`<sup>Required</sup> <a name="supportUrl" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.supportUrl"></a>

```typescript
public readonly supportUrl: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProduct.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogProductConfig <a name="ServicecatalogProductConfig" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.Initializer"></a>

```typescript
import { servicecatalogProduct } from '@cdktf/provider-aws'

const servicecatalogProductConfig: servicecatalogProduct.ServicecatalogProductConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#name ServicecatalogProduct#name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#owner ServicecatalogProduct#owner}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.provisioningArtifactParameters">provisioningArtifactParameters</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters">ServicecatalogProductProvisioningArtifactParameters</a></code> | provisioning_artifact_parameters block. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#type ServicecatalogProduct#type}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.acceptLanguage">acceptLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#accept_language ServicecatalogProduct#accept_language}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#description ServicecatalogProduct#description}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.distributor">distributor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#distributor ServicecatalogProduct#distributor}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#id ServicecatalogProduct#id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.supportDescription">supportDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#support_description ServicecatalogProduct#support_description}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.supportEmail">supportEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#support_email ServicecatalogProduct#support_email}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.supportUrl">supportUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#support_url ServicecatalogProduct#support_url}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#tags ServicecatalogProduct#tags}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#tags_all ServicecatalogProduct#tags_all}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts">ServicecatalogProductTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#name ServicecatalogProduct#name}.

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#owner ServicecatalogProduct#owner}.

---

##### `provisioningArtifactParameters`<sup>Required</sup> <a name="provisioningArtifactParameters" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.provisioningArtifactParameters"></a>

```typescript
public readonly provisioningArtifactParameters: ServicecatalogProductProvisioningArtifactParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters">ServicecatalogProductProvisioningArtifactParameters</a>

provisioning_artifact_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#provisioning_artifact_parameters ServicecatalogProduct#provisioning_artifact_parameters}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#type ServicecatalogProduct#type}.

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.acceptLanguage"></a>

```typescript
public readonly acceptLanguage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#accept_language ServicecatalogProduct#accept_language}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#description ServicecatalogProduct#description}.

---

##### `distributor`<sup>Optional</sup> <a name="distributor" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.distributor"></a>

```typescript
public readonly distributor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#distributor ServicecatalogProduct#distributor}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#id ServicecatalogProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `supportDescription`<sup>Optional</sup> <a name="supportDescription" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.supportDescription"></a>

```typescript
public readonly supportDescription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#support_description ServicecatalogProduct#support_description}.

---

##### `supportEmail`<sup>Optional</sup> <a name="supportEmail" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.supportEmail"></a>

```typescript
public readonly supportEmail: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#support_email ServicecatalogProduct#support_email}.

---

##### `supportUrl`<sup>Optional</sup> <a name="supportUrl" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.supportUrl"></a>

```typescript
public readonly supportUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#support_url ServicecatalogProduct#support_url}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#tags ServicecatalogProduct#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#tags_all ServicecatalogProduct#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ServicecatalogProductTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts">ServicecatalogProductTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#timeouts ServicecatalogProduct#timeouts}

---

### ServicecatalogProductProvisioningArtifactParameters <a name="ServicecatalogProductProvisioningArtifactParameters" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters.Initializer"></a>

```typescript
import { servicecatalogProduct } from '@cdktf/provider-aws'

const servicecatalogProductProvisioningArtifactParameters: servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#description ServicecatalogProduct#description}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters.property.disableTemplateValidation">disableTemplateValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#disable_template_validation ServicecatalogProduct#disable_template_validation}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#name ServicecatalogProduct#name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters.property.templatePhysicalId">templatePhysicalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#template_physical_id ServicecatalogProduct#template_physical_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters.property.templateUrl">templateUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#template_url ServicecatalogProduct#template_url}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#type ServicecatalogProduct#type}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#description ServicecatalogProduct#description}.

---

##### `disableTemplateValidation`<sup>Optional</sup> <a name="disableTemplateValidation" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters.property.disableTemplateValidation"></a>

```typescript
public readonly disableTemplateValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#disable_template_validation ServicecatalogProduct#disable_template_validation}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#name ServicecatalogProduct#name}.

---

##### `templatePhysicalId`<sup>Optional</sup> <a name="templatePhysicalId" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters.property.templatePhysicalId"></a>

```typescript
public readonly templatePhysicalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#template_physical_id ServicecatalogProduct#template_physical_id}.

---

##### `templateUrl`<sup>Optional</sup> <a name="templateUrl" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters.property.templateUrl"></a>

```typescript
public readonly templateUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#template_url ServicecatalogProduct#template_url}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#type ServicecatalogProduct#type}.

---

### ServicecatalogProductTimeouts <a name="ServicecatalogProductTimeouts" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts.Initializer"></a>

```typescript
import { servicecatalogProduct } from '@cdktf/provider-aws'

const servicecatalogProductTimeouts: servicecatalogProduct.ServicecatalogProductTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#create ServicecatalogProduct#create}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#delete ServicecatalogProduct#delete}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#read ServicecatalogProduct#read}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#update ServicecatalogProduct#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#create ServicecatalogProduct#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#delete ServicecatalogProduct#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#read ServicecatalogProduct#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#update ServicecatalogProduct#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogProductProvisioningArtifactParametersOutputReference <a name="ServicecatalogProductProvisioningArtifactParametersOutputReference" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.Initializer"></a>

```typescript
import { servicecatalogProduct } from '@cdktf/provider-aws'

new servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.resetDisableTemplateValidation">resetDisableTemplateValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.resetTemplatePhysicalId">resetTemplatePhysicalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.resetTemplateUrl">resetTemplateUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisableTemplateValidation` <a name="resetDisableTemplateValidation" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.resetDisableTemplateValidation"></a>

```typescript
public resetDisableTemplateValidation(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTemplatePhysicalId` <a name="resetTemplatePhysicalId" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.resetTemplatePhysicalId"></a>

```typescript
public resetTemplatePhysicalId(): void
```

##### `resetTemplateUrl` <a name="resetTemplateUrl" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.resetTemplateUrl"></a>

```typescript
public resetTemplateUrl(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.disableTemplateValidationInput">disableTemplateValidationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.templatePhysicalIdInput">templatePhysicalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.templateUrlInput">templateUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.disableTemplateValidation">disableTemplateValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.templatePhysicalId">templatePhysicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.templateUrl">templateUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters">ServicecatalogProductProvisioningArtifactParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableTemplateValidationInput`<sup>Optional</sup> <a name="disableTemplateValidationInput" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.disableTemplateValidationInput"></a>

```typescript
public readonly disableTemplateValidationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `templatePhysicalIdInput`<sup>Optional</sup> <a name="templatePhysicalIdInput" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.templatePhysicalIdInput"></a>

```typescript
public readonly templatePhysicalIdInput: string;
```

- *Type:* string

---

##### `templateUrlInput`<sup>Optional</sup> <a name="templateUrlInput" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.templateUrlInput"></a>

```typescript
public readonly templateUrlInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableTemplateValidation`<sup>Required</sup> <a name="disableTemplateValidation" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.disableTemplateValidation"></a>

```typescript
public readonly disableTemplateValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `templatePhysicalId`<sup>Required</sup> <a name="templatePhysicalId" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.templatePhysicalId"></a>

```typescript
public readonly templatePhysicalId: string;
```

- *Type:* string

---

##### `templateUrl`<sup>Required</sup> <a name="templateUrl" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.templateUrl"></a>

```typescript
public readonly templateUrl: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServicecatalogProductProvisioningArtifactParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductProvisioningArtifactParameters">ServicecatalogProductProvisioningArtifactParameters</a>

---


### ServicecatalogProductTimeoutsOutputReference <a name="ServicecatalogProductTimeoutsOutputReference" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.Initializer"></a>

```typescript
import { servicecatalogProduct } from '@cdktf/provider-aws'

new servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts">ServicecatalogProductTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServicecatalogProductTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProduct.ServicecatalogProductTimeouts">ServicecatalogProductTimeouts</a> | cdktf.IResolvable

---



