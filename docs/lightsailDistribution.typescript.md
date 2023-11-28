# `aws_lightsail_distribution`

Refer to the Terraform Registory for docs: [`aws_lightsail_distribution`](https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution).

# `lightsailDistribution` Submodule <a name="`lightsailDistribution` Submodule" id="@cdktf/provider-aws.lightsailDistribution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailDistribution <a name="LightsailDistribution" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution aws_lightsail_distribution}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktf/provider-aws'

new lightsailDistribution.LightsailDistribution(scope: Construct, id: string, config: LightsailDistributionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig">LightsailDistributionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig">LightsailDistributionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.putCacheBehavior">putCacheBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.putCacheBehaviorSettings">putCacheBehaviorSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.putDefaultCacheBehavior">putDefaultCacheBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.putOrigin">putOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetCacheBehavior">resetCacheBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetCacheBehaviorSettings">resetCacheBehaviorSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetCertificateName">resetCertificateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putCacheBehavior` <a name="putCacheBehavior" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.putCacheBehavior"></a>

```typescript
public putCacheBehavior(value: IResolvable | LightsailDistributionCacheBehavior[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.putCacheBehavior.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehavior">LightsailDistributionCacheBehavior</a>[]

---

##### `putCacheBehaviorSettings` <a name="putCacheBehaviorSettings" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.putCacheBehaviorSettings"></a>

```typescript
public putCacheBehaviorSettings(value: LightsailDistributionCacheBehaviorSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.putCacheBehaviorSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a>

---

##### `putDefaultCacheBehavior` <a name="putDefaultCacheBehavior" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.putDefaultCacheBehavior"></a>

```typescript
public putDefaultCacheBehavior(value: LightsailDistributionDefaultCacheBehavior): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.putDefaultCacheBehavior.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a>

---

##### `putOrigin` <a name="putOrigin" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.putOrigin"></a>

```typescript
public putOrigin(value: LightsailDistributionOrigin): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.putOrigin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.putTimeouts"></a>

```typescript
public putTimeouts(value: LightsailDistributionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeouts">LightsailDistributionTimeouts</a>

---

##### `resetCacheBehavior` <a name="resetCacheBehavior" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetCacheBehavior"></a>

```typescript
public resetCacheBehavior(): void
```

##### `resetCacheBehaviorSettings` <a name="resetCacheBehaviorSettings" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetCacheBehaviorSettings"></a>

```typescript
public resetCacheBehaviorSettings(): void
```

##### `resetCertificateName` <a name="resetCertificateName" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetCertificateName"></a>

```typescript
public resetCertificateName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetIpAddressType"></a>

```typescript
public resetIpAddressType(): void
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LightsailDistribution resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.isConstruct"></a>

```typescript
import { lightsailDistribution } from '@cdktf/provider-aws'

lightsailDistribution.LightsailDistribution.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.isTerraformElement"></a>

```typescript
import { lightsailDistribution } from '@cdktf/provider-aws'

lightsailDistribution.LightsailDistribution.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.isTerraformResource"></a>

```typescript
import { lightsailDistribution } from '@cdktf/provider-aws'

lightsailDistribution.LightsailDistribution.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.generateConfigForImport"></a>

```typescript
import { lightsailDistribution } from '@cdktf/provider-aws'

lightsailDistribution.LightsailDistribution.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LightsailDistribution resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LightsailDistribution to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LightsailDistribution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LightsailDistribution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.alternativeDomainNames">alternativeDomainNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.cacheBehavior">cacheBehavior</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList">LightsailDistributionCacheBehaviorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.cacheBehaviorSettings">cacheBehaviorSettings</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference">LightsailDistributionCacheBehaviorSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.defaultCacheBehavior">defaultCacheBehavior</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference">LightsailDistributionDefaultCacheBehaviorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.location">location</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList">LightsailDistributionLocationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.origin">origin</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference">LightsailDistributionOriginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.originPublicDns">originPublicDns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.supportCode">supportCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference">LightsailDistributionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.bundleIdInput">bundleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.cacheBehaviorInput">cacheBehaviorInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehavior">LightsailDistributionCacheBehavior</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.cacheBehaviorSettingsInput">cacheBehaviorSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.certificateNameInput">certificateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.defaultCacheBehaviorInput">defaultCacheBehaviorInput</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.originInput">originInput</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeouts">LightsailDistributionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.bundleId">bundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.certificateName">certificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `alternativeDomainNames`<sup>Required</sup> <a name="alternativeDomainNames" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.alternativeDomainNames"></a>

```typescript
public readonly alternativeDomainNames: string[];
```

- *Type:* string[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `cacheBehavior`<sup>Required</sup> <a name="cacheBehavior" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.cacheBehavior"></a>

```typescript
public readonly cacheBehavior: LightsailDistributionCacheBehaviorList;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList">LightsailDistributionCacheBehaviorList</a>

---

##### `cacheBehaviorSettings`<sup>Required</sup> <a name="cacheBehaviorSettings" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.cacheBehaviorSettings"></a>

```typescript
public readonly cacheBehaviorSettings: LightsailDistributionCacheBehaviorSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference">LightsailDistributionCacheBehaviorSettingsOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `defaultCacheBehavior`<sup>Required</sup> <a name="defaultCacheBehavior" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.defaultCacheBehavior"></a>

```typescript
public readonly defaultCacheBehavior: LightsailDistributionDefaultCacheBehaviorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference">LightsailDistributionDefaultCacheBehaviorOutputReference</a>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.location"></a>

```typescript
public readonly location: LightsailDistributionLocationList;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList">LightsailDistributionLocationList</a>

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.origin"></a>

```typescript
public readonly origin: LightsailDistributionOriginOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference">LightsailDistributionOriginOutputReference</a>

---

##### `originPublicDns`<sup>Required</sup> <a name="originPublicDns" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.originPublicDns"></a>

```typescript
public readonly originPublicDns: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `supportCode`<sup>Required</sup> <a name="supportCode" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.supportCode"></a>

```typescript
public readonly supportCode: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.timeouts"></a>

```typescript
public readonly timeouts: LightsailDistributionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference">LightsailDistributionTimeoutsOutputReference</a>

---

##### `bundleIdInput`<sup>Optional</sup> <a name="bundleIdInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.bundleIdInput"></a>

```typescript
public readonly bundleIdInput: string;
```

- *Type:* string

---

##### `cacheBehaviorInput`<sup>Optional</sup> <a name="cacheBehaviorInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.cacheBehaviorInput"></a>

```typescript
public readonly cacheBehaviorInput: IResolvable | LightsailDistributionCacheBehavior[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehavior">LightsailDistributionCacheBehavior</a>[]

---

##### `cacheBehaviorSettingsInput`<sup>Optional</sup> <a name="cacheBehaviorSettingsInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.cacheBehaviorSettingsInput"></a>

```typescript
public readonly cacheBehaviorSettingsInput: LightsailDistributionCacheBehaviorSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a>

---

##### `certificateNameInput`<sup>Optional</sup> <a name="certificateNameInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.certificateNameInput"></a>

```typescript
public readonly certificateNameInput: string;
```

- *Type:* string

---

##### `defaultCacheBehaviorInput`<sup>Optional</sup> <a name="defaultCacheBehaviorInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.defaultCacheBehaviorInput"></a>

```typescript
public readonly defaultCacheBehaviorInput: LightsailDistributionDefaultCacheBehavior;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.ipAddressTypeInput"></a>

```typescript
public readonly ipAddressTypeInput: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `originInput`<sup>Optional</sup> <a name="originInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.originInput"></a>

```typescript
public readonly originInput: LightsailDistributionOrigin;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LightsailDistributionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeouts">LightsailDistributionTimeouts</a>

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.bundleId"></a>

```typescript
public readonly bundleId: string;
```

- *Type:* string

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.certificateName"></a>

```typescript
public readonly certificateName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistribution.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailDistributionCacheBehavior <a name="LightsailDistributionCacheBehavior" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehavior.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktf/provider-aws'

const lightsailDistributionCacheBehavior: lightsailDistribution.LightsailDistributionCacheBehavior = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehavior.property.behavior">behavior</a></code> | <code>string</code> | The cache behavior for the specified path. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehavior.property.path">path</a></code> | <code>string</code> | The path to a directory or file to cached, or not cache. |

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehavior.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

The cache behavior for the specified path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#behavior LightsailDistribution#behavior}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehavior.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The path to a directory or file to cached, or not cache.

Use an asterisk symbol to specify wildcard directories (path/to/assets/*), and file types (*.html, *jpg, *js). Directories and file paths are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#path LightsailDistribution#path}

---

### LightsailDistributionCacheBehaviorSettings <a name="LightsailDistributionCacheBehaviorSettings" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktf/provider-aws'

const lightsailDistributionCacheBehaviorSettings: lightsailDistribution.LightsailDistributionCacheBehaviorSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.allowedHttpMethods">allowedHttpMethods</a></code> | <code>string</code> | The HTTP methods that are processed and forwarded to the distribution's origin. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.cachedHttpMethods">cachedHttpMethods</a></code> | <code>string</code> | The HTTP method responses that are cached by your distribution. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.defaultTtl">defaultTtl</a></code> | <code>number</code> | The default amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the content has been updated. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.forwardedCookies">forwardedCookies</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a></code> | forwarded_cookies block. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.forwardedHeaders">forwardedHeaders</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a></code> | forwarded_headers block. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.forwardedQueryStrings">forwardedQueryStrings</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a></code> | forwarded_query_strings block. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.maximumTtl">maximumTtl</a></code> | <code>number</code> | The maximum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.minimumTtl">minimumTtl</a></code> | <code>number</code> | The minimum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated. |

---

##### `allowedHttpMethods`<sup>Optional</sup> <a name="allowedHttpMethods" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.allowedHttpMethods"></a>

```typescript
public readonly allowedHttpMethods: string;
```

- *Type:* string

The HTTP methods that are processed and forwarded to the distribution's origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#allowed_http_methods LightsailDistribution#allowed_http_methods}

---

##### `cachedHttpMethods`<sup>Optional</sup> <a name="cachedHttpMethods" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.cachedHttpMethods"></a>

```typescript
public readonly cachedHttpMethods: string;
```

- *Type:* string

The HTTP method responses that are cached by your distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#cached_http_methods LightsailDistribution#cached_http_methods}

---

##### `defaultTtl`<sup>Optional</sup> <a name="defaultTtl" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.defaultTtl"></a>

```typescript
public readonly defaultTtl: number;
```

- *Type:* number

The default amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the content has been updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#default_ttl LightsailDistribution#default_ttl}

---

##### `forwardedCookies`<sup>Optional</sup> <a name="forwardedCookies" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.forwardedCookies"></a>

```typescript
public readonly forwardedCookies: LightsailDistributionCacheBehaviorSettingsForwardedCookies;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a>

forwarded_cookies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#forwarded_cookies LightsailDistribution#forwarded_cookies}

---

##### `forwardedHeaders`<sup>Optional</sup> <a name="forwardedHeaders" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.forwardedHeaders"></a>

```typescript
public readonly forwardedHeaders: LightsailDistributionCacheBehaviorSettingsForwardedHeaders;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a>

forwarded_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#forwarded_headers LightsailDistribution#forwarded_headers}

---

##### `forwardedQueryStrings`<sup>Optional</sup> <a name="forwardedQueryStrings" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.forwardedQueryStrings"></a>

```typescript
public readonly forwardedQueryStrings: LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a>

forwarded_query_strings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#forwarded_query_strings LightsailDistribution#forwarded_query_strings}

---

##### `maximumTtl`<sup>Optional</sup> <a name="maximumTtl" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.maximumTtl"></a>

```typescript
public readonly maximumTtl: number;
```

- *Type:* number

The maximum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#maximum_ttl LightsailDistribution#maximum_ttl}

---

##### `minimumTtl`<sup>Optional</sup> <a name="minimumTtl" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.minimumTtl"></a>

```typescript
public readonly minimumTtl: number;
```

- *Type:* number

The minimum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#minimum_ttl LightsailDistribution#minimum_ttl}

---

### LightsailDistributionCacheBehaviorSettingsForwardedCookies <a name="LightsailDistributionCacheBehaviorSettingsForwardedCookies" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktf/provider-aws'

const lightsailDistributionCacheBehaviorSettingsForwardedCookies: lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies.property.cookiesAllowList">cookiesAllowList</a></code> | <code>string[]</code> | The specific cookies to forward to your distribution's origin. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies.property.option">option</a></code> | <code>string</code> | Specifies which cookies to forward to the distribution's origin for a cache behavior: all, none, or allow-list to forward only the cookies specified in the cookiesAllowList parameter. |

---

##### `cookiesAllowList`<sup>Optional</sup> <a name="cookiesAllowList" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies.property.cookiesAllowList"></a>

```typescript
public readonly cookiesAllowList: string[];
```

- *Type:* string[]

The specific cookies to forward to your distribution's origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#cookies_allow_list LightsailDistribution#cookies_allow_list}

---

##### `option`<sup>Optional</sup> <a name="option" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies.property.option"></a>

```typescript
public readonly option: string;
```

- *Type:* string

Specifies which cookies to forward to the distribution's origin for a cache behavior: all, none, or allow-list to forward only the cookies specified in the cookiesAllowList parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#option LightsailDistribution#option}

---

### LightsailDistributionCacheBehaviorSettingsForwardedHeaders <a name="LightsailDistributionCacheBehaviorSettingsForwardedHeaders" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktf/provider-aws'

const lightsailDistributionCacheBehaviorSettingsForwardedHeaders: lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders.property.headersAllowList">headersAllowList</a></code> | <code>string[]</code> | The specific headers to forward to your distribution's origin. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders.property.option">option</a></code> | <code>string</code> | The headers that you want your distribution to forward to your origin and base caching on. |

---

##### `headersAllowList`<sup>Optional</sup> <a name="headersAllowList" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders.property.headersAllowList"></a>

```typescript
public readonly headersAllowList: string[];
```

- *Type:* string[]

The specific headers to forward to your distribution's origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#headers_allow_list LightsailDistribution#headers_allow_list}

---

##### `option`<sup>Optional</sup> <a name="option" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders.property.option"></a>

```typescript
public readonly option: string;
```

- *Type:* string

The headers that you want your distribution to forward to your origin and base caching on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#option LightsailDistribution#option}

---

### LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings <a name="LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktf/provider-aws'

const lightsailDistributionCacheBehaviorSettingsForwardedQueryStrings: lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings.property.option">option</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether the distribution forwards and caches based on query strings. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings.property.queryStringsAllowedList">queryStringsAllowedList</a></code> | <code>string[]</code> | The specific query strings that the distribution forwards to the origin. |

---

##### `option`<sup>Optional</sup> <a name="option" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings.property.option"></a>

```typescript
public readonly option: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether the distribution forwards and caches based on query strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#option LightsailDistribution#option}

---

##### `queryStringsAllowedList`<sup>Optional</sup> <a name="queryStringsAllowedList" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings.property.queryStringsAllowedList"></a>

```typescript
public readonly queryStringsAllowedList: string[];
```

- *Type:* string[]

The specific query strings that the distribution forwards to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#query_strings_allowed_list LightsailDistribution#query_strings_allowed_list}

---

### LightsailDistributionConfig <a name="LightsailDistributionConfig" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktf/provider-aws'

const lightsailDistributionConfig: lightsailDistribution.LightsailDistributionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.bundleId">bundleId</a></code> | <code>string</code> | The bundle ID to use for the distribution. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.defaultCacheBehavior">defaultCacheBehavior</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a></code> | default_cache_behavior block. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.name">name</a></code> | <code>string</code> | The name of the distribution. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.origin">origin</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a></code> | origin block. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.cacheBehavior">cacheBehavior</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehavior">LightsailDistributionCacheBehavior</a>[]</code> | cache_behavior block. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.cacheBehaviorSettings">cacheBehaviorSettings</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a></code> | cache_behavior_settings block. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.certificateName">certificateName</a></code> | <code>string</code> | The name of the SSL/TLS certificate attached to the distribution, if any. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#id LightsailDistribution#id}. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | The IP address type of the distribution. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether the distribution is enabled. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#tags LightsailDistribution#tags}. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#tags_all LightsailDistribution#tags_all}. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeouts">LightsailDistributionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.bundleId"></a>

```typescript
public readonly bundleId: string;
```

- *Type:* string

The bundle ID to use for the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#bundle_id LightsailDistribution#bundle_id}

---

##### `defaultCacheBehavior`<sup>Required</sup> <a name="defaultCacheBehavior" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.defaultCacheBehavior"></a>

```typescript
public readonly defaultCacheBehavior: LightsailDistributionDefaultCacheBehavior;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a>

default_cache_behavior block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#default_cache_behavior LightsailDistribution#default_cache_behavior}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#name LightsailDistribution#name}

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.origin"></a>

```typescript
public readonly origin: LightsailDistributionOrigin;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a>

origin block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#origin LightsailDistribution#origin}

---

##### `cacheBehavior`<sup>Optional</sup> <a name="cacheBehavior" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.cacheBehavior"></a>

```typescript
public readonly cacheBehavior: IResolvable | LightsailDistributionCacheBehavior[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehavior">LightsailDistributionCacheBehavior</a>[]

cache_behavior block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#cache_behavior LightsailDistribution#cache_behavior}

---

##### `cacheBehaviorSettings`<sup>Optional</sup> <a name="cacheBehaviorSettings" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.cacheBehaviorSettings"></a>

```typescript
public readonly cacheBehaviorSettings: LightsailDistributionCacheBehaviorSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a>

cache_behavior_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#cache_behavior_settings LightsailDistribution#cache_behavior_settings}

---

##### `certificateName`<sup>Optional</sup> <a name="certificateName" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.certificateName"></a>

```typescript
public readonly certificateName: string;
```

- *Type:* string

The name of the SSL/TLS certificate attached to the distribution, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#certificate_name LightsailDistribution#certificate_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#id LightsailDistribution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

The IP address type of the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#ip_address_type LightsailDistribution#ip_address_type}

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether the distribution is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#is_enabled LightsailDistribution#is_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#tags LightsailDistribution#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#tags_all LightsailDistribution#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LightsailDistributionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeouts">LightsailDistributionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#timeouts LightsailDistribution#timeouts}

---

### LightsailDistributionDefaultCacheBehavior <a name="LightsailDistributionDefaultCacheBehavior" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehavior.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktf/provider-aws'

const lightsailDistributionDefaultCacheBehavior: lightsailDistribution.LightsailDistributionDefaultCacheBehavior = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehavior.property.behavior">behavior</a></code> | <code>string</code> | The cache behavior of the distribution. |

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehavior.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

The cache behavior of the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#behavior LightsailDistribution#behavior}

---

### LightsailDistributionLocation <a name="LightsailDistributionLocation" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocation.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktf/provider-aws'

const lightsailDistributionLocation: lightsailDistribution.LightsailDistributionLocation = { ... }
```


### LightsailDistributionOrigin <a name="LightsailDistributionOrigin" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOrigin.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktf/provider-aws'

const lightsailDistributionOrigin: lightsailDistribution.LightsailDistributionOrigin = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOrigin.property.name">name</a></code> | <code>string</code> | The name of the origin resource. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOrigin.property.regionName">regionName</a></code> | <code>string</code> | The AWS Region name of the origin resource. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOrigin.property.protocolPolicy">protocolPolicy</a></code> | <code>string</code> | The protocol that your Amazon Lightsail distribution uses when establishing a connection with your origin to pull content. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOrigin.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the origin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#name LightsailDistribution#name}

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOrigin.property.regionName"></a>

```typescript
public readonly regionName: string;
```

- *Type:* string

The AWS Region name of the origin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#region_name LightsailDistribution#region_name}

---

##### `protocolPolicy`<sup>Optional</sup> <a name="protocolPolicy" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOrigin.property.protocolPolicy"></a>

```typescript
public readonly protocolPolicy: string;
```

- *Type:* string

The protocol that your Amazon Lightsail distribution uses when establishing a connection with your origin to pull content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#protocol_policy LightsailDistribution#protocol_policy}

---

### LightsailDistributionTimeouts <a name="LightsailDistributionTimeouts" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeouts.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktf/provider-aws'

const lightsailDistributionTimeouts: lightsailDistribution.LightsailDistributionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#create LightsailDistribution#create}. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#delete LightsailDistribution#delete}. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#update LightsailDistribution#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#create LightsailDistribution#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#delete LightsailDistribution#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/lightsail_distribution#update LightsailDistribution#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailDistributionCacheBehaviorList <a name="LightsailDistributionCacheBehaviorList" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktf/provider-aws'

new lightsailDistribution.LightsailDistributionCacheBehaviorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.get"></a>

```typescript
public get(index: number): LightsailDistributionCacheBehaviorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehavior">LightsailDistributionCacheBehavior</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LightsailDistributionCacheBehavior[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehavior">LightsailDistributionCacheBehavior</a>[]

---


### LightsailDistributionCacheBehaviorOutputReference <a name="LightsailDistributionCacheBehaviorOutputReference" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktf/provider-aws'

new lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.property.behaviorInput">behaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.property.behavior">behavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehavior">LightsailDistributionCacheBehavior</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `behaviorInput`<sup>Optional</sup> <a name="behaviorInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.property.behaviorInput"></a>

```typescript
public readonly behaviorInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LightsailDistributionCacheBehavior;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehavior">LightsailDistributionCacheBehavior</a>

---


### LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference <a name="LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktf/provider-aws'

new lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resetCookiesAllowList">resetCookiesAllowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resetOption">resetOption</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCookiesAllowList` <a name="resetCookiesAllowList" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resetCookiesAllowList"></a>

```typescript
public resetCookiesAllowList(): void
```

##### `resetOption` <a name="resetOption" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resetOption"></a>

```typescript
public resetOption(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.cookiesAllowListInput">cookiesAllowListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.optionInput">optionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.cookiesAllowList">cookiesAllowList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.option">option</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cookiesAllowListInput`<sup>Optional</sup> <a name="cookiesAllowListInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.cookiesAllowListInput"></a>

```typescript
public readonly cookiesAllowListInput: string[];
```

- *Type:* string[]

---

##### `optionInput`<sup>Optional</sup> <a name="optionInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.optionInput"></a>

```typescript
public readonly optionInput: string;
```

- *Type:* string

---

##### `cookiesAllowList`<sup>Required</sup> <a name="cookiesAllowList" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.cookiesAllowList"></a>

```typescript
public readonly cookiesAllowList: string[];
```

- *Type:* string[]

---

##### `option`<sup>Required</sup> <a name="option" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.option"></a>

```typescript
public readonly option: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LightsailDistributionCacheBehaviorSettingsForwardedCookies;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a>

---


### LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference <a name="LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktf/provider-aws'

new lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resetHeadersAllowList">resetHeadersAllowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resetOption">resetOption</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeadersAllowList` <a name="resetHeadersAllowList" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resetHeadersAllowList"></a>

```typescript
public resetHeadersAllowList(): void
```

##### `resetOption` <a name="resetOption" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resetOption"></a>

```typescript
public resetOption(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.headersAllowListInput">headersAllowListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.optionInput">optionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.headersAllowList">headersAllowList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.option">option</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headersAllowListInput`<sup>Optional</sup> <a name="headersAllowListInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.headersAllowListInput"></a>

```typescript
public readonly headersAllowListInput: string[];
```

- *Type:* string[]

---

##### `optionInput`<sup>Optional</sup> <a name="optionInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.optionInput"></a>

```typescript
public readonly optionInput: string;
```

- *Type:* string

---

##### `headersAllowList`<sup>Required</sup> <a name="headersAllowList" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.headersAllowList"></a>

```typescript
public readonly headersAllowList: string[];
```

- *Type:* string[]

---

##### `option`<sup>Required</sup> <a name="option" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.option"></a>

```typescript
public readonly option: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LightsailDistributionCacheBehaviorSettingsForwardedHeaders;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a>

---


### LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference <a name="LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktf/provider-aws'

new lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resetOption">resetOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resetQueryStringsAllowedList">resetQueryStringsAllowedList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOption` <a name="resetOption" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resetOption"></a>

```typescript
public resetOption(): void
```

##### `resetQueryStringsAllowedList` <a name="resetQueryStringsAllowedList" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resetQueryStringsAllowedList"></a>

```typescript
public resetQueryStringsAllowedList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.optionInput">optionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.queryStringsAllowedListInput">queryStringsAllowedListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.option">option</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.queryStringsAllowedList">queryStringsAllowedList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `optionInput`<sup>Optional</sup> <a name="optionInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.optionInput"></a>

```typescript
public readonly optionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `queryStringsAllowedListInput`<sup>Optional</sup> <a name="queryStringsAllowedListInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.queryStringsAllowedListInput"></a>

```typescript
public readonly queryStringsAllowedListInput: string[];
```

- *Type:* string[]

---

##### `option`<sup>Required</sup> <a name="option" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.option"></a>

```typescript
public readonly option: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `queryStringsAllowedList`<sup>Required</sup> <a name="queryStringsAllowedList" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.queryStringsAllowedList"></a>

```typescript
public readonly queryStringsAllowedList: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a>

---


### LightsailDistributionCacheBehaviorSettingsOutputReference <a name="LightsailDistributionCacheBehaviorSettingsOutputReference" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktf/provider-aws'

new lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedCookies">putForwardedCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedHeaders">putForwardedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedQueryStrings">putForwardedQueryStrings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetAllowedHttpMethods">resetAllowedHttpMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetCachedHttpMethods">resetCachedHttpMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetDefaultTtl">resetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetForwardedCookies">resetForwardedCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetForwardedHeaders">resetForwardedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetForwardedQueryStrings">resetForwardedQueryStrings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetMaximumTtl">resetMaximumTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetMinimumTtl">resetMinimumTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putForwardedCookies` <a name="putForwardedCookies" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedCookies"></a>

```typescript
public putForwardedCookies(value: LightsailDistributionCacheBehaviorSettingsForwardedCookies): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedCookies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a>

---

##### `putForwardedHeaders` <a name="putForwardedHeaders" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedHeaders"></a>

```typescript
public putForwardedHeaders(value: LightsailDistributionCacheBehaviorSettingsForwardedHeaders): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a>

---

##### `putForwardedQueryStrings` <a name="putForwardedQueryStrings" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedQueryStrings"></a>

```typescript
public putForwardedQueryStrings(value: LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedQueryStrings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a>

---

##### `resetAllowedHttpMethods` <a name="resetAllowedHttpMethods" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetAllowedHttpMethods"></a>

```typescript
public resetAllowedHttpMethods(): void
```

##### `resetCachedHttpMethods` <a name="resetCachedHttpMethods" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetCachedHttpMethods"></a>

```typescript
public resetCachedHttpMethods(): void
```

##### `resetDefaultTtl` <a name="resetDefaultTtl" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetDefaultTtl"></a>

```typescript
public resetDefaultTtl(): void
```

##### `resetForwardedCookies` <a name="resetForwardedCookies" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetForwardedCookies"></a>

```typescript
public resetForwardedCookies(): void
```

##### `resetForwardedHeaders` <a name="resetForwardedHeaders" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetForwardedHeaders"></a>

```typescript
public resetForwardedHeaders(): void
```

##### `resetForwardedQueryStrings` <a name="resetForwardedQueryStrings" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetForwardedQueryStrings"></a>

```typescript
public resetForwardedQueryStrings(): void
```

##### `resetMaximumTtl` <a name="resetMaximumTtl" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetMaximumTtl"></a>

```typescript
public resetMaximumTtl(): void
```

##### `resetMinimumTtl` <a name="resetMinimumTtl" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetMinimumTtl"></a>

```typescript
public resetMinimumTtl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedCookies">forwardedCookies</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference">LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedHeaders">forwardedHeaders</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference">LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedQueryStrings">forwardedQueryStrings</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference">LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.allowedHttpMethodsInput">allowedHttpMethodsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.cachedHttpMethodsInput">cachedHttpMethodsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.defaultTtlInput">defaultTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedCookiesInput">forwardedCookiesInput</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedHeadersInput">forwardedHeadersInput</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedQueryStringsInput">forwardedQueryStringsInput</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.maximumTtlInput">maximumTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.minimumTtlInput">minimumTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.allowedHttpMethods">allowedHttpMethods</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.cachedHttpMethods">cachedHttpMethods</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.defaultTtl">defaultTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.maximumTtl">maximumTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.minimumTtl">minimumTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `forwardedCookies`<sup>Required</sup> <a name="forwardedCookies" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedCookies"></a>

```typescript
public readonly forwardedCookies: LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference">LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference</a>

---

##### `forwardedHeaders`<sup>Required</sup> <a name="forwardedHeaders" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedHeaders"></a>

```typescript
public readonly forwardedHeaders: LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference">LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference</a>

---

##### `forwardedQueryStrings`<sup>Required</sup> <a name="forwardedQueryStrings" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedQueryStrings"></a>

```typescript
public readonly forwardedQueryStrings: LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference">LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference</a>

---

##### `allowedHttpMethodsInput`<sup>Optional</sup> <a name="allowedHttpMethodsInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.allowedHttpMethodsInput"></a>

```typescript
public readonly allowedHttpMethodsInput: string;
```

- *Type:* string

---

##### `cachedHttpMethodsInput`<sup>Optional</sup> <a name="cachedHttpMethodsInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.cachedHttpMethodsInput"></a>

```typescript
public readonly cachedHttpMethodsInput: string;
```

- *Type:* string

---

##### `defaultTtlInput`<sup>Optional</sup> <a name="defaultTtlInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.defaultTtlInput"></a>

```typescript
public readonly defaultTtlInput: number;
```

- *Type:* number

---

##### `forwardedCookiesInput`<sup>Optional</sup> <a name="forwardedCookiesInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedCookiesInput"></a>

```typescript
public readonly forwardedCookiesInput: LightsailDistributionCacheBehaviorSettingsForwardedCookies;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a>

---

##### `forwardedHeadersInput`<sup>Optional</sup> <a name="forwardedHeadersInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedHeadersInput"></a>

```typescript
public readonly forwardedHeadersInput: LightsailDistributionCacheBehaviorSettingsForwardedHeaders;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a>

---

##### `forwardedQueryStringsInput`<sup>Optional</sup> <a name="forwardedQueryStringsInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedQueryStringsInput"></a>

```typescript
public readonly forwardedQueryStringsInput: LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a>

---

##### `maximumTtlInput`<sup>Optional</sup> <a name="maximumTtlInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.maximumTtlInput"></a>

```typescript
public readonly maximumTtlInput: number;
```

- *Type:* number

---

##### `minimumTtlInput`<sup>Optional</sup> <a name="minimumTtlInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.minimumTtlInput"></a>

```typescript
public readonly minimumTtlInput: number;
```

- *Type:* number

---

##### `allowedHttpMethods`<sup>Required</sup> <a name="allowedHttpMethods" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.allowedHttpMethods"></a>

```typescript
public readonly allowedHttpMethods: string;
```

- *Type:* string

---

##### `cachedHttpMethods`<sup>Required</sup> <a name="cachedHttpMethods" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.cachedHttpMethods"></a>

```typescript
public readonly cachedHttpMethods: string;
```

- *Type:* string

---

##### `defaultTtl`<sup>Required</sup> <a name="defaultTtl" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.defaultTtl"></a>

```typescript
public readonly defaultTtl: number;
```

- *Type:* number

---

##### `maximumTtl`<sup>Required</sup> <a name="maximumTtl" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.maximumTtl"></a>

```typescript
public readonly maximumTtl: number;
```

- *Type:* number

---

##### `minimumTtl`<sup>Required</sup> <a name="minimumTtl" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.minimumTtl"></a>

```typescript
public readonly minimumTtl: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LightsailDistributionCacheBehaviorSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a>

---


### LightsailDistributionDefaultCacheBehaviorOutputReference <a name="LightsailDistributionDefaultCacheBehaviorOutputReference" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktf/provider-aws'

new lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.behaviorInput">behaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.behavior">behavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `behaviorInput`<sup>Optional</sup> <a name="behaviorInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.behaviorInput"></a>

```typescript
public readonly behaviorInput: string;
```

- *Type:* string

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LightsailDistributionDefaultCacheBehavior;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a>

---


### LightsailDistributionLocationList <a name="LightsailDistributionLocationList" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktf/provider-aws'

new lightsailDistribution.LightsailDistributionLocationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.get"></a>

```typescript
public get(index: number): LightsailDistributionLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### LightsailDistributionLocationOutputReference <a name="LightsailDistributionLocationOutputReference" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktf/provider-aws'

new lightsailDistribution.LightsailDistributionLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.property.regionName">regionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocation">LightsailDistributionLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.property.regionName"></a>

```typescript
public readonly regionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LightsailDistributionLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionLocation">LightsailDistributionLocation</a>

---


### LightsailDistributionOriginOutputReference <a name="LightsailDistributionOriginOutputReference" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktf/provider-aws'

new lightsailDistribution.LightsailDistributionOriginOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.resetProtocolPolicy">resetProtocolPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProtocolPolicy` <a name="resetProtocolPolicy" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.resetProtocolPolicy"></a>

```typescript
public resetProtocolPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.protocolPolicyInput">protocolPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.regionNameInput">regionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.protocolPolicy">protocolPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.regionName">regionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `protocolPolicyInput`<sup>Optional</sup> <a name="protocolPolicyInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.protocolPolicyInput"></a>

```typescript
public readonly protocolPolicyInput: string;
```

- *Type:* string

---

##### `regionNameInput`<sup>Optional</sup> <a name="regionNameInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.regionNameInput"></a>

```typescript
public readonly regionNameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocolPolicy`<sup>Required</sup> <a name="protocolPolicy" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.protocolPolicy"></a>

```typescript
public readonly protocolPolicy: string;
```

- *Type:* string

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.regionName"></a>

```typescript
public readonly regionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOriginOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LightsailDistributionOrigin;
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a>

---


### LightsailDistributionTimeoutsOutputReference <a name="LightsailDistributionTimeoutsOutputReference" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktf/provider-aws'

new lightsailDistribution.LightsailDistributionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeouts">LightsailDistributionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LightsailDistributionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lightsailDistribution.LightsailDistributionTimeouts">LightsailDistributionTimeouts</a>

---



