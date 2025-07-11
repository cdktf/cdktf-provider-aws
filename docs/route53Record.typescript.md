# `route53Record` Submodule <a name="`route53Record` Submodule" id="@cdktf/provider-aws.route53Record"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53Record <a name="Route53Record" id="@cdktf/provider-aws.route53Record.Route53Record"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record aws_route53_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer"></a>

```typescript
import { route53Record } from '@cdktf/provider-aws'

new route53Record.Route53Record(scope: Construct, id: string, config: Route53RecordConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig">Route53RecordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig">Route53RecordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.putAlias">putAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.putCidrRoutingPolicy">putCidrRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.putFailoverRoutingPolicy">putFailoverRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.putGeolocationRoutingPolicy">putGeolocationRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.putGeoproximityRoutingPolicy">putGeoproximityRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.putLatencyRoutingPolicy">putLatencyRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.putWeightedRoutingPolicy">putWeightedRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetAllowOverwrite">resetAllowOverwrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetCidrRoutingPolicy">resetCidrRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetFailoverRoutingPolicy">resetFailoverRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetGeolocationRoutingPolicy">resetGeolocationRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetGeoproximityRoutingPolicy">resetGeoproximityRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetHealthCheckId">resetHealthCheckId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetLatencyRoutingPolicy">resetLatencyRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetMultivalueAnswerRoutingPolicy">resetMultivalueAnswerRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetRecords">resetRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetSetIdentifier">resetSetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetWeightedRoutingPolicy">resetWeightedRoutingPolicy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53Record.Route53Record.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.route53Record.Route53Record.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53Record.Route53Record.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53Record.Route53Record.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.route53Record.Route53Record.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53Record.Route53Record.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.route53Record.Route53Record.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.route53Record.Route53Record.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.route53Record.Route53Record.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.route53Record.Route53Record.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.route53Record.Route53Record.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.route53Record.Route53Record.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.route53Record.Route53Record.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.route53Record.Route53Record.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53Record.Route53Record.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53Record.Route53Record.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.route53Record.Route53Record.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53Record.Route53Record.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.route53Record.Route53Record.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.route53Record.Route53Record.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.route53Record.Route53Record.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.route53Record.Route53Record.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53Record.Route53Record.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAlias` <a name="putAlias" id="@cdktf/provider-aws.route53Record.Route53Record.putAlias"></a>

```typescript
public putAlias(value: Route53RecordAlias): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53Record.Route53Record.putAlias.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias">Route53RecordAlias</a>

---

##### `putCidrRoutingPolicy` <a name="putCidrRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.putCidrRoutingPolicy"></a>

```typescript
public putCidrRoutingPolicy(value: Route53RecordCidrRoutingPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53Record.Route53Record.putCidrRoutingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy">Route53RecordCidrRoutingPolicy</a>

---

##### `putFailoverRoutingPolicy` <a name="putFailoverRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.putFailoverRoutingPolicy"></a>

```typescript
public putFailoverRoutingPolicy(value: Route53RecordFailoverRoutingPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53Record.Route53Record.putFailoverRoutingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy">Route53RecordFailoverRoutingPolicy</a>

---

##### `putGeolocationRoutingPolicy` <a name="putGeolocationRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.putGeolocationRoutingPolicy"></a>

```typescript
public putGeolocationRoutingPolicy(value: Route53RecordGeolocationRoutingPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53Record.Route53Record.putGeolocationRoutingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy">Route53RecordGeolocationRoutingPolicy</a>

---

##### `putGeoproximityRoutingPolicy` <a name="putGeoproximityRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.putGeoproximityRoutingPolicy"></a>

```typescript
public putGeoproximityRoutingPolicy(value: Route53RecordGeoproximityRoutingPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53Record.Route53Record.putGeoproximityRoutingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy">Route53RecordGeoproximityRoutingPolicy</a>

---

##### `putLatencyRoutingPolicy` <a name="putLatencyRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.putLatencyRoutingPolicy"></a>

```typescript
public putLatencyRoutingPolicy(value: Route53RecordLatencyRoutingPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53Record.Route53Record.putLatencyRoutingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy">Route53RecordLatencyRoutingPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.route53Record.Route53Record.putTimeouts"></a>

```typescript
public putTimeouts(value: Route53RecordTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53Record.Route53Record.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeouts">Route53RecordTimeouts</a>

---

##### `putWeightedRoutingPolicy` <a name="putWeightedRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.putWeightedRoutingPolicy"></a>

```typescript
public putWeightedRoutingPolicy(value: Route53RecordWeightedRoutingPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53Record.Route53Record.putWeightedRoutingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy">Route53RecordWeightedRoutingPolicy</a>

---

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-aws.route53Record.Route53Record.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetAllowOverwrite` <a name="resetAllowOverwrite" id="@cdktf/provider-aws.route53Record.Route53Record.resetAllowOverwrite"></a>

```typescript
public resetAllowOverwrite(): void
```

##### `resetCidrRoutingPolicy` <a name="resetCidrRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.resetCidrRoutingPolicy"></a>

```typescript
public resetCidrRoutingPolicy(): void
```

##### `resetFailoverRoutingPolicy` <a name="resetFailoverRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.resetFailoverRoutingPolicy"></a>

```typescript
public resetFailoverRoutingPolicy(): void
```

##### `resetGeolocationRoutingPolicy` <a name="resetGeolocationRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.resetGeolocationRoutingPolicy"></a>

```typescript
public resetGeolocationRoutingPolicy(): void
```

##### `resetGeoproximityRoutingPolicy` <a name="resetGeoproximityRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.resetGeoproximityRoutingPolicy"></a>

```typescript
public resetGeoproximityRoutingPolicy(): void
```

##### `resetHealthCheckId` <a name="resetHealthCheckId" id="@cdktf/provider-aws.route53Record.Route53Record.resetHealthCheckId"></a>

```typescript
public resetHealthCheckId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.route53Record.Route53Record.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLatencyRoutingPolicy` <a name="resetLatencyRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.resetLatencyRoutingPolicy"></a>

```typescript
public resetLatencyRoutingPolicy(): void
```

##### `resetMultivalueAnswerRoutingPolicy` <a name="resetMultivalueAnswerRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.resetMultivalueAnswerRoutingPolicy"></a>

```typescript
public resetMultivalueAnswerRoutingPolicy(): void
```

##### `resetRecords` <a name="resetRecords" id="@cdktf/provider-aws.route53Record.Route53Record.resetRecords"></a>

```typescript
public resetRecords(): void
```

##### `resetSetIdentifier` <a name="resetSetIdentifier" id="@cdktf/provider-aws.route53Record.Route53Record.resetSetIdentifier"></a>

```typescript
public resetSetIdentifier(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.route53Record.Route53Record.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-aws.route53Record.Route53Record.resetTtl"></a>

```typescript
public resetTtl(): void
```

##### `resetWeightedRoutingPolicy` <a name="resetWeightedRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.resetWeightedRoutingPolicy"></a>

```typescript
public resetWeightedRoutingPolicy(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Route53Record resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.route53Record.Route53Record.isConstruct"></a>

```typescript
import { route53Record } from '@cdktf/provider-aws'

route53Record.Route53Record.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53Record.Route53Record.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.route53Record.Route53Record.isTerraformElement"></a>

```typescript
import { route53Record } from '@cdktf/provider-aws'

route53Record.Route53Record.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53Record.Route53Record.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.route53Record.Route53Record.isTerraformResource"></a>

```typescript
import { route53Record } from '@cdktf/provider-aws'

route53Record.Route53Record.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53Record.Route53Record.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.route53Record.Route53Record.generateConfigForImport"></a>

```typescript
import { route53Record } from '@cdktf/provider-aws'

route53Record.Route53Record.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Route53Record resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53Record.Route53Record.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.route53Record.Route53Record.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53Record to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.route53Record.Route53Record.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53Record that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53Record.Route53Record.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Route53Record to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.alias">alias</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference">Route53RecordAliasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.cidrRoutingPolicy">cidrRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference">Route53RecordCidrRoutingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.failoverRoutingPolicy">failoverRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference">Route53RecordFailoverRoutingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.geolocationRoutingPolicy">geolocationRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference">Route53RecordGeolocationRoutingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.geoproximityRoutingPolicy">geoproximityRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference">Route53RecordGeoproximityRoutingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.latencyRoutingPolicy">latencyRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference">Route53RecordLatencyRoutingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference">Route53RecordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.weightedRoutingPolicy">weightedRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference">Route53RecordWeightedRoutingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.aliasInput">aliasInput</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias">Route53RecordAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.allowOverwriteInput">allowOverwriteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.cidrRoutingPolicyInput">cidrRoutingPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy">Route53RecordCidrRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.failoverRoutingPolicyInput">failoverRoutingPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy">Route53RecordFailoverRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.geolocationRoutingPolicyInput">geolocationRoutingPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy">Route53RecordGeolocationRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.geoproximityRoutingPolicyInput">geoproximityRoutingPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy">Route53RecordGeoproximityRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.healthCheckIdInput">healthCheckIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.latencyRoutingPolicyInput">latencyRoutingPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy">Route53RecordLatencyRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.multivalueAnswerRoutingPolicyInput">multivalueAnswerRoutingPolicyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.recordsInput">recordsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.setIdentifierInput">setIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeouts">Route53RecordTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.weightedRoutingPolicyInput">weightedRoutingPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy">Route53RecordWeightedRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.allowOverwrite">allowOverwrite</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.healthCheckId">healthCheckId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.multivalueAnswerRoutingPolicy">multivalueAnswerRoutingPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.records">records</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.setIdentifier">setIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53Record.Route53Record.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.route53Record.Route53Record.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53Record.Route53Record.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.route53Record.Route53Record.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.route53Record.Route53Record.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.route53Record.Route53Record.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.route53Record.Route53Record.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53Record.Route53Record.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53Record.Route53Record.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53Record.Route53Record.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53Record.Route53Record.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53Record.Route53Record.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53Record.Route53Record.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53Record.Route53Record.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-aws.route53Record.Route53Record.property.alias"></a>

```typescript
public readonly alias: Route53RecordAliasOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference">Route53RecordAliasOutputReference</a>

---

##### `cidrRoutingPolicy`<sup>Required</sup> <a name="cidrRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.property.cidrRoutingPolicy"></a>

```typescript
public readonly cidrRoutingPolicy: Route53RecordCidrRoutingPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference">Route53RecordCidrRoutingPolicyOutputReference</a>

---

##### `failoverRoutingPolicy`<sup>Required</sup> <a name="failoverRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.property.failoverRoutingPolicy"></a>

```typescript
public readonly failoverRoutingPolicy: Route53RecordFailoverRoutingPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference">Route53RecordFailoverRoutingPolicyOutputReference</a>

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-aws.route53Record.Route53Record.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `geolocationRoutingPolicy`<sup>Required</sup> <a name="geolocationRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.property.geolocationRoutingPolicy"></a>

```typescript
public readonly geolocationRoutingPolicy: Route53RecordGeolocationRoutingPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference">Route53RecordGeolocationRoutingPolicyOutputReference</a>

---

##### `geoproximityRoutingPolicy`<sup>Required</sup> <a name="geoproximityRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.property.geoproximityRoutingPolicy"></a>

```typescript
public readonly geoproximityRoutingPolicy: Route53RecordGeoproximityRoutingPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference">Route53RecordGeoproximityRoutingPolicyOutputReference</a>

---

##### `latencyRoutingPolicy`<sup>Required</sup> <a name="latencyRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.property.latencyRoutingPolicy"></a>

```typescript
public readonly latencyRoutingPolicy: Route53RecordLatencyRoutingPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference">Route53RecordLatencyRoutingPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.route53Record.Route53Record.property.timeouts"></a>

```typescript
public readonly timeouts: Route53RecordTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference">Route53RecordTimeoutsOutputReference</a>

---

##### `weightedRoutingPolicy`<sup>Required</sup> <a name="weightedRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.property.weightedRoutingPolicy"></a>

```typescript
public readonly weightedRoutingPolicy: Route53RecordWeightedRoutingPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference">Route53RecordWeightedRoutingPolicyOutputReference</a>

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.aliasInput"></a>

```typescript
public readonly aliasInput: Route53RecordAlias;
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias">Route53RecordAlias</a>

---

##### `allowOverwriteInput`<sup>Optional</sup> <a name="allowOverwriteInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.allowOverwriteInput"></a>

```typescript
public readonly allowOverwriteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cidrRoutingPolicyInput`<sup>Optional</sup> <a name="cidrRoutingPolicyInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.cidrRoutingPolicyInput"></a>

```typescript
public readonly cidrRoutingPolicyInput: Route53RecordCidrRoutingPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy">Route53RecordCidrRoutingPolicy</a>

---

##### `failoverRoutingPolicyInput`<sup>Optional</sup> <a name="failoverRoutingPolicyInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.failoverRoutingPolicyInput"></a>

```typescript
public readonly failoverRoutingPolicyInput: Route53RecordFailoverRoutingPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy">Route53RecordFailoverRoutingPolicy</a>

---

##### `geolocationRoutingPolicyInput`<sup>Optional</sup> <a name="geolocationRoutingPolicyInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.geolocationRoutingPolicyInput"></a>

```typescript
public readonly geolocationRoutingPolicyInput: Route53RecordGeolocationRoutingPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy">Route53RecordGeolocationRoutingPolicy</a>

---

##### `geoproximityRoutingPolicyInput`<sup>Optional</sup> <a name="geoproximityRoutingPolicyInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.geoproximityRoutingPolicyInput"></a>

```typescript
public readonly geoproximityRoutingPolicyInput: Route53RecordGeoproximityRoutingPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy">Route53RecordGeoproximityRoutingPolicy</a>

---

##### `healthCheckIdInput`<sup>Optional</sup> <a name="healthCheckIdInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.healthCheckIdInput"></a>

```typescript
public readonly healthCheckIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `latencyRoutingPolicyInput`<sup>Optional</sup> <a name="latencyRoutingPolicyInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.latencyRoutingPolicyInput"></a>

```typescript
public readonly latencyRoutingPolicyInput: Route53RecordLatencyRoutingPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy">Route53RecordLatencyRoutingPolicy</a>

---

##### `multivalueAnswerRoutingPolicyInput`<sup>Optional</sup> <a name="multivalueAnswerRoutingPolicyInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.multivalueAnswerRoutingPolicyInput"></a>

```typescript
public readonly multivalueAnswerRoutingPolicyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `recordsInput`<sup>Optional</sup> <a name="recordsInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.recordsInput"></a>

```typescript
public readonly recordsInput: string[];
```

- *Type:* string[]

---

##### `setIdentifierInput`<sup>Optional</sup> <a name="setIdentifierInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.setIdentifierInput"></a>

```typescript
public readonly setIdentifierInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | Route53RecordTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeouts">Route53RecordTimeouts</a>

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `weightedRoutingPolicyInput`<sup>Optional</sup> <a name="weightedRoutingPolicyInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.weightedRoutingPolicyInput"></a>

```typescript
public readonly weightedRoutingPolicyInput: Route53RecordWeightedRoutingPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy">Route53RecordWeightedRoutingPolicy</a>

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `allowOverwrite`<sup>Required</sup> <a name="allowOverwrite" id="@cdktf/provider-aws.route53Record.Route53Record.property.allowOverwrite"></a>

```typescript
public readonly allowOverwrite: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthCheckId`<sup>Required</sup> <a name="healthCheckId" id="@cdktf/provider-aws.route53Record.Route53Record.property.healthCheckId"></a>

```typescript
public readonly healthCheckId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53Record.Route53Record.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `multivalueAnswerRoutingPolicy`<sup>Required</sup> <a name="multivalueAnswerRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.property.multivalueAnswerRoutingPolicy"></a>

```typescript
public readonly multivalueAnswerRoutingPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53Record.Route53Record.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `records`<sup>Required</sup> <a name="records" id="@cdktf/provider-aws.route53Record.Route53Record.property.records"></a>

```typescript
public readonly records: string[];
```

- *Type:* string[]

---

##### `setIdentifier`<sup>Required</sup> <a name="setIdentifier" id="@cdktf/provider-aws.route53Record.Route53Record.property.setIdentifier"></a>

```typescript
public readonly setIdentifier: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-aws.route53Record.Route53Record.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.route53Record.Route53Record.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-aws.route53Record.Route53Record.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53Record.Route53Record.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecordAlias <a name="Route53RecordAlias" id="@cdktf/provider-aws.route53Record.Route53RecordAlias"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordAlias.Initializer"></a>

```typescript
import { route53Record } from '@cdktf/provider-aws'

const route53RecordAlias: route53Record.Route53RecordAlias = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias.property.evaluateTargetHealth">evaluateTargetHealth</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#evaluate_target_health Route53Record#evaluate_target_health}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#name Route53Record#name}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias.property.zoneId">zoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#zone_id Route53Record#zone_id}. |

---

##### `evaluateTargetHealth`<sup>Required</sup> <a name="evaluateTargetHealth" id="@cdktf/provider-aws.route53Record.Route53RecordAlias.property.evaluateTargetHealth"></a>

```typescript
public readonly evaluateTargetHealth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#evaluate_target_health Route53Record#evaluate_target_health}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53Record.Route53RecordAlias.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#name Route53Record#name}.

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-aws.route53Record.Route53RecordAlias.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#zone_id Route53Record#zone_id}.

---

### Route53RecordCidrRoutingPolicy <a name="Route53RecordCidrRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy.Initializer"></a>

```typescript
import { route53Record } from '@cdktf/provider-aws'

const route53RecordCidrRoutingPolicy: route53Record.Route53RecordCidrRoutingPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy.property.collectionId">collectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#collection_id Route53Record#collection_id}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy.property.locationName">locationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#location_name Route53Record#location_name}. |

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#collection_id Route53Record#collection_id}.

---

##### `locationName`<sup>Required</sup> <a name="locationName" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy.property.locationName"></a>

```typescript
public readonly locationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#location_name Route53Record#location_name}.

---

### Route53RecordConfig <a name="Route53RecordConfig" id="@cdktf/provider-aws.route53Record.Route53RecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.Initializer"></a>

```typescript
import { route53Record } from '@cdktf/provider-aws'

const route53RecordConfig: route53Record.Route53RecordConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#name Route53Record#name}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#type Route53Record#type}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#zone_id Route53Record#zone_id}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.alias">alias</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias">Route53RecordAlias</a></code> | alias block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.allowOverwrite">allowOverwrite</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#allow_overwrite Route53Record#allow_overwrite}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.cidrRoutingPolicy">cidrRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy">Route53RecordCidrRoutingPolicy</a></code> | cidr_routing_policy block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.failoverRoutingPolicy">failoverRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy">Route53RecordFailoverRoutingPolicy</a></code> | failover_routing_policy block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.geolocationRoutingPolicy">geolocationRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy">Route53RecordGeolocationRoutingPolicy</a></code> | geolocation_routing_policy block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.geoproximityRoutingPolicy">geoproximityRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy">Route53RecordGeoproximityRoutingPolicy</a></code> | geoproximity_routing_policy block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.healthCheckId">healthCheckId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#health_check_id Route53Record#health_check_id}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#id Route53Record#id}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.latencyRoutingPolicy">latencyRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy">Route53RecordLatencyRoutingPolicy</a></code> | latency_routing_policy block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.multivalueAnswerRoutingPolicy">multivalueAnswerRoutingPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#multivalue_answer_routing_policy Route53Record#multivalue_answer_routing_policy}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.records">records</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#records Route53Record#records}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.setIdentifier">setIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#set_identifier Route53Record#set_identifier}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeouts">Route53RecordTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.ttl">ttl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#ttl Route53Record#ttl}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.weightedRoutingPolicy">weightedRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy">Route53RecordWeightedRoutingPolicy</a></code> | weighted_routing_policy block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#name Route53Record#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#type Route53Record#type}.

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#zone_id Route53Record#zone_id}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.alias"></a>

```typescript
public readonly alias: Route53RecordAlias;
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias">Route53RecordAlias</a>

alias block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#alias Route53Record#alias}

---

##### `allowOverwrite`<sup>Optional</sup> <a name="allowOverwrite" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.allowOverwrite"></a>

```typescript
public readonly allowOverwrite: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#allow_overwrite Route53Record#allow_overwrite}.

---

##### `cidrRoutingPolicy`<sup>Optional</sup> <a name="cidrRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.cidrRoutingPolicy"></a>

```typescript
public readonly cidrRoutingPolicy: Route53RecordCidrRoutingPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy">Route53RecordCidrRoutingPolicy</a>

cidr_routing_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#cidr_routing_policy Route53Record#cidr_routing_policy}

---

##### `failoverRoutingPolicy`<sup>Optional</sup> <a name="failoverRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.failoverRoutingPolicy"></a>

```typescript
public readonly failoverRoutingPolicy: Route53RecordFailoverRoutingPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy">Route53RecordFailoverRoutingPolicy</a>

failover_routing_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#failover_routing_policy Route53Record#failover_routing_policy}

---

##### `geolocationRoutingPolicy`<sup>Optional</sup> <a name="geolocationRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.geolocationRoutingPolicy"></a>

```typescript
public readonly geolocationRoutingPolicy: Route53RecordGeolocationRoutingPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy">Route53RecordGeolocationRoutingPolicy</a>

geolocation_routing_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#geolocation_routing_policy Route53Record#geolocation_routing_policy}

---

##### `geoproximityRoutingPolicy`<sup>Optional</sup> <a name="geoproximityRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.geoproximityRoutingPolicy"></a>

```typescript
public readonly geoproximityRoutingPolicy: Route53RecordGeoproximityRoutingPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy">Route53RecordGeoproximityRoutingPolicy</a>

geoproximity_routing_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#geoproximity_routing_policy Route53Record#geoproximity_routing_policy}

---

##### `healthCheckId`<sup>Optional</sup> <a name="healthCheckId" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.healthCheckId"></a>

```typescript
public readonly healthCheckId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#health_check_id Route53Record#health_check_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#id Route53Record#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `latencyRoutingPolicy`<sup>Optional</sup> <a name="latencyRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.latencyRoutingPolicy"></a>

```typescript
public readonly latencyRoutingPolicy: Route53RecordLatencyRoutingPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy">Route53RecordLatencyRoutingPolicy</a>

latency_routing_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#latency_routing_policy Route53Record#latency_routing_policy}

---

##### `multivalueAnswerRoutingPolicy`<sup>Optional</sup> <a name="multivalueAnswerRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.multivalueAnswerRoutingPolicy"></a>

```typescript
public readonly multivalueAnswerRoutingPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#multivalue_answer_routing_policy Route53Record#multivalue_answer_routing_policy}.

---

##### `records`<sup>Optional</sup> <a name="records" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.records"></a>

```typescript
public readonly records: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#records Route53Record#records}.

---

##### `setIdentifier`<sup>Optional</sup> <a name="setIdentifier" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.setIdentifier"></a>

```typescript
public readonly setIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#set_identifier Route53Record#set_identifier}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.timeouts"></a>

```typescript
public readonly timeouts: Route53RecordTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeouts">Route53RecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#timeouts Route53Record#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#ttl Route53Record#ttl}.

---

##### `weightedRoutingPolicy`<sup>Optional</sup> <a name="weightedRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.weightedRoutingPolicy"></a>

```typescript
public readonly weightedRoutingPolicy: Route53RecordWeightedRoutingPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy">Route53RecordWeightedRoutingPolicy</a>

weighted_routing_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#weighted_routing_policy Route53Record#weighted_routing_policy}

---

### Route53RecordFailoverRoutingPolicy <a name="Route53RecordFailoverRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy.Initializer"></a>

```typescript
import { route53Record } from '@cdktf/provider-aws'

const route53RecordFailoverRoutingPolicy: route53Record.Route53RecordFailoverRoutingPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#type Route53Record#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#type Route53Record#type}.

---

### Route53RecordGeolocationRoutingPolicy <a name="Route53RecordGeolocationRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy.Initializer"></a>

```typescript
import { route53Record } from '@cdktf/provider-aws'

const route53RecordGeolocationRoutingPolicy: route53Record.Route53RecordGeolocationRoutingPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy.property.continent">continent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#continent Route53Record#continent}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy.property.country">country</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#country Route53Record#country}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy.property.subdivision">subdivision</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#subdivision Route53Record#subdivision}. |

---

##### `continent`<sup>Optional</sup> <a name="continent" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy.property.continent"></a>

```typescript
public readonly continent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#continent Route53Record#continent}.

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#country Route53Record#country}.

---

##### `subdivision`<sup>Optional</sup> <a name="subdivision" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy.property.subdivision"></a>

```typescript
public readonly subdivision: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#subdivision Route53Record#subdivision}.

---

### Route53RecordGeoproximityRoutingPolicy <a name="Route53RecordGeoproximityRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy.Initializer"></a>

```typescript
import { route53Record } from '@cdktf/provider-aws'

const route53RecordGeoproximityRoutingPolicy: route53Record.Route53RecordGeoproximityRoutingPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy.property.awsRegion">awsRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#aws_region Route53Record#aws_region}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy.property.bias">bias</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#bias Route53Record#bias}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy.property.coordinates">coordinates</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinates">Route53RecordGeoproximityRoutingPolicyCoordinates</a>[]</code> | coordinates block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy.property.localZoneGroup">localZoneGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#local_zone_group Route53Record#local_zone_group}. |

---

##### `awsRegion`<sup>Optional</sup> <a name="awsRegion" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#aws_region Route53Record#aws_region}.

---

##### `bias`<sup>Optional</sup> <a name="bias" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy.property.bias"></a>

```typescript
public readonly bias: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#bias Route53Record#bias}.

---

##### `coordinates`<sup>Optional</sup> <a name="coordinates" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy.property.coordinates"></a>

```typescript
public readonly coordinates: IResolvable | Route53RecordGeoproximityRoutingPolicyCoordinates[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinates">Route53RecordGeoproximityRoutingPolicyCoordinates</a>[]

coordinates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#coordinates Route53Record#coordinates}

---

##### `localZoneGroup`<sup>Optional</sup> <a name="localZoneGroup" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy.property.localZoneGroup"></a>

```typescript
public readonly localZoneGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#local_zone_group Route53Record#local_zone_group}.

---

### Route53RecordGeoproximityRoutingPolicyCoordinates <a name="Route53RecordGeoproximityRoutingPolicyCoordinates" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinates.Initializer"></a>

```typescript
import { route53Record } from '@cdktf/provider-aws'

const route53RecordGeoproximityRoutingPolicyCoordinates: route53Record.Route53RecordGeoproximityRoutingPolicyCoordinates = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinates.property.latitude">latitude</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#latitude Route53Record#latitude}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinates.property.longitude">longitude</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#longitude Route53Record#longitude}. |

---

##### `latitude`<sup>Required</sup> <a name="latitude" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinates.property.latitude"></a>

```typescript
public readonly latitude: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#latitude Route53Record#latitude}.

---

##### `longitude`<sup>Required</sup> <a name="longitude" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinates.property.longitude"></a>

```typescript
public readonly longitude: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#longitude Route53Record#longitude}.

---

### Route53RecordLatencyRoutingPolicy <a name="Route53RecordLatencyRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy.Initializer"></a>

```typescript
import { route53Record } from '@cdktf/provider-aws'

const route53RecordLatencyRoutingPolicy: route53Record.Route53RecordLatencyRoutingPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#region Route53Record#region}. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#region Route53Record#region}.

---

### Route53RecordTimeouts <a name="Route53RecordTimeouts" id="@cdktf/provider-aws.route53Record.Route53RecordTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordTimeouts.Initializer"></a>

```typescript
import { route53Record } from '@cdktf/provider-aws'

const route53RecordTimeouts: route53Record.Route53RecordTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#create Route53Record#create}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#delete Route53Record#delete}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#update Route53Record#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.route53Record.Route53RecordTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#create Route53Record#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.route53Record.Route53RecordTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#delete Route53Record#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.route53Record.Route53RecordTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#update Route53Record#update}.

---

### Route53RecordWeightedRoutingPolicy <a name="Route53RecordWeightedRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy.Initializer"></a>

```typescript
import { route53Record } from '@cdktf/provider-aws'

const route53RecordWeightedRoutingPolicy: route53Record.Route53RecordWeightedRoutingPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#weight Route53Record#weight}. |

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/route53_record#weight Route53Record#weight}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecordAliasOutputReference <a name="Route53RecordAliasOutputReference" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.Initializer"></a>

```typescript
import { route53Record } from '@cdktf/provider-aws'

new route53Record.Route53RecordAliasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.evaluateTargetHealthInput">evaluateTargetHealthInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.evaluateTargetHealth">evaluateTargetHealth</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias">Route53RecordAlias</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evaluateTargetHealthInput`<sup>Optional</sup> <a name="evaluateTargetHealthInput" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.evaluateTargetHealthInput"></a>

```typescript
public readonly evaluateTargetHealthInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `evaluateTargetHealth`<sup>Required</sup> <a name="evaluateTargetHealth" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.evaluateTargetHealth"></a>

```typescript
public readonly evaluateTargetHealth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Route53RecordAlias;
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias">Route53RecordAlias</a>

---


### Route53RecordCidrRoutingPolicyOutputReference <a name="Route53RecordCidrRoutingPolicyOutputReference" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.Initializer"></a>

```typescript
import { route53Record } from '@cdktf/provider-aws'

new route53Record.Route53RecordCidrRoutingPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.collectionIdInput">collectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.locationNameInput">locationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.collectionId">collectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.locationName">locationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy">Route53RecordCidrRoutingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.collectionIdInput"></a>

```typescript
public readonly collectionIdInput: string;
```

- *Type:* string

---

##### `locationNameInput`<sup>Optional</sup> <a name="locationNameInput" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.locationNameInput"></a>

```typescript
public readonly locationNameInput: string;
```

- *Type:* string

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

---

##### `locationName`<sup>Required</sup> <a name="locationName" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.locationName"></a>

```typescript
public readonly locationName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Route53RecordCidrRoutingPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy">Route53RecordCidrRoutingPolicy</a>

---


### Route53RecordFailoverRoutingPolicyOutputReference <a name="Route53RecordFailoverRoutingPolicyOutputReference" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.Initializer"></a>

```typescript
import { route53Record } from '@cdktf/provider-aws'

new route53Record.Route53RecordFailoverRoutingPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy">Route53RecordFailoverRoutingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Route53RecordFailoverRoutingPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy">Route53RecordFailoverRoutingPolicy</a>

---


### Route53RecordGeolocationRoutingPolicyOutputReference <a name="Route53RecordGeolocationRoutingPolicyOutputReference" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.Initializer"></a>

```typescript
import { route53Record } from '@cdktf/provider-aws'

new route53Record.Route53RecordGeolocationRoutingPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resetContinent">resetContinent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resetSubdivision">resetSubdivision</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContinent` <a name="resetContinent" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resetContinent"></a>

```typescript
public resetContinent(): void
```

##### `resetCountry` <a name="resetCountry" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resetCountry"></a>

```typescript
public resetCountry(): void
```

##### `resetSubdivision` <a name="resetSubdivision" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resetSubdivision"></a>

```typescript
public resetSubdivision(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.continentInput">continentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.countryInput">countryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.subdivisionInput">subdivisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.continent">continent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.subdivision">subdivision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy">Route53RecordGeolocationRoutingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `continentInput`<sup>Optional</sup> <a name="continentInput" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.continentInput"></a>

```typescript
public readonly continentInput: string;
```

- *Type:* string

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.countryInput"></a>

```typescript
public readonly countryInput: string;
```

- *Type:* string

---

##### `subdivisionInput`<sup>Optional</sup> <a name="subdivisionInput" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.subdivisionInput"></a>

```typescript
public readonly subdivisionInput: string;
```

- *Type:* string

---

##### `continent`<sup>Required</sup> <a name="continent" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.continent"></a>

```typescript
public readonly continent: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `subdivision`<sup>Required</sup> <a name="subdivision" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.subdivision"></a>

```typescript
public readonly subdivision: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Route53RecordGeolocationRoutingPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy">Route53RecordGeolocationRoutingPolicy</a>

---


### Route53RecordGeoproximityRoutingPolicyCoordinatesList <a name="Route53RecordGeoproximityRoutingPolicyCoordinatesList" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.Initializer"></a>

```typescript
import { route53Record } from '@cdktf/provider-aws'

new route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.get"></a>

```typescript
public get(index: number): Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinates">Route53RecordGeoproximityRoutingPolicyCoordinates</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53RecordGeoproximityRoutingPolicyCoordinates[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinates">Route53RecordGeoproximityRoutingPolicyCoordinates</a>[]

---


### Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference <a name="Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.Initializer"></a>

```typescript
import { route53Record } from '@cdktf/provider-aws'

new route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.property.latitudeInput">latitudeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.property.longitudeInput">longitudeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.property.latitude">latitude</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.property.longitude">longitude</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinates">Route53RecordGeoproximityRoutingPolicyCoordinates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `latitudeInput`<sup>Optional</sup> <a name="latitudeInput" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.property.latitudeInput"></a>

```typescript
public readonly latitudeInput: string;
```

- *Type:* string

---

##### `longitudeInput`<sup>Optional</sup> <a name="longitudeInput" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.property.longitudeInput"></a>

```typescript
public readonly longitudeInput: string;
```

- *Type:* string

---

##### `latitude`<sup>Required</sup> <a name="latitude" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.property.latitude"></a>

```typescript
public readonly latitude: string;
```

- *Type:* string

---

##### `longitude`<sup>Required</sup> <a name="longitude" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.property.longitude"></a>

```typescript
public readonly longitude: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53RecordGeoproximityRoutingPolicyCoordinates;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinates">Route53RecordGeoproximityRoutingPolicyCoordinates</a>

---


### Route53RecordGeoproximityRoutingPolicyOutputReference <a name="Route53RecordGeoproximityRoutingPolicyOutputReference" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.Initializer"></a>

```typescript
import { route53Record } from '@cdktf/provider-aws'

new route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.putCoordinates">putCoordinates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.resetAwsRegion">resetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.resetBias">resetBias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.resetCoordinates">resetCoordinates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.resetLocalZoneGroup">resetLocalZoneGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCoordinates` <a name="putCoordinates" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.putCoordinates"></a>

```typescript
public putCoordinates(value: IResolvable | Route53RecordGeoproximityRoutingPolicyCoordinates[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.putCoordinates.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinates">Route53RecordGeoproximityRoutingPolicyCoordinates</a>[]

---

##### `resetAwsRegion` <a name="resetAwsRegion" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.resetAwsRegion"></a>

```typescript
public resetAwsRegion(): void
```

##### `resetBias` <a name="resetBias" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.resetBias"></a>

```typescript
public resetBias(): void
```

##### `resetCoordinates` <a name="resetCoordinates" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.resetCoordinates"></a>

```typescript
public resetCoordinates(): void
```

##### `resetLocalZoneGroup` <a name="resetLocalZoneGroup" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.resetLocalZoneGroup"></a>

```typescript
public resetLocalZoneGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.coordinates">coordinates</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList">Route53RecordGeoproximityRoutingPolicyCoordinatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.awsRegionInput">awsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.biasInput">biasInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.coordinatesInput">coordinatesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinates">Route53RecordGeoproximityRoutingPolicyCoordinates</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.localZoneGroupInput">localZoneGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.awsRegion">awsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.bias">bias</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.localZoneGroup">localZoneGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy">Route53RecordGeoproximityRoutingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coordinates`<sup>Required</sup> <a name="coordinates" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.coordinates"></a>

```typescript
public readonly coordinates: Route53RecordGeoproximityRoutingPolicyCoordinatesList;
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinatesList">Route53RecordGeoproximityRoutingPolicyCoordinatesList</a>

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.awsRegionInput"></a>

```typescript
public readonly awsRegionInput: string;
```

- *Type:* string

---

##### `biasInput`<sup>Optional</sup> <a name="biasInput" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.biasInput"></a>

```typescript
public readonly biasInput: number;
```

- *Type:* number

---

##### `coordinatesInput`<sup>Optional</sup> <a name="coordinatesInput" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.coordinatesInput"></a>

```typescript
public readonly coordinatesInput: IResolvable | Route53RecordGeoproximityRoutingPolicyCoordinates[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyCoordinates">Route53RecordGeoproximityRoutingPolicyCoordinates</a>[]

---

##### `localZoneGroupInput`<sup>Optional</sup> <a name="localZoneGroupInput" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.localZoneGroupInput"></a>

```typescript
public readonly localZoneGroupInput: string;
```

- *Type:* string

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

---

##### `bias`<sup>Required</sup> <a name="bias" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.bias"></a>

```typescript
public readonly bias: number;
```

- *Type:* number

---

##### `localZoneGroup`<sup>Required</sup> <a name="localZoneGroup" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.localZoneGroup"></a>

```typescript
public readonly localZoneGroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Route53RecordGeoproximityRoutingPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeoproximityRoutingPolicy">Route53RecordGeoproximityRoutingPolicy</a>

---


### Route53RecordLatencyRoutingPolicyOutputReference <a name="Route53RecordLatencyRoutingPolicyOutputReference" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.Initializer"></a>

```typescript
import { route53Record } from '@cdktf/provider-aws'

new route53Record.Route53RecordLatencyRoutingPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy">Route53RecordLatencyRoutingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Route53RecordLatencyRoutingPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy">Route53RecordLatencyRoutingPolicy</a>

---


### Route53RecordTimeoutsOutputReference <a name="Route53RecordTimeoutsOutputReference" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.Initializer"></a>

```typescript
import { route53Record } from '@cdktf/provider-aws'

new route53Record.Route53RecordTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeouts">Route53RecordTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53Record.Route53RecordTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53RecordTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53Record.Route53RecordTimeouts">Route53RecordTimeouts</a>

---


### Route53RecordWeightedRoutingPolicyOutputReference <a name="Route53RecordWeightedRoutingPolicyOutputReference" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.Initializer"></a>

```typescript
import { route53Record } from '@cdktf/provider-aws'

new route53Record.Route53RecordWeightedRoutingPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy">Route53RecordWeightedRoutingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Route53RecordWeightedRoutingPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy">Route53RecordWeightedRoutingPolicy</a>

---



